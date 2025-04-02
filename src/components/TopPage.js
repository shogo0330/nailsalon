import React from "react";
import "../styles/styles.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/scrollToTop.css";
import "../styles/info.css";
import "../styles/blog.css";
import Header from "./Header";
import Info from "./Info";
import Blog from "./Blog";
import Foot from "./Foot";
import ScrollToTop from "./ScrollToTop";

function TopPage() {
  return (
    <div className="Top">
      <Header />
      <div className="top">
        <div className="top-message">
          <img src="salon-top.jpeg" />
          <div className="message">
            <h2>ネイリストのトップステージ</h2>
            <h2>－爪肌美容の専門家－</h2>
            <p>
              当スクールは、技術だけでなく爪肌の専門知識を身につけた「爪肌美容の専門家」を目指す方のためのスクールです。
            </p>
          </div>
        </div>
      </div>
      <div className="school">
        <div className="school-top">
          <div className="school-image">
            <img src="salon-school.png" />
          </div>
          <div className="school-about">
            <div className="school-list">
              <h4>こんな方にオススメ</h4>
              <p>✔︎もっと自信を持ってお客様に向き合いたい</p>
              <p>✔︎講師としてレベルアップしたい</p>
              <p>✔ネイリストとして基本の知識を1から学びたい</p>
              <p>✔︎ネイリストとしてレベルアップしたい</p>
              <p>✔︎ケアの事を学び直したい</p>
              <p>✔︎座学を強化したい</p>
            </div>
            <div className="school-intro">
              <p>
                当スクールが目指すのは爪肌の健康にしっかり対応出来るネイリストの育成。
              </p>
              <p>「爪肌美容の専門家」として活躍したい方をサポート致します。</p>
            </div>
          </div>
        </div>
        <div className="school-btn">
          <a href="">スクールについて</a>
        </div>
      </div>
      <div className="reason">
        <h2>REASON</h2>
        <h2>－選ばれる理由－</h2>
        <div className="reason-top">
          <div className="reason-image">
            <img src="salon-reason.png" />
          </div>
          <div className="reason-about">
            <p>
              当スクールは長年のサロン経営で培ったノウハウと専門知識をカリキュラム化することで、「肌爪専門の美容家」としてのスキルを習得していただくことができます。また、成功するサロンに必要な「知識×技術×サロンワーク」の3つの軸で、「緒々ネイル」が店舗で実践しているプロのノウハウを実践的に習得していただくことができますので、修了後には確実なステージアップを実感していただけます。
            </p>
            <p className="reason-about-p2">
              着実に知識とスキルを身につけられる環境で、キャリアアップステージとして「爪肌専門の美容家」目指しませんか？
            </p>
          </div>
        </div>
        <div className="reason-btn">
          <a href="">講座一覧</a>
        </div>
      </div>
      <Info />
      <Blog />
      <Foot />
      <ScrollToTop />
    </div>
  );
}

export default TopPage;
