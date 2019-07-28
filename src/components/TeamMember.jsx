import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import person from '../../static/logo/person.jpeg';
import { FaInstagram } from 'react-icons/fa';

const isEven = (n) => {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

const chooseColor = (number) => {
  number -= 1;
  switch (number){
    case 0:
      return Theme.colors.primary.base;
    case 1:
        return Theme.colors.pink.base;
    case 2:
      return Theme.colors.blue.base;
    default:
        return Theme.colors.green.base;
  }
}


const TeamMember = ({ image, name, shortDescription, instagram, id, largeDescription }) => (
  <MemberWrapper id="time">
    {isEven(id) ?     
      <div style={{height: "250px", width: "300px", position: "absolute", left: "0", zIndex: "-100", backgroundColor: chooseColor(id)}}></div>
        :
      <div style={{height: "250px", width: "300px", position: "absolute", right: "0", zIndex: "-100", backgroundColor: chooseColor(id)}}></div>
    }
    {isEven(id) ? <img style={imgMember} src={image} alt={name} /> : null }

    <div style={{flex: 3, margin: "0 1rem "}}>
      {isEven(id) ?
          <p style={{ fontFamily: 'Comfortaa, cursive',
          fontSize: '22px',
          fontWeight: "700",
          marginBottom: '0.2rem',
          display: "flex",
          justifyContent: "flex-start"}}>
          
          {name} <a style={{margin: "0 7px"}} href={`https://instagram.com/${instagram}`}><FaInstagram size={"25"} color={Theme.colors.pink.base} /></a></p>
        :
          <p style={{ fontFamily: 'Comfortaa, cursive',
            fontSize: '22px',
            fontWeight: "700",
            marginBottom: '0.2rem',
            display: "flex",
          justifyContent: "flex-end"}}>
            
          
          <a style={{margin: "0 7px"}} href={`https://instagram.com/${instagram}`}><FaInstagram size={"25"} color={Theme.colors.pink.base} /></a> {name}</p>
      }
      <p style={{textAlign: isEven(id)? "left":"right", fontFamily: 'Comfortaa, cursive', marginBottom: "0.5rem", fontSize: "20px"}}>{shortDescription}</p>

      <p style={{textAlign: isEven(id)? "left":"right", fontFamily: 'Comfortaa, cursive', marginBottom: 0, fontSize: "16px"}}>{largeDescription}</p>
    </div>


    {!isEven(id) ? <img style={imgMember} src={image} alt={name} /> : null }     
  </MemberWrapper>
);

export default TeamMember;

TeamMember.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  shortDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  instagram: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  largeDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

TeamMember.defaultProps = {
  image: false,
  name: false,
  shortDescription: false,
  instagram: false,
  id: false,
  largeDescription: false,
};

const imgMember = {
  width: '300px',
  maxWidth: "none !important",
  borderRadius: 12,
  flex: 2,
  marginBottom: 0
}

const nameStyled = {
 
}

const pStyled = {
  fontFamily: 'Comfortaa, cursive',
  marginBottom: 0,
}

const MemberWrapper = styled.header`
  margin: 0 0 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  @media screen and (min-width: 768px){
    flex-direction: row;

  }
`;

export const GridMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`;