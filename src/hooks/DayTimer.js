import React, {useState, useEffect} from 'react';
import '../styles/MyPage.css';
 

const CountDown = (props) => {
    const [DDay, setDDay] = useState(0); 
    const targetDate = new Date(props.date);
    // 현재상태와 상태 없데이트 값을 지정한다.
    // 카운트 다운의 목표 날짜. 컴포넌트의 값을 Date객체로 변환하기 위함
  
    useEffect(() => {
      const timer = setInterval(() => {
        // setInterval사용이유는, 50ms마다 현재 날짜와 목표 날짜의 차이를 계산하고, 카운트다운을 업데이트 하기 위함
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        // 일자 비교
        const targetDay = new Date(targetDate).setHours(0, 0, 0, 0);
        const currnetDay = new Date(currentDate).setHours(0, 0, 0, 0);

        if(currnetDay === targetDay) {
            setDDay({days: 'D-Day', time: ''});
            return;
        }
  
        // 일수, 시간, 분, 초 계산하는 부분
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // 카운트다운 형식지정 D-<일수> <시간>:<분>:<초>
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        const timeNum1 = `${hours.toString().padStart(2, '0')}`;
        const timeNum2 = `${minutes.toString().padStart(2, '0')}`;
        const timeNum3 = `${seconds.toString().padStart(2, '0')}`;

        const daysString = `D-${days}`;

        setDDay({days: daysString, time1: timeNum1, time2: timeNum2, time3: timeNum3});
  
  
      }, 50);
  
      return () => clearInterval(timer);
    }, [props.date]);
  
    return <div className="countdown-box">
                <p className="days">{DDay.days}</p>
                 
                <p className="time"><span>{DDay.time1}</span>:<span>{DDay.time2}</span>:<span>{DDay.time3}</span></p>
            </div>
 

  };
  
  export default CountDown; 
  
  


