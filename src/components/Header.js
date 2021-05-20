import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImage src="data:image/jpeg;base64,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"></UserImage>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 80px;
  padding: 0px 36px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      border-bottom: 1px solid transparent;
      position: relative;

      &:after {
        content: " ";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
      
    }
    &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
  }
`;
const UserImage = styled.img`
  height: 48px;
  width: 48px;
  padding: 0px 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;
