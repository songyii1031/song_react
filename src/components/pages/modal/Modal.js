import React from 'react';
 
 
function Modal({ show, onClose }) {
    if (!show) return null;

    return (
        <div style={modalStyle}>
             <div style={backShadow} onClick={onClose}></div>
            <div style={modalContentStyle}> 
                <h2>모달 제목</h2>
                <p>모달 내용이 들어가는 자리입니다.</p>
                <button onclick="window.location='tel:+821092822169'">전화 걸기</button>
                <button onclick="window.location='sms:+821092822169'">문자 보내기</button>
                <button onClick={onClose}>닫기</button>
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