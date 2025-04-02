import React from "react";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <footer>
      <div class="footer-list">
        <ul class="footer-items">
          <li>
            <nav class="footer-item">
              <a href="">スクールについて</a>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <Link to="/courseList">講座一覧</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <a href="">講師紹介</a>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <a href="">サロンメニュー</a>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <Link to="/access">アクセス</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <a href="">contact</a>
            </nav>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Foot;
