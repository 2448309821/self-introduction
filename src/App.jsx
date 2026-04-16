const callPoints = [
  '中国の黒竜江省から来ました。',
  '2017年に日本へ来て、もう九年近くになります。',
  '「はい」でも「ペイ」でも大丈夫です。',
  'PayPay に似ていて覚えやすいので、「ペイ」と呼ばれることが多いです。',
]

const originKeywords = ['中国', '黒竜江省', '氷', '雪', '2017年に来日']

const games = ['原神', 'アークナイツ', '崩壊スターレール', 'ゼンゼロ', 'シャドーバス']

const researchKeywords = ['ライブラリ', '依存関係', '脆弱性管理', 'サプライチェーン']

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
  return (
    <>
      <header className="hero wrap" id="top">
        <div className="hero-grid">
          <article className="card hero-main">
            <div>
              <span className="eyebrow">Self Introduction</span>
              <h1>自己紹介</h1>
              <p className="lab">計算機ソフトウェア研究室</p>
              <p className="student-id">学籍番号: 2681461</p>
              <p className="name-ja">裴 元嘉</p>
              <p className="name-en">PEI YUANJIA</p>
            </div>
            <p className="edition">Simple blue &amp; white edition</p>
          </article>

          <aside className="card hero-visual">
            <div className="visual-box">
              <div className="monster">
                <span>BLUE PROFILE</span>
              </div>
              <p className="hello">よろしくお願いします</p>
            </div>
          </aside>
        </div>
      </header>

      <nav className="top-nav">
        <div className="wrap nav-list">
          <a href="#call">呼び方</a>
          <a href="#origin">出身</a>
          <a href="#likes">好きなもの</a>
          <a href="#hobby">趣味と目標</a>
          <a href="#research">研究関連</a>
          <a href="#end">終わり</a>
        </div>
      </nav>

      <main className="wrap">
        <section id="call">
          <SectionTitle title="呼び方" note="How to call me" />

          <div className="grid-2">
            <article className="panel">
              <p className="split-title">裴（はい）元嘉 / PEI YUANJIA</p>
              <ul className="list">
                {callPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <aside className="panel soft">
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
          <SectionTitle title="出身" note="Heilongjiang, China" />

          <div className="grid-2">
            <article className="panel">
              <div className="symbol-box">ICE</div>
              <h3 className="panel-title">氷と雪が印象的</h3>
              <p className="body-copy">
                黒竜江省といえば、やはり冬の景色。<br />
                冷たい空気と雪景色のイメージが強く残っています。
              </p>
            </article>

            <aside className="panel soft">
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

        <section id="likes">
          <SectionTitle title="好きなもの" note="Anime / Game / Light Novel / Orca" />

          <div className="grid-3">
            <article className="panel">
              <div className="symbol-box">GAME</div>
              <h3 className="panel-title">アニメ・ゲームが好きです</h3>
              <p className="body-copy">
                作品の世界観やキャラクターを見るのが好きで、継続して楽しんでいます。
              </p>
            </article>

            <article className="panel soft">
              <p className="split-title">ゲーム</p>
              <div className="badge-grid">
                {games.map((game) => (
                  <div className="badge" key={game}>
                    {game}
                  </div>
                ))}
              </div>

              <p className="split-title with-gap">アニメ</p>
              <p className="body-copy">ノゲノラ / メダリスト / リゼロ / ポケモン / 暗殺教室 など</p>
            </article>

            <article className="panel">
              <div className="symbol-box">ORCA</div>
              <h3 className="panel-title">シャチも好きです</h3>
              <p className="body-copy">強さとかっこよさの両方があるところに惹かれます。</p>
            </article>
          </div>
        </section>

        <section id="hobby">
          <SectionTitle title="趣味と目標" note="Enjoy what I like, and keep improving" />

          <div className="grid-2">
            <article className="panel">
              <div className="symbol-box">BILLIARDS</div>
              <p className="split-title accent-title">趣味</p>
              <p className="large-copy">
                好きなものを楽しむこと
                <br />
                ビリヤード（まだまだ練習中です）
              </p>
            </article>

            <aside className="panel soft">
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

        <section id="research">
          <SectionTitle title="研究関連" note="Software Bill of Materials" />

          <div className="grid-2">
            <article className="panel">
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

            <aside className="panel soft">
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

          <div className="panel research-detail">
            <div className="section-head section-head-compact">
              <h3 className="research-heading">これまでの研究内容</h3>
              <p className="section-note">SBOM generation tools in Python environment</p>
            </div>
            <div className="grid-2 compact-grid">
              <div>
                <p>
                  <strong>対象</strong>
                  <br />
                  Python 環境における SBOM 生成ツール
                </p>
                <p className="detail-gap">
                  <strong>方法</strong>
                  <br />
                  実際のインストール結果を基準に比較
                </p>
              </div>
              <div>
                <p>
                  <strong>見た点</strong>
                  <br />
                  ツールごとの精度と既存のSBOM生成ツールの課題
                </p>
                <p className="detail-gap">
                  <strong>目的</strong>
                  <br />
                  精度の評価と不足ポイントの整理
                </p>
              </div>
            </div>
            <p className="body-copy detail-gap">
              実環境を基準にすることで、ツールの出力だけでは見えにくい差や課題を分析してきました。
            </p>
          </div>
        </section>

        <section className="footer" id="end">
          <div className="footer-box">
            <p className="split-title">終わり</p>
            <p className="big">ご清聴ありがとうございました</p>
            <p className="body-copy footer-copy">今後ともよろしくお願いします。</p>
            <div className="orca">THANK YOU</div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
