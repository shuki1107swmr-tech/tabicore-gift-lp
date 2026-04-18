import ContactForm from "./ContactForm";

export default function Home() {
  const stores = [
    "🛍️ JAL PLAZA", "🛍️ ANA FESTA", "✈️ centrair", "🏪 7-ELEVEN",
    "🎁 銘品蔵", "👕 UNIQLO", "🛒 HANDS", "🍜 ふくや", "🍱 やまや",
    "🍬 御菓子御殿", "🏯 琉球村", "🏢 岩崎本舗", "🌺 おきなわワールド",
  ];

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">tabicore <span>GIFT</span></div>
        <a href="#form" className="header-cta">無料で資料請求</a>
      </header>

      {/* PROBLEM */}
      <section className="problem">
        <div className="inner">
          <span className="section-label">こんな課題ありませんか？</span>
          <h2>旅行業界の特典・ギフト、<br />こんなお悩みはありませんか？</h2>
          <div className="divider" />
          <ul className="problem-list">
            {[
              ["1", "お客様に特典を提供したいが、目新しいサービスがない", "いつもお決まりのギフト券になってしまい、新鮮さがない"],
              ["2", "金券などでの在庫管理が面倒", "金券の管理は社内でも稟議が通りづらく、進めにくい"],
              ["3", "コストをかけたくない", "少ない予算で試しながら進めたい"],
              ["4", "すぐに実施したい、急いでいる", "近々のキャンペーンを予定しており探している"],
            ].map(([num, title, sub]) => (
              <li key={num}>
                <span className="problem-num">{num}</span>
                <div>
                  <strong>{title}</strong>
                  <br /><span style={{fontSize: "12px", color: "var(--text-sub)"}}>ex) {sub}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="problem-arrow">↓</p>
          <div className="problem-solution">
            tabicore GIFTなら、<strong>初期費用・月額費用ゼロ</strong>で<br />
            最短1週間から始められます！
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="whatis">
        <div className="inner">
          <span className="section-label">tabicore GIFTとは？</span>
          <h2>旅行業界向け<br />eギフトサービス</h2>
          <p className="section-desc">
            全国の空港・駅などのお土産店や飲食店など、出張や観光客に喜ばれる店舗で使える便利な電子ギフト券。
            24時間いつでも発行し、お客様へ提供できます。
          </p>
          <div className="feature-list">
            {[
              ["1", "全国の駅や空港などで使える！", "有効期限内なら全国どこでも利用OK。JAL PLAZA・ANA FESTA・御菓子御殿など全国約500店舗以上で利用可能。"],
              ["2", "訪日外国人へも提供可能", "日本語・英語・韓国語・中国語（簡体・繁体）にAIで自動翻訳。メンバー会員やロイヤリティ顧客の獲得にも。"],
              ["3", "在庫管理不要で手間いらず", "24時間いつでも発行可能な管理画面を提供。思いついた時にすぐ発行できる。"],
              ["4", "券種は500円券・1,000円券", "初期費用・月額費用無料で発行分のみ請求。ちょっとした特典から会員特典まで自由にカスタマイズ。"],
              ["5", "最短1週間で実施可能", "契約からスタートまでスピーディに対応。アプリのダウンロードも不要。"],
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

      {/* RESULTS */}
      <section className="results">
        <div className="inner">
          <span className="section-label">導入実績</span>
          <h2>全国約500店舗以上が<br />すでに導入済み</h2>
          <div className="divider" />
          <div className="result-numbers">
            {[
              ["500", "+", "全国利用可能\n店舗数"],
              ["10", "社+", "連携旅行会社\n数"],
              ["70", "施設+", "導入ホテル・\n宿泊施設数"],
              ["¥", "0", "店舗側の\n全費用"],
            ].map(([n, unit, label]) => (
              <div key={label} className="result-number-card">
                <div className="num">{n}<span>{unit}</span></div>
                <div className="label">{label.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</div>
              </div>
            ))}
          </div>
          <p className="result-logos-title">導入実績店舗・連携パートナー（一部）</p>
          <div className="logo-marquee-wrapper">
            <div className="logo-track">
              {[...stores, ...stores].map((s, i) => (
                <span key={i} className="logo-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTILANG */}
      <section className="multilang">
        <div className="inner">
          <span className="section-label">訪日外国人対応</span>
          <h2>AIで自動翻訳、<br />4言語に対応</h2>
          <p className="section-desc">
            日本語・英語・韓国語・中国語（簡体・繁体）に自動翻訳。<br />
            訪日インバウンド客にも喜ばれるギフト体験を提供。
          </p>
          <div className="lang-tags">
            {["🇯🇵 日本語", "🇺🇸 英語", "🇰🇷 韓国語", "🇨🇳 中国語（簡体）", "🇹🇼 中国語（繁体）"].map(lang => (
              <span key={lang} className="lang-tag">{lang}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <h2>まずは無料で<br />資料請求・ご相談</h2>
        <p>初期費用・月額費用ゼロ。発行分のみのシンプルな料金体系。</p>
        <a href="#form" className="cta-btn">今すぐ無料で資料請求する</a>
        <p className="cta-note">最短1週間で導入開始 · 担当者がご対応します</p>
      </div>

      {/* FORM */}
      <section className="form-section" id="form">
        <div className="inner">
          <span className="section-label" style={{display: "block", textAlign: "center", marginBottom: "8px"}}>資料請求・お問い合わせ</span>
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
