import React from 'react';
import Average from '../../hooks/Average';
import '../../styles/pages.css';



let map = new Map();
  map.set( 'banana', 1 );
  map.set( 'orange', 2 );
  map.set( 'meat', 4 );
 
  

function Dashboard() {
  return (
    <div className='dashboard wrapper'>
      <h1>Dashboard</h1>
      <p>이곳은 Dashboard 컴포넌트입니다. 이제 디자인을 추가하거나 다른 스타일을 적용할 수 있습니다!</p>

      <Average />
    </div>
  );
}

export default Dashboard;