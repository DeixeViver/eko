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
  @media (max-width: 700px) {
    display: none
    
  }
`;


const StyledList = styled.ul`
  margin: 25px 0 0;
  list-style: none;
  width: 100%
`

const StyledListItem = styled.li`
  padding: 10px 0;
  text-align: center;
  font-family: ${props => props.theme.fontFamily.body};
  &:hover {
    background-color: ${theme.colors.pink.base}
  }
`

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSMVisible: false
    };
    this.setVisible = this.setVisible.bind(this);

  }

  componentDidMount() {
    console.log(this.state)
  }

  setVisible = () => {
    this.setState({navSMVisible: !this.state.navSMVisible})
  }

    render() {
    
  
    const NavSM = styled.nav`
      display: flex;
      justify-content: space-around;
      font-family: ${props => props.theme.fontFamily.body};
      background-color: ${this.state.navSMVisible ? theme.colors.primary.light : "transparent"};
      font-weight: 500;
      font-size: 0.9rem;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 -30px;
      padding-top: 20px;
      border-radius: 12px;
      transition: 2s;
      a {
        color: #333;
        font-weight: 700;
        margin: 1rem;
        transition: all ${props => props.theme.transitions.default.duration};
        &:hover {
          color: #999;
        }
      }
      @media (min-width: 700px) {
        display: none
        
      }
    `;
    
    
    return (
        <Headroom style={{position: "absolute", justifyContent: "center", backgroundColor: "transparent"}} calcHeightOnResize disableInlineStyles>
          <Nav>
            <Link to="/">HOME</Link>
            <Link to="/#trilhas">TRILHAS</Link>
            <StyledLink to="/">
              <img style={{marginBottom: 0}} src={logo} alt="Gatsby Logo" />
            </StyledLink>
            <Link to="/#time">TIME</Link>
            <Link to="/about">SOBRE</Link>
          </Nav>
          <NavSM>
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}} onClick={() => this.setVisible() }>
                <svg style={{width: "15px", marginRight: "15px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                <img style={{marginBottom: 0, maxWidth: "180px"}} src={logo} alt="Gatsby Logo" />

              </div>
              <div style={{ flexBasis: "100%",  width: 0 }} />
              {this.state.navSMVisible? 
                <StyledList>
                  <StyledListItem>
                    <Link to="/">HOME</Link>
                  </StyledListItem>
                  <StyledListItem>
                    <Link to="/#trilhas">TRILHAS</Link>
                  </StyledListItem>
                  <StyledListItem>
                    <Link to="/#time">TIME</Link>
                  </StyledListItem>
                  <StyledListItem>
                    <Link to="/about">SOBRE</Link>
                  </StyledListItem>
                </StyledList>
              : null }
          </NavSM>
      </Headroom>
    );
  }
}

NavBar.propTypes = {
  //width: PropTypes.number.isRequired,
  //height: PropTypes.numberisRequired
};

NavBar.defaultProps = {
};