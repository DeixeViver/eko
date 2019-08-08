import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import person from '../../static/logo/person.jpeg';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import css from '@emotion/css';

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

const TeamMember = ({ image, name, shortDescription, instagram, id, largeDescription, github }) => {

  const LeftMember = styled.div`
    height: 250px;
    width: 300px;
    position: absolute;
    background-color: ${chooseColor(id)};
    left: 0;
    z-index: -100;

    @media screen and (max-width: 768px){
      margin-top: 24px
    }

    
    @media screen and (min-width: 1024px){
      margin-top: 35px
    }
  `;

  const RightMember = styled.div`
    height: 250px;
    width: 300px;
    position: absolute;
    background-color: ${chooseColor(id)};
    right: 0;
    z-index: -100;

    @media screen and (max-width: 768px){
      margin-top: 24px
    }

    @media screen and (min-width: 1024px){
      margin-top: 35px
    }
  `;

    return(
    <MemberWrapper id="time">
      {/*isEven(id) ?     
        <div style={{height: "250px", width: "300px", position: "absolute", left: "0", zIndex: "-100", backgroundColor: chooseColor(id)}}></div>
        :
        <div style={{height: "250px", width: "300px", position: "absolute", right: "0", zIndex: "-100", backgroundColor: chooseColor(id)}}></div>
      */}

      {isEven(id) ? 
        <div>
          <LeftMember /> 
          <img style={imgMember} src={image} alt={name} />
        </div>
      : null }

      <div style={{flex: 3, margin: "0 1rem "}}>
        {isEven(id) ?
            <p style={{ fontFamily: 'Comfortaa, cursive',
            fontSize: '22px',
            fontWeight: "700",
            marginBottom: '0.2rem',
            display: "flex",
            justifyContent: "flex-start"}}>
            
            {name} 
            {!!instagram ? <a target="_blank" style={{margin: "0 7px"}} href={`https://instagram.com/${instagram}`}><FaInstagram size={"25"} color={Theme.colors.pink.base} /></a> : null }
            {!!github ? <a target="_blank" style={{margin: "0 7px"}} href={`${github}`}><FaGithub size={"25"} color={Theme.colors.pink.base} /></a> : null }
            </p>
          :
            <p style={{ fontFamily: 'Comfortaa, cursive',
              fontSize: '22px',
              fontWeight: "700",
              marginBottom: '0.2rem',
              display: "flex",
            justifyContent: "flex-end"}}>
              
              {!!instagram ? <a target="_blank" style={{margin: "0 7px"}} href={`https://instagram.com/${instagram}`}><FaInstagram size={"25"} color={Theme.colors.pink.base} /></a> : null }
              {!!github ? <a target="_blank" style={{margin: "0 7px"}} href={`${github}`}><FaGithub size={"25"} color={Theme.colors.pink.base} /></a> : null }
            {name}</p>
        }
        <p style={{textAlign: isEven(id)? "left":"right", fontFamily: 'Comfortaa, cursive', marginBottom: "0.5rem", fontSize: "20px"}}>{shortDescription}</p>

        <p style={{textAlign: isEven(id)? "left":"right", fontFamily: 'Comfortaa, cursive', marginBottom: 0, fontSize: "16px"}}>{largeDescription}</p>
      </div>


        {!isEven(id) ? 
          <div>
            <RightMember /> 
            <img style={imgMember} src={image} alt={name} />
          </div>
        : null }
    </MemberWrapper>
  )};

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
  github: PropTypes.oneOfType([
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
  github: false,
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
  margin: 0 0 2rem 0;
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