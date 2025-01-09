import React from 'react';
import '../../../styles/Modal.css';


function Modal({ show, onClose }) {
    if (!show) return null;

    return (
        <div style={modalStyle}>
            <div style={backShadow} onClick={onClose}></div>
            <div style={modalContentStyle}>
                <h2>모달 제목</h2>
                <p>모달 내용이 들어가는 자리입니다.</p>
                <a className='modalTxtBox' href="sms:+821068200126">문자보내기</a>
                <a className='modalTxtBox' href="tel:+821068200126">전화하기</a>
                <button className='closeBtn' onClick={onClose}>닫기</button>
            </div>

        </div>
    )
}


const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
};

const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    zIndex: 1,
};

const backShadow = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
}

export default Modal;