import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo.png';
import theme from '../../config/theme';


const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  width: 180px;
  margin: 1rem 2rem !important;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 0.9rem;
  align-items: center;
  a {
    color: #333;
    font-weight: 700;
    margin: 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: #999;
    }
  }
`;

const NavBar = () => (
  <Headroom style={{position: "absolute", justifyContent: "center", backgroundColor: "transparent"}} calcHeightOnResize disableInlineStyles>
      <Nav>
        <Link to="/blog">HOME</Link>
        <Link to="/blog">TRILHAS</Link>
        <StyledLink to="/">
          <img style={{marginBottom: 0}} src={logo} alt="Gatsby Logo" />
        </StyledLink>
        <Link to="/about">CRIAR</Link>
        <Link to="/about">SOBRE</Link>

      </Nav>
  </Headroom>
);

export default NavBar;
