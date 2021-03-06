import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../../molecules/LogoutButton';

const AppBarWrapper = styled.nav`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.main.appbar};
  align-items: center;
`;

const NavUl = styled.ul`
  width: 100%;
  max-width: 1024px;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: ${({ isLoggedIn }) =>
    isLoggedIn ? `1fr 1fr 1fr 1fr` : `1fr 1fr 1fr`};
  justify-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

function AppBarTemplate({ isLoggedIn }) {
  return (
    <AppBarWrapper>
      <NavUl isLoggedIn={isLoggedIn}>
        <li>
          <NavLink to="/">스톡지니</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            {/* 로그인 시 보이는 Nav */}
            <li>
              <NavLink to="/predict">예측리포트</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">대시보드</NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">로그인</NavLink>
            </li>
            <li>
              <NavLink to="/register">회원가입</NavLink>
            </li>
          </>
        )}
      </NavUl>
    </AppBarWrapper>
  );
}

export default AppBarTemplate;
