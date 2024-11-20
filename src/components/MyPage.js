import React, { useState } from 'react';
import Info from '../hooks/Info';
import ContextSample from '../hooks/ContextSample';

function MyPage() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
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