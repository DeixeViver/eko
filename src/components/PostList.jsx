import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../config/theme';


const Wrapper = styled.article`
  margin-bottom: 2rem;
  position: relative;
  z-index: 100;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 25em;

  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }

  @media (max-width: 1000px) {

  }

  @media (max-width: 700px) {
    height: 15rem;
  }
`;

const StyledLinkk = styled(Link)`
  /*position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  align-items: flex-end;
  z-index: 3;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.default};
  transition: 2s;

  /*&:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0.5) 100%
    );
    transition: 2s;
    z-index: 100;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }*/
`;

const Info = styled.div`
  color: ${props => props.theme.colors.white.light};
  margin: 0 1rem 1.25rem 1.25rem;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 101
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
  font-size: 42px;
  font-family: ${props => props.theme.fontFamily.conforta};
`;

const PostList = ({ cover, path, date, title, excerpt, colorsBg }) => {
    
console.log(colorsBg);
const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;  
  background-color: #ff0000
  border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;

const Wrapper = styled.article`
  margin-bottom: 2rem;
  z-index: 100;
  width: 100%;
  max-width: 800px;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  background: linear-gradient(90deg, 
                              ${colorsBg[0]} 0%,
                              ${colorsBg[1]} 25%,
                              ${colorsBg[2]} 100%);

  height: 25rem;

  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }

  @media (max-width: 1000px) {

  }

  @media (max-width: 700px) {
    height: 15rem;
  }
`;
  
  return(
  <Wrapper>
    {/*<Image>
      <Img fluid={cover} />
    </Image>
    <StyledLink to={path}>
      <Info>
        <span>{date}</span>
        <Title>{title}</Title>
        <span>{excerpt}</span>
      </Info>
    </StyledLink>*/}
    <StyledLinkk to={path}>
      <Info>
        <Title>{title}</Title>
        <span style={{fontFamily: 'Comfortaa, cursive'}}>{excerpt}</span>
      </Info>
    </StyledLinkk>
  </Wrapper>
)};

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colorsBg: PropTypes.array.isRequired,
  video: PropTypes.bool,
  videoname: PropTypes.string,
  fronttitlea: PropTypes.string,
  fronttitleb: PropTypes.string,
  frontsubtitle: PropTypes.string
};
