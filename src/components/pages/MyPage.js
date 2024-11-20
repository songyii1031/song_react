import React, { useState } from 'react';
import Info from '../../hooks/Info';
import ContextSample from '../../hooks/ContextSample';
import '../../styles/pages.css';

function MyPage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className='mypage wrapper'>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
        <h1>My Page</h1>
        {visible && <Info />} 

        <ContextSample />
    </div>
  );
}

export default MyPage;