import React, {Component} from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
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
  const frontTitle = post.frontmatter.fronttitle;
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

  const getVideoSRC = (video) => {
    switch(video) {
      case "Video1":
        return Video1
      default:
        return Video1
    }
  }
  
  return (
    <Layout>
       <ProgressBar />
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt || ' '}
        image={image}
        pathname={post.frontmatter.path}
        article
      />
      {video ? 
        <div style={{height: "100vh"}}>
          <h1 style={{fontFamily: 'Comfortaa, cursive', lineHeight: 1.6, position: "absolute", top: "70%", textAlign: "center",  fontSize: "50px"}}>{frontTitle}</h1>
          <video  style={videoStyle} loop autoPlay>
            <source src={getVideoSRC(videoName)} type="video/mp4" />
          </video>
        </div>
      : <img style={{marginBottom: 0, width: '100%'}} src={image.src} alt="Gatsby Logo" /> }

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
        fronttitle
      }
    }
  }
`;
