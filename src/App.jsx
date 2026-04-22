import { useEffect, useState } from 'react'

const callPoints = [
  '中国の黒竜江省から来ました。',
  '2017年に日本へ来て、もう九年近くになります。',
  '「はい」でも「ペイ」でも大丈夫です。',
  'PayPay に似ていて覚えやすいので、「ペイ」と呼ばれることが多いです。',
]

const originKeywords = ['中国', '黒竜江省', '氷', '雪', '2017年に来日']

const games = ['原神', 'アークナイツ', '崩壊スターレール', 'ゼンゼロ', 'シャドーバス']

const animeTitles = ['ノゲノラ', 'メダリスト', 'リゼロ', 'ポケモン', '暗殺教室']

const researchKeywords = ['ライブラリ', '依存関係', '脆弱性管理', 'サプライチェーン']

const heroHighlights = [
  { value: '2017', label: '来日' },
  { value: 'SBOM', label: '研究' },
  { value: '500+', label: 'TOEIC目標' },
]

const researchCards = [
  {
    label: '対象',
    title: 'Python 環境の SBOM 生成ツール',
    body: '実際の利用環境に近い条件で、生成精度と出力の差を比較しています。',
  },
  {
    label: '方法',
    title: 'インストール結果を基準に比較',
    body: 'ツールの出力だけでなく、実環境とのズレに注目して分析しています。',
  },
  {
    label: '目的',
    title: '精度と不足点の整理',
    body: '既存ツールの得意・不得意を明確にし、改善の方向を見やすくすることが狙いです。',
  },
]

const sections = [
  { id: 'call', label: '呼び方' },
  { id: 'origin', label: '出身' },
  { id: 'history', label: '略歴' },
  { id: 'likes', label: '好きなもの' },
  { id: 'hobby', label: '趣味と目標' },
  { id: 'research', label: '研究関連' },
  { id: 'end', label: '終わり' },
]

const timelineItems = [
  {
    year: '2002',
    title: '中国で生まれる',
    body: '2002年8月16日に中国で生まれ、中国で小学校と中学校を過ごしました。',
  },
  {
    year: '2017',
    title: '日本へ来る',
    body: '中学校卒業後の2017年9月14日に来日しました。',
  },
  {
    year: '2019',
    title: '中学校を卒業',
    body: '日本語未習得の状態から、大清水中学校で学び直し、中学校を卒業しました。',
  },
  {
    year: '2022',
    title: '大学へ進学',
    body: '相模原弥栄高等学校を経て、東京都市大学に進学しました。',
  },
  {
    year: '2026',
    title: '大学院へ進学',
    body: '学部卒業後はそのまま本校大学院へ進学し、現在も学んでいます。',
  },
]

const imageBase = `${import.meta.env.BASE_URL}image/`

const imageSources = {
  harbin: {
    src: `${imageBase}harbin-ice-festival.jpg`,
    alt: 'ハルビンの氷雪祭りの風景',
    credit: 'Harbin Ice Festival / Wikimedia Commons',
  },
  orca: {
    src: `${imageBase}orca.jpg`,
    alt: '海面から跳ねるシャチ',
    credit: 'Killerwhales jumping / Wikimedia Commons',
  },
  billiards: {
    src: `${imageBase}billiards.jpg`,
    alt: 'ビリヤード台とボール',
    credit: 'Pool table with equipment / Wikimedia Commons',
  },
  game: {
    src: `${imageBase}genshin.png`,
    alt: '原神のイラスト',
    credit: 'ゲーム画像（ローカル画像）',
  },
  anime: {
    src: `${imageBase}pokemon.png`,
    alt: 'ポケモンのイラスト',
    credit: 'アニメ画像（ローカル画像）',
  },
  historyBg: {
    src: `${imageBase}history-background.jpg`,
  },
  likesBg: {
    src: `${imageBase}likes-background.jpg`,
  },
  researchBg: {
    src: `${imageBase}research-background.jpg`,
  },
  hero: {
    src: `${imageBase}hero-background.jpg`,
    alt: '雪と青空の風景',
    credit: 'Hero background / Pexels',
  },
}

function SectionTitle({ title, note }) {
  return (
    <div className="section-head">
      <div>
        <h2>{title}</h2>
        <div className="underline" />
      </div>
      <p className="section-note">{note}</p>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('call')
  const [openLike, setOpenLike] = useState('game')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowBackToTop(scrollTop > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.add('reveal-ready')

    const elements = Array.from(document.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-12% 0px -55% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    sections.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) {
        sectionObserver.observe(section)
      }
    })

    return () => {
      observer.disconnect()
      sectionObserver.disconnect()
      document.body.classList.remove('reveal-ready')
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ '--progress': `${scrollProgress}%` }} aria-hidden="true" />

      <button
        type="button"
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="ページトップへ戻る"
      >
        ↑
      </button>

      <header className="hero wrap" id="top">
        <div className="hero-grid">
          <article className="card hero-main reveal">
            <div>
              <span className="eyebrow">プロフィール</span>
              <p className="hero-kicker">中国から日本へ</p>
              <h1>裴 元嘉</h1>
              <p className="name-en hero-name-en">PEI YUANJIA</p>
              <p className="hero-lead">
                学びを積み重ねながら、<br />
                SBOM とソフトウェアの信頼性を研究しています。
              </p>
              <div className="hero-keywords">
                <span className="hero-keyword">研究</span>
                <span className="hero-keyword">信頼性</span>
                <span className="hero-keyword">成長</span>
              </div>
              <div className="hero-highlight-grid">
                {heroHighlights.map((item) => (
                  <div className="hero-highlight-card" key={item.label}>
                    <span className="hero-highlight-value">{item.value}</span>
                    <span className="hero-highlight-label">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="lab">計算機ソフトウェア研究室</p>
            </div>
            <div className="hero-meta">
              <p className="student-id">学籍番号: 2681461</p>
              <p className="edition">青と白を基調にした自己紹介ページ</p>
            </div>
          </article>

          <aside className="card hero-visual reveal">
            <div className="visual-box visual-box-photo">
              <img className="hero-background-image" src={imageSources.hero.src} alt={imageSources.hero.alt} />
              <div className="hero-visual-overlay" />
              <div className="hero-badge-row">
                <span className="hero-badge">2002</span>
                <span className="hero-badge">2017年来日</span>
                <span className="hero-badge">SBOM</span>
              </div>
              <div className="hero-visual-copy">
                <p className="hero-visual-kicker">静かな青、積み重ねる歩み</p>
                <p className="hero-visual-title">落ち着いて、誠実に</p>
                <p className="hero-visual-text">
                  環境が変わっても、少しずつ積み重ねながら前に進むことを大切にしています。
                </p>
              </div>
              <p className="hello">よろしくお願いします</p>
              <p className="hero-image-credit">{imageSources.hero.credit}</p>
            </div>
          </aside>
        </div>
      </header>

      <nav className="top-nav">
        <div className="nav-title">目次</div>
        <div className="nav-list">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'is-active' : ''}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="wrap">
        <section id="call">
          <SectionTitle title="呼び方" note="名前について" />

          <div className="grid-2">
            <article className="panel reveal">
              <p className="split-title">裴（はい）元嘉 / PEI YUANJIA</p>
              <ul className="list">
                {callPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <aside className="panel soft reveal">
              <p className="split-title">おすすめの呼び方</p>
              <div className="pill-row">
                <span className="pill">はい</span>
                <span className="pill">ペイ</span>
              </div>
              <p className="body-copy">
                どちらでも気軽に呼んでください。<br />
                日本語でもローマ字でも、覚えてもらえたらうれしいです。
              </p>
            </aside>
          </div>
        </section>

        <section id="origin">
          <SectionTitle title="出身" note="中国・黒竜江省" />

          <div className="grid-2">
            <article className="panel reveal">
              <figure className="media-frame tall-frame">
                <img
                  className="media-image"
                  src={imageSources.harbin.src}
                  alt={imageSources.harbin.alt}
                  loading="lazy"
                />
              </figure>
              <h3 className="panel-title">氷と雪が印象的</h3>
              <p className="body-copy">
                黒竜江省といえば、やはり冬の景色。<br />
                冷たい空気と雪景色のイメージが強く残っています。
              </p>
              <p className="image-credit">{imageSources.harbin.credit}</p>
            </article>

            <aside className="panel soft reveal">
              <p className="split-title">キーワード</p>
              <div className="pill-row">
                {originKeywords.map((keyword) => (
                  <span className="pill" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="quote">
                “寒さの記憶” が
                <br />
                ふるさとの紹介ポイントです。
              </p>
            </aside>
          </div>
        </section>

        <section
          id="history"
          className="section-surface history-surface"
          style={{ '--surface-bg': `url(${imageSources.historyBg.src})` }}
        >
          <SectionTitle title="略歴" note="これまでの流れ" />

          <div className="history-layout reveal">
            <aside className="panel history-summary-card">
              <p className="split-title">概要</p>
              <p className="history-summary-title">中国から日本へ、
                <br />
                学びをつないできた流れ</p>
              <p className="body-copy timeline-note">
                2002年生まれ。中国で小中学校を過ごし、2017年9月14日に来日しました。
                その後は日本の中学校・高校・大学を経て、現在は東京都市大学大学院で学んでいます。
              </p>
              <div className="history-stat-grid">
                <div className="history-stat">
                  <span className="history-stat-value">2002</span>
                  <span className="history-stat-label">誕生</span>
                </div>
                <div className="history-stat">
                  <span className="history-stat-value">2017</span>
                  <span className="history-stat-label">来日</span>
                </div>
                <div className="history-stat">
                  <span className="history-stat-value">2026</span>
                  <span className="history-stat-label">大学院</span>
                </div>
              </div>
              <p className="history-summary-footnote">5つの節目で、環境の変化と学びの流れを整理しています。</p>
            </aside>

            <div className="panel soft history-timeline-card">
              <div className="timeline-list premium-timeline">
                {timelineItems.map((item, i) => (
                  <article className="timeline-item premium-timeline-item reveal" style={{ '--i': i }} key={`${item.year}-${item.title}`}>
                    <div className="timeline-marker" aria-hidden="true" />
                    <p className="timeline-year">{item.year}</p>
                    <div className="timeline-content">
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="body-copy timeline-copy">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="likes"
          className="section-surface section-surface-soft likes-surface"
          style={{ '--surface-bg': `url(${imageSources.likesBg.src})` }}
        >
          <SectionTitle title="好きなもの" note="趣味とお気に入り" />

          <div className="likes-stack">
            <div className="likes-group reveal">
              <article className={`panel likes-feature-card interactive-card${openLike === 'game' ? ' is-open' : ''}`}>
                <figure className="media-frame likes-media-frame genshin-frame">
                  <img
                    className="media-image likes-media-image"
                    src={imageSources.game.src}
                    alt={imageSources.game.alt}
                    loading="lazy"
                  />
                </figure>
                <h3 className="panel-title">ゲーム</h3>
                <p className="body-copy">
                  世界観や育成要素がある作品を長く遊ぶことが多く、少しずつ積み重ねるタイプのゲームが特に好きです。
                </p>
                <div className="pill-row visual-pills">
                  <span className="pill">ゲーム</span>
                  <span className="pill">世界観</span>
                  <span className="pill">キャラクター</span>
                </div>
                <button
                  type="button"
                  className="detail-toggle"
                  onClick={() => setOpenLike(openLike === 'game' ? '' : 'game')}
                  aria-expanded={openLike === 'game'}
                >
                  {openLike === 'game' ? '閉じる' : '好きなゲームを見る'}
                </button>
                <p className="image-credit">{imageSources.game.credit}</p>
              </article>

              {openLike === 'game' ? (
                <article className="panel likes-detail-card likes-detail-expanded">
                  <p className="split-title">よく遊ぶゲーム</p>
                  <p className="detail-intro">
                    長く遊びたくなる作品は、世界観やキャラクターの魅力がしっかりあるものです。
                  </p>
                  <div className="badge-grid">
                    {games.map((game) => (
                      <div className="badge" key={game}>
                        {game}
                      </div>
                    ))}
                  </div>
                </article>
              ) : null}
            </div>

            <div className="likes-group reveal">
              <article className={`panel soft likes-feature-card interactive-card${openLike === 'anime' ? ' is-open' : ''}`}>
                <figure className="media-frame likes-media-frame pokemon-frame">
                  <img
                    className="media-image likes-media-image"
                    src={imageSources.anime.src}
                    alt={imageSources.anime.alt}
                    loading="lazy"
                  />
                </figure>
                <h3 className="panel-title">アニメ</h3>
                <p className="body-copy">
                  作画や演出を見るのも好きで、テンポが良い作品やキャラクターの魅力が強い作品によく惹かれます。
                </p>
                <div className="pill-row visual-pills">
                  <span className="pill">アニメ</span>
                  <span className="pill">ライトノベル</span>
                  <span className="pill">物語</span>
                </div>
                <button
                  type="button"
                  className="detail-toggle"
                  onClick={() => setOpenLike(openLike === 'anime' ? '' : 'anime')}
                  aria-expanded={openLike === 'anime'}
                >
                  {openLike === 'anime' ? '閉じる' : '好きなアニメを見る'}
                </button>
                <p className="image-credit">{imageSources.anime.credit}</p>
              </article>

              {openLike === 'anime' ? (
                <article className="panel soft likes-detail-card likes-detail-expanded">
                  <p className="split-title">好きなアニメ</p>
                  <p className="detail-intro">
                    作画やテンポだけでなく、キャラクターの感情がしっかり伝わる作品が特に印象に残ります。
                  </p>
                  <div className="badge-grid">
                    {animeTitles.map((title) => (
                      <div className="badge" key={title}>
                        {title}
                      </div>
                    ))}
                  </div>
                </article>
              ) : null}
            </div>
          </div>

          <article className="panel reveal stack-gap">
            <figure className="media-frame wide-frame">
              <img
                className="media-image"
                src={imageSources.orca.src}
                alt={imageSources.orca.alt}
                loading="lazy"
              />
            </figure>
            <h3 className="panel-title">シャチも好きです</h3>
            <p className="body-copy">強さとかっこよさの両方があるところに惹かれます。</p>
            <p className="image-credit">{imageSources.orca.credit}</p>
          </article>
        </section>

        <section id="hobby">
          <SectionTitle title="趣味と目標" note="好きなこととこれから" />

          <div className="grid-2">
            <article className="panel reveal">
              <figure className="media-frame wide-frame">
                <img
                  className="media-image"
                  src={imageSources.billiards.src}
                  alt={imageSources.billiards.alt}
                  loading="lazy"
                />
              </figure>
              <p className="split-title accent-title">趣味</p>
              <p className="large-copy">
                好きなものを楽しむこと
                <br />
                ビリヤード（まだまだ練習中です）
              </p>
              <p className="image-credit">{imageSources.billiards.credit}</p>
            </article>

            <aside className="panel soft reveal">
              <p className="split-title">将来なりたい人物像</p>
              <p className="big">信頼される人</p>
              <p className="body-copy emphasis-copy">
                任されたことをきちんとやり切る。<br />
                進捗の共有や相談を怠らず、<br />
                周囲と協力しながら誠実に取り組む。
              </p>
              <div className="divider" />
              <p className="split-title">抱負</p>
              <p className="goal-copy">今年でTOEIC500点以上の点数を取る！</p>
            </aside>
          </div>
        </section>

        <section
          id="research"
          className="section-surface research-surface"
          style={{ '--surface-bg': `url(${imageSources.researchBg.src})` }}
        >
          <SectionTitle title="研究関連" note="SBOM を中心に" />

          <div className="grid-2">
            <article className="panel reveal">
              <p className="big">SBOM</p>
              <p className="body-copy">
                これまで取り組んできた内容を、シンプルに2つのブロックで紹介します。
              </p>
              <div className="research-grid">
                {researchKeywords.map((keyword) => (
                  <div className="research-tile" key={keyword}>
                    {keyword}
                  </div>
                ))}
              </div>
            </article>

            <aside className="panel soft reveal">
              <p className="split-title">SBOM とは</p>
              <p className="sbom-title">ソフトウェアの「成分表」</p>
              <p className="body-copy">含まれるライブラリや依存関係を一覧化したものです。</p>
              <ul className="list">
                <li>ライブラリ: 利用している部品</li>
                <li>依存関係: どのソフトが何に依存するか</li>
                <li>脆弱性管理: 既知の問題を追跡しやすい</li>
                <li>サプライチェーン管理: 構成の透明性を高める</li>
              </ul>
            </aside>
          </div>

          <div className="panel research-detail reveal research-detail-shell">
            <div className="section-head section-head-compact">
              <h3 className="research-heading">これまでの研究内容</h3>
              <p className="section-note">Python 環境における SBOM 生成ツール</p>
            </div>
            <div className="research-card-grid">
              {researchCards.map((card) => (
                <article className="research-story-card" key={card.label}>
                  <p className="research-story-label">{card.label}</p>
                  <h4 className="research-story-title">{card.title}</h4>
                  <p className="research-story-body">{card.body}</p>
                </article>
              ))}
            </div>
            <p className="body-copy detail-gap research-conclusion">
              実環境を基準にすることで、ツールの出力だけでは見えにくい差や課題を分析してきました。
            </p>
          </div>
        </section>

        <section className="footer" id="end">
          <div className="footer-box reveal">
            <p className="split-title">終わり</p>
            <p className="big">ご清聴ありがとうございました</p>
            <p className="body-copy footer-copy">今後ともよろしくお願いします。</p>
            <div className="orca">ありがとうございました</div>
            <p className="source-note">
              写真素材には Wikimedia Commons の公開画像とローカル画像を使用しています。
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
