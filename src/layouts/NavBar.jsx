import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  width: 120px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 0.9rem;
  align-items: center;
  a {
    color: #666;
    font-weight: 300;
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: #999;
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
      <StyledLink to="/">
        <img style={{marginBottom: 0}} src={logo} alt="Gatsby Logo" />
      </StyledLink>
      <Nav>
        <Link to="/">Início</Link>
        
        <Link to="/blog">Trilhas</Link>
        <Link to="/about">Sobre</Link>

      </Nav>
  </Headroom>
);

export default NavBar;
