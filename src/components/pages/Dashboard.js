import React from 'react';
import Average from '../../hooks/Average';
import '../../styles/pages.css';
 
let john = { name: "John" };

// 고객의 가게 방문 횟수를 세본다고 가정해 봅시다.
let visitsCountMap = new Map();

// john을 맵의 키로 사용하겠습니다.
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123


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