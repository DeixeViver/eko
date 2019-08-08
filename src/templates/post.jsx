import React, {Component} from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';

import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO, ProgressBar } from 'components';
import '../styles/prism';
import Video1 from '../../content/posts/2018-10-15/video.mp4';
import theme from '../../config/theme';

/*const progressElement = document.querySelector('.progress-bar');
var yScroll = 1;
const progressObserver = new ScrollProgress((x, y) => {
  if(!!progressElement)
    progressElement.style.width = y * 100 + '%';
  console.log(progressElement)
  yScroll = y;
});*/
var yScroll = 1;


const BarraDisgraca = styled.div`
background-color: rebeccapurple;
height: 50px;
position: fixed;
top: 0;
bottom: 0;
z-index: 100000;
width: ${yScroll * 100 + '%'}
`;

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const postCover = styled.div`
  display: flex;
  height: 250px;
  overflow: hide
`;


const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;
  const image = post.frontmatter.cover.childImageSharp.resize;
  const title = post.frontmatter.title;
  const date = post.frontmatter.date;
  const html = post.html;
  const video = post.frontmatter.video;
  const videoName = post.frontmatter.videoname;
  const frontTitlea = post.frontmatter.fronttitlea;
  const frontTitleb = post.frontmatter.fronttitleb;
  const frontSubTitle = post.frontmatter.frontsubtitle;
  const actionPoints = post.frontmatter.barpercentage;
  const actionContent = post.frontmatter.baradinkra;
  console.log(data)

  const videoStyle = {
    backGroundRepeat: "no-repeat",
    backGroundSize: "cover",
    height: "auto",
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    position: 'fixed',
    top: '50%',
    width: 'auto',
    transform: 'translateX(-50%) translateY(-50%)',
    zIndex: '-100'

  }

  const imageStyle = {
    backGroundRepeat: "no-repeat",
    backGroundSize: "cover",
    height: "auto",
    left: '50%',
    minWidth: '100%',
    position: 'fixed',
    top: '45%',
    width: 'auto',
    transform: 'translateX(-50%) translateY(-50%)',
    zIndex: '-100',
    minHeight: "90vh"
  }

  const getVideoSRC = (video) => {
    switch(video) {
      case "Video1":
        return Video1
      default:
        return Video1
    }
  }

  const chooseFrontMatterColor = (name) => {
    console.log(name);
    if(name == "algoritmos")
        return theme.colors.subsetA[0];
    else if(name == "dados")
        return theme.colors.subsetB[0];
    else
      return theme.colors.subsetC[0];
  }

  const chooseColorSubset = (name) => {
    console.log(name);
    if(name == "algoritmos")
        return theme.colors.subsetA;
    else if(name == "dados")
        return theme.colors.subsetB;
    else
      return theme.colors.subsetC;
  }

  const FrontMatterTitle = styled.div`
    margin-bottom: 10px; 
    font-family: ${theme.fontFamily.body}; 
    font-weight: 700; 
    line-height: 1.2; 
    text-align: left;  
    font-size: 50px;
    background-color: ${chooseFrontMatterColor(post.frontmatter.tags[0])};
    color: #fafafa;
    padding: 12px;
    display: inline-block;
    marginBottom: 14px;

    @media (max-width: ${props => props.theme.breakpoints.s}) {
      font-size: 25px
    }
  `

  
  const fadeInDown = keyframes`
    0% {
      transform: translate3d(0, -15%, 0);
    }

    50% {
      transform: none;
    }

    100% {
      transform: translate3d(0, -15%, 0);
    }

  `;

  const ArrowDown = styled.div`

  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation: ${fadeInDown} 2s ease-in-out 0s infinite;


    width: 50px; 
    position: relative;
    top: 78vh;
    left: 0;
    right: 0;
    margin: 0 auto;
  `

    console.log(actionContent)

  return (
    <Layout>
       <ProgressBar colorSubset={chooseColorSubset(post.frontmatter.tags[0])} actionPoints={actionPoints} actionContent={actionContent} />
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt || ' '}
        image={image}
        pathname={post.frontmatter.path}
        article
      />
      {video ? 
        <div style={{height: "100vh"}}>
          <h1 style={{fontFamily: 'Comfortaa, cursive', lineHeight: 1.6, position: "absolute", top: "70%", textAlign: "center",  fontSize: "50px"}}>{frontTitlea}</h1>
          <video  style={videoStyle} loop autoPlay>
            <source src={getVideoSRC(videoName)} type="video/mp4" />
          </video>
        </div>
      : 
      <div style={{height: "100vh"}}>
        <div style={{position: "absolute", top: "50%", left: "5%", maxWidth: "997px"}}>
          <FrontMatterTitle>{frontTitlea}</FrontMatterTitle>
          <FrontMatterTitle>{frontTitleb}</FrontMatterTitle>
          <p style={{color: "#fafafa", textShadow: "1px 2px 2px #666", fontWeight: "600"}}>{frontSubTitle}</p>
        </div>
        <div style={{...imageStyle, backgroundImage: `url(${image.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",}}></div>
        <ArrowDown>
          <svg color={"#fafafa"} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
        </ArrowDown>
        {/*<img style={imageStyle} src={} alt="Gatsby Logo" />*/}
      </div> }

      <div style={{zIndex: 100, backgroundColor: "#fff"}}>
        <Container>
          <Content input={html} />
          <TagsBlock list={post.frontmatter.tags || []} />
        </Container>
      </div>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Anterior
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Proximo
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
        video
        videoname
        fronttitlea
        fronttitleb
        frontsubtitle
        barpercentage
        baradinkra
      }
    }
  }
`;
