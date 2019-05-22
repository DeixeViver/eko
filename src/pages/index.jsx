import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import theme from '../../config/theme';
import brain from '../../static/logo/brain.png';
import {Container} from '../components/header'

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 0 0;
  padding: 2rem 4rem 2rem 2rem;
  background: linear-gradient(90deg, 
                                ${theme.colors.primary.light} 0%,
                                ${theme.colors.primary.light} 33%,
                                ${theme.colors.primary.base} 33%,
                                ${theme.colors.primary.base} 33%,
                                ${theme.colors.primary.base} 33%,
                                ${theme.colors.primary.base} 66%,
                                ${theme.colors.primary.dark} 66%,
                                ${theme.colors.primary.dark} 66%,
                                ${theme.colors.primary.dark} 81%);
  @media (max-width: 1000px) {
    padding: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0;
  padding: 5rem 4rem 3rem 4rem;
  background: #fff6e7;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 1rem 4rem;
  }
  @media (max-width: 700px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  align-items: center;
  grid-gap: 12px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
  }
`;

const Text = styled.div`
  justify-self: center;
  @media (max-width: 991px) {
    justify-self: start;
  }
`;

const sloganTitle = {
  fontSize: '50px',
  fontFamily: theme.fontFamily.body,
  fontWeight: '600',
  marginBottom: 15
}

const sloganBody = {
  fontSize: '24px',
  maxWidth: '600px'
}

const retangleSlogan = {
  width: 30,
  height: 180,
  backgroundColor: theme.colors.primary.base,
  position: 'absolute',
  left: 30,
}

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Header>EKO</Header>

      <StyledAbout>
        <Container>
          <Grid>
            <Text>
              <div style={retangleSlogan}></div>
              <h2 style={sloganTitle}>Transformamos a caixa preta da Internet em uma caixa de ferramentas</h2>
              <p style={sloganBody}>
                Mineramos, conectamos e te conduzimos nos porquês da internet. Assim você não irá se perder 
                em meio às 23 abas abertas no seu computador :)
              </p>
            </Text>
            <Text>
              <img style={{marginBottom: 0}} src={brain} alt="Gatsby Logo" />

            </Text>
          </Grid>
        </Container>
      </StyledAbout>

      
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostWrapper>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
