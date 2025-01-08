import React, { useState, useEffect } from 'react';
import Average from '../../hooks/Average';
import '../../styles/pages.css';

let prices = {
  banana: 1, 
  orange: 2, 
  meat: 4,
}

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
)

console.log(doublePrices.meat);



// -0------
function Dashboard() { 
  const [setSize, setSetSize] = useState(0);

  useEffect(() => {
    let set = new Set(); // set을 정의합니다.
    
    let john = { name: "John"};
    let pete = { name: "Pete"};
    let mary = { name: "Mary"};

    // 객체들을 set에 추가
    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(pete); // 중복 추가
    set.add(john); // 중복 추가

    // set의 크기를 상태로 업데이트
    setSetSize(set.size);
 
    // Set에 값이 어떻게 추가되는지 콘솔에 출력
      // console.log(set);  

  }, []);

  return (
    <div className='dashboard wrapper'>
      <h1>Dashboard</h1>
      <p>이곳은 Dashboard 컴포넌트입니다. 이제 디자인을 추가하거나 다른 스타일을 적용할 수 있습니다!</p>
      <p>Set size: {setSize}</p> {/* set의 크기를 표시 */}
      <Average />
    </div>
  );
}

export default Dashboard;
