import React, { useState } from 'react';
import '../../styles/MyPage.css';

function MyPage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="invitation-container">
  

      <header className="invitation-header">
        <h1>💍</h1>
        <p>000 & 000</p>
      </header>

      <section className="invitation-details">
        <h2>일정</h2>
        <p className="details">
          날짜: 20oo년 00월 00일 (0요일) <br />
          시간: 오후 3시 <br />
          장소: 000 000 00동 100-1, 000호텔
        </p>
      </section>

      <section className="bride-groom">
        <div className="bride">
          <h3>신부 000</h3>
        </div>
        <div className="groom">
          <h3>신랑 김철수</h3>
        </div>
      </section>

      <section className="rsvp">
        <button className="rsvp-button">참석 여부 응답</button>
      </section>

      <footer className="invitation-footer">
        <p>우리는 당신과 함께하는 이 특별한 날을 기다리고 있습니다!</p>
      </footer>
    </div>
  );
}

export default MyPage;