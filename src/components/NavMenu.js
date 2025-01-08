import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

function NavMenu() {

  // 상태 정의: 각 메뉴의 클릭 상태 관리
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState({
    home: false,
    mypage: false,
    dashboard: false
  });

  // 모바일인지 여부 확인
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 마우스 이벤트 핸들러
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 클릭 이벤트 핸들러 (모바일 전용)
  const handleClick = (menu) => {
    setIsClicked(prevState => ({
      ...prevState,
      // 해당'menu'에 대한 값을 반전시킴
      [menu]: !prevState[menu]
    }));
  };

  // nav메뉴바 내려오게 하기
  React.useEffect(() => {
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.style.setProperty('--after-height', isHovered ? '200px' : '0px');
    }
  }, [isHovered]);

  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/Home" className="navbar-brand">
            Home page
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li className="nav-item">
                <Link to="/Home" className="nav-link">
                  Home
                  <div
                    className='arrow_nav'
                    onClick={() => isMobile && handleClick('home')}
                  />
                </Link>

                {/* 모바일에서만 클릭 이벤트에 따라 sub_menu 보이기 */}
                <ul className={`sub_menu ${isMobile ? (isClicked.home ? 'show' : '') : (isHovered ? 'show' : '')}`} >
                  <li>
                    <Link to="/Home" className="sub-link">
                      sub1_1
                    </Link>
                  </li>
                  <li>
                    <Link to="/Home" className="sub-link">
                      sub1_2
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/mypage" className="nav-link">
                  MyPage
                  <div
                    className='arrow_nav'
                    onClick={() => isMobile && handleClick('mypage')}
                  />
                </Link>

                <ul className={`sub_menu ${isMobile ? (isClicked.mypage ? 'show' : '') : (isHovered ? 'show' : '')}`} >
                  <li>
                    <Link to="/mypage" className="sub-link">
                      sub2_1
                    </Link>
                  </li>
                  <li>
                    <Link to="/mypage" className="sub-link">
                      sub2_2
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                  <div
                    className='arrow_nav'
                    onClick={() => isMobile && handleClick('dashboard')}
                  />
                </Link>

                <ul className={`sub_menu ${isMobile ? (isClicked.dashboard ? 'show' : '') : (isHovered ? 'show' : '')}`} >
                  <li>
                    <Link to="/dashboard" className="sub-link">
                      sub3_1
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="sub-link">
                      sub3_2
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;
