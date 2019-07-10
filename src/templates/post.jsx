import React, {Component} from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO, ProgressBar } from 'components';
import '../styles/prism';

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
  const image = post.frontmatter.cover.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const date = post.frontmatter.date;
  const html = post.html;

  console.log(image)
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
      
      <img style={{marginBottom: 0, width: '100%'}} src={image.src} alt="Gatsby Logo" />

      <Container>
        <Content input={html} />
        <TagsBlock list={post.frontmatter.tags || []} />
      </Container>
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
      }
    }
  }
`;
