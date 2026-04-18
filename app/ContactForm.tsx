"use client";
import { useState } from "react";

declare function gtag(...args: unknown[]): void;

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdhxMRAW9vEcH2FyY80q9DGwV8V8qok1SY73X4gMvwlFqGR6g/formResponse";

export default function ContactForm() {
  const [values, setValues] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    industry: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const body = new URLSearchParams({
      "entry.1803905113": values.company,
      "entry.592222121": values.name,
      "entry.860389288": values.phone,
      "entry.1732842822": values.email,
      "entry.685713246": values.industry,
    });

    try {
      // Google Forms does not support CORS, so we use no-cors mode.
      // The response is opaque — we assume success if no network error.
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setSubmitted(true);
      // GA4 フォーム送信イベント
      if (typeof gtag !== "undefined") {
        gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "contact_form",
          industry: values.industry,
        });
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-card form-thanks">
        <div className="thanks-icon">✅</div>
        <h3>送信が完了しました</h3>
        <p>
          お問い合わせありがとうございます。
          <br />
          担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="company">
          会社名・施設名 <span>必須</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="例）〇〇ホテル"
          required
          value={values.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">
          ご担当者名 <span>必須</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="例）山田 太郎"
          required
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">
          電話番号 <span>必須</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="例）092-000-0000"
          required
          value={values.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          メールアドレス <span>必須</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="例）yamada@example.com"
          required
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="industry">
          業種 <span>必須</span>
        </label>
        <select
          id="industry"
          name="industry"
          required
          value={values.industry}
          onChange={handleChange}
        >
          <option value="">選択してください</option>
          <option value="旅行会社">旅行会社</option>
          <option value="ホテル・旅館">ホテル・旅館</option>
          <option value="宿泊施設">宿泊施設</option>
          <option value="お土産店">お土産店</option>
          <option value="飲食店">飲食店</option>
          <option value="観光施設">観光施設</option>
          <option value="その他">その他</option>
        </select>
      </div>

      {error && (
        <p className="form-error">
          送信に失敗しました。お手数ですが再度お試しください。
        </p>
      )}

      <button className="form-submit" type="submit" disabled={submitting}>
        {submitting ? "送信中..." : "無料で資料請求する →"}
      </button>
      <p className="form-note">
        送信いただいた情報はプライバシーポリシーに従い取り扱います。
      </p>
    </form>
  );
}
