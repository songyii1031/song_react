import React, {useState} from 'react';
import '../../styles/MyPage.css';
import Modal from './modal/Modal';

function MyPage() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);  // 모달 열기
  };

  const closeModal = () => {
    setShowModal(false);  // 모달 닫기
  };
   
  return (
    <div className="invitation-container">
  

      <header className="invitation-header">
        <h4>2024.11.12</h4>
        <p>Sat . pm . 13:00 </p>
      </header>

      <section className="invitation-details">
        <div className='main_img'> 
        </div>
      </section>
      <hr/>

      <section className="bride-groom">
        <div className="bride-groom-secion">
          <div className="bride">
            <h3>○○○</h3>
          </div>
          <div>·</div>
          <div className="groom">
            <h3>○○○</h3>
          </div>
        </div>

        <div className="info center wrap"> 
          <p>2024년 11월 12일 13시</p>
          <p>장소 ○○○홀 3층</p>
        </div>

      </section>

      <section className="invitation">
        <div className="invitation_wrap wrap">
          <p>초대문구</p>
          <p>초대문구, 초대문구입니다. <br/>이거슨 초대문구입니다. </p>
          </div>
      </section>

      <section className="wedding_vows">
        <div className="wedding_vows_wrap wrap">
          <p>결혼 서약 문구</p>
          <p>ooo oo oooo oo oooooo. <br/> oooo, ooo o oo oo<br/> ooo oooo.</p>
          </div>
      </section>

      <hr/>
      <section className="invitation-details">
        <div className='main_img_2 wrap'> 
         <p style={{color: '#fff', textAlign: 'center', lineHeight: '600px'}}> main-img-2</p>
        </div>
      </section>
      <hr/>

      <section className="contact">
        <div className="contact_wrap wrap">
          <p>ooo & ooo의 jangnam OOO</p>
          <p>ooo & ooo의 jangnyu OOO</p>
          <button id='contact_pop_1' className='contact_pop' onClick={openModal}>연락하기 ???</button>
          <Modal show={showModal} onClose={closeModal}></Modal>
        </div>  
      </section>
      <hr/>

      <section className="gallery"> 
        <div className="gallery_wrap wrap">
          <p>갤러리</p>
        </div>

        <div className='images_wrap'> 
          <div className='imgBox img1'><img src="" /></div>
          <div className='imgBox img2'><img src="" /></div>
          <div className='imgBox img3'><img src="" /></div>
          <div className='imgBox img4'><img src="" /></div>
        </div>
      </section>

 
      <footer className="invitation-footer">
        <p>우리는 당신과 함께하는 이 특별한 날을 기다리고 있습니다!</p>
      </footer>
    </div>
  );
}

export default MyPage;