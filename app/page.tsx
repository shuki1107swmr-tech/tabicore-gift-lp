import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">tabicore <span>GIFT</span></div>
        <a href="#form" className="header-cta">無料で加盟申請</a>
      </header>

      {/* WHAT IS */}
      <section className="whatis">
        <div className="inner">
          <span className="section-label">tabicore GIFT 加盟店募集</span>
          <h2>観光客・旅行者が<br />自然にあなたの店へ</h2>
          <p className="section-desc">
            tabicore GIFTに加盟するだけで、全国の旅行会社・ホテルが発行したeギフト券を持つ
            観光客・旅行者があなたのお店を訪れます。加盟費用・月額費用・決済手数料はすべて無料。
          </p>
          <div className="feature-list">
            {[
              ["1", "来店客が自然に増える", "全国10社以上の旅行会社・70施設以上のホテルが発行するeギフト券の利用先として登録。観光客・旅行者が目的地としてあなたのお店を選びます。"],
              ["2", "店舗側の費用は完全ゼロ", "初期費用・月額費用・決済手数料すべて無料。売上が上がるだけで、加盟に伴うコストは一切かかりません。"],
              ["3", "QRコードだけで完結", "レジ横にQRコードを設置するだけ。お客様がスマホで読み込んで利用完了。専用端末・アプリのインストール不要。"],
              ["4", "訪日外国人にも対応", "日本語・英語・韓国語・中国語（簡体・繁体）に自動対応。インバウンド観光客もスムーズに利用できます。"],
              ["5", "最短1週間で加盟開始", "申し込みから加盟店登録まで最短1週間。手続きはシンプルで担当者が丁寧にサポートします。"],
            ].map(([num, title, desc]) => (
              <div key={num} className="feature-item">
                <span className="feature-num">{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="inner">
          <span className="section-label">加盟後の流れ</span>
          <h2>加盟後は<br />たったこれだけ</h2>
          <p className="section-desc">
            難しい操作は一切なし。QRコードを置くだけで準備完了です。
          </p>
          <div className="flow-steps">
            {[
              ["1", "QRコードをレジ横に設置", "加盟後、専用のQRコードをお渡しします。レジ横や入口に置くだけでOK。", "📋"],
              ["2", "観光客・旅行者が来店・利用", "eギフト券を持ったお客様がスマホでQRコードを読み込み、チケットを消化。", "📱"],
              ["3", "売上として計上", "利用分は翌月末に精算。手数料ゼロで売上がそのまま入ります。", "💰"],
            ].map(([num, title, desc, icon], idx) => (
              <div key={num}>
                {idx > 0 && <div className="flow-connector">↓</div>}
                <div className="flow-step">
                  <span className="flow-step-num">{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <span className="flow-step-icon">{icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <h2>まずは無料で<br />加盟申請・ご相談</h2>
        <p>加盟費用・月額費用・決済手数料すべてゼロ。リスクなしで始められます。</p>
        <a href="#form" className="cta-btn">今すぐ無料で加盟申請する</a>
        <p className="cta-note">最短1週間で加盟開始 · 担当者がご対応します</p>
      </div>

      {/* FORM */}
      <section className="form-section" id="form">
        <div className="inner">
          <span className="section-label" style={{display: "block", textAlign: "center", marginBottom: "8px"}}>加盟申請・お問い合わせ</span>
          <h2 style={{textAlign: "center"}}>無料でご相談ください</h2>
          <p className="section-desc" style={{textAlign: "center"}}>担当者より2営業日以内にご連絡いたします</p>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">tabicore GIFT</div>
        <p style={{marginBottom: "8px"}}>エイキュウリンクス株式会社</p>
        <p>〒810-0001 福岡市早良区西新 1-9-2-2F</p>
        <p style={{marginTop: "16px"}}>
          <a href="#">プライバシーポリシー</a>
          <a href="#">特定商取引法に基づく表示</a>
          <a href="#">お問い合わせ</a>
        </p>
        <p style={{marginTop: "12px"}}>© 2025 エイキュウリンクス株式会社 All rights reserved.</p>
      </footer>
    </>
  );
}
