import ContactForm from "./ContactForm";

export default function Home() {
  const partners = [
    "✈️ ANA", "✈️ ANA Akindo", "✈️ JALPAK", "✈️ HIS", "✈️ 日本旅行",
    "✈️ エアトリ", "🏨 近畿日本ツーリスト", "🏨 阪急交通社", "✈️ スカイパックツアーズ",
    "✈️ J TRIP", "✈️ Jumbo Tours", "🏨 NEEDS TOUR",
  ];

  const stores = [
    "🛍️ JAL PLAZA", "🛍️ ANA FESTA", "✈️ centrair", "🏪 7-ELEVEN",
    "🎁 銘品蔵", "👕 UNIQLO", "🛒 HANDS", "🍜 ふくや", "🍱 やまや",
    "🍬 御菓子御殿", "🏯 琉球村", "🏢 岩崎本舗", "🌺 おきなわワールド",
  ];

  const hotels = [
    "リッチモンドホテル帯広駅前", "ホテルエミオン札幌", "ホテル日航ノースランド帯広",
    "ホテルJALシティ東京豊洲", "ホテルトラスティ名古屋白川", "ホテルアスティア名古屋栄",
    "プレジデントホテル博多", "ホテルセンチュリーアート", "平和台ホテル天神",
    "リッチモンドホテル長崎思案橋", "リッチモンドホテル熊本新市街",
    "リッチモンドホテル鹿児島天文館", "ホテル グラン コンソルト那覇",
    "BiBi Hotel コンベンションベイ", "BiBi Hotel 国際通り",
  ];

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">tabicore <span>GIFT</span></div>
        <a href="#form" className="header-cta">無料で資料請求</a>
      </header>

      {/* HERO */}
      <div className="hero">
        <p className="hero-badge fade-up">🎁 旅行業界向け eギフトサービス</p>
        <p className="hero-desc fade-up fade-up-delay-1">
          全国の空港・駅・お土産店で使えるeギフト券を、<br />
          24時間いつでも・在庫管理不要で発行できます
        </p>
        <div className="free-tags fade-up fade-up-delay-1">
          <span className="free-tag">初期費用 ¥0</span>
          <span className="free-tag">月額費用 ¥0</span>
          <span className="free-tag">最短1週間で開始</span>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <p className="trust-bar-label">✈️ 連携旅行会社・導入実績（一部）</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="trust-logo-item">{p}</span>
            ))}
          </div>
        </div>
      </div>

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

      {/* USE CASES */}
      <section className="usecases">
        <div className="inner">
          <span className="section-label">活用方法</span>
          <h2>4つの活用シーン</h2>
          <p className="section-desc">
            旅行会社・ホテル・宿泊施設など多様な場面で活用されています
          </p>
          <div className="usecase-cards">
            {[
              ["🏨", "OTA手数料を削減する", "OTAで集客 → チェックイン時にeギフトカードを提供 → 次回は自社サイトで予約すると500円券プレゼント → OTA手数料8〜20%を大幅削減し、純利益に。"],
              ["🌟", "特典付きプランで新規顧客獲得", "OTAや自社サイトにてtabicore GIFT付きプランを作成し、新規顧客を獲得。特典付きプランの顧客はリピート顧客になりやすい。"],
              ["🍳", "朝食券を無料で電子化", "朝食券の代わりにtabicore GIFTを提供。朝食会場入口に二次元コードを設置し利用済み処理。使わなかった場合は全国のお土産店でも使えて顧客満足度UP。"],
              ["🎖️", "メンバー会員獲得で顧客の囲い込み", "メンバー会員登録の特典にtabicore GIFTを活用。1,000円券を入会特典に設定し、JAL PLAZA・ANA FESTAなど全国店舗で使える魅力でロイヤリティ顧客を獲得。"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="usecase-card">
                <div className="usecase-card-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
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

      {/* HOW TO USE */}
      <section className="how">
        <div className="inner">
          <span className="section-label">発行方法</span>
          <h2>お客様へのお渡しは<br />たった3ステップ</h2>
          <p className="section-desc">
            アプリのダウンロード不要。管理画面から簡単に操作できます。
          </p>
          <div className="flow-steps">
            {[
              ["1", "管理画面で発行設定", "利用可能開始日とチケット枚数を設定し、二次元コードを印刷するだけ。", "🖥️"],
              ["2", "お客様へ受取用紙を渡す", "お客様はQRコードからアクセスし、そのままチケットを受け取れます。アプリ不要。", "🎫"],
              ["3", "店舗のQRコードを読み込んで利用", "全国のお土産店・飲食店などのQRコードをスマホで読み込むだけで利用完了。", "📱"],
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

      {/* HOTEL LIST */}
      <section className="hotels">
        <div className="inner">
          <span className="section-label">導入ホテル一覧</span>
          <h2>全国70施設以上に<br />導入済み</h2>
          <p className="section-desc">北海道・東京・愛知・福岡・沖縄など全国に広がっています</p>
        </div>
        <div className="hotel-marquee-wrapper">
          <div className="hotel-track">
            {[...hotels, ...hotels].map((h, i) => (
              <span key={i} className="hotel-tag">🏨 {h}</span>
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
