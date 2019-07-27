import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, BlogList } from 'components';
import { Layout, Container } from 'layouts';
import {getNumber, chooseColor} from './index';
import styled from '@emotion/styled';
import AdinkraGrid from '../components/AdinkraGrid';

const StyledMultipleBg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 0;
  padding: 5rem 4rem 3rem 4rem;
  background-color: ${chooseColor(getNumber())};
  background-size: cover;
  @media (max-width: 1000px) {
  }
  @media (max-width: 700px) {
    left: 0;
    right: 0;

  }
`;

const StyledTitle = styled.h3`
  font-size: 30px;
  width: 90%;
  margin: 5rem auto;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  line-height: 1.6;
  text-shadow: 2px 3px 8px rgba(170, 170, 170, 1);
  @media (min-width: 40em) {
    font-size: 45px;
    margin: 4rem 0.5rem;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: inherit auto;
    font-size: 60px;
  }
`;

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Layout>
      <Helmet title={'Criar'} />
        <StyledMultipleBg>
            <AdinkraGrid level={0.3} opacity={0.1} />
            <AdinkraGrid level={1.3} opacity={0.1} />
            <AdinkraGrid level={2.3} opacity={0.2} />
            <AdinkraGrid level={3.2} opacity={0.2} />
            <AdinkraGrid level={4} opacity={0.3} />
          <StyledTitle>
            CRIAR :)
          </StyledTitle>
        </StyledMultipleBg>
        <Container center={true}>
          {edges.map(({ node }) => (
          <BlogList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
          ))}
        </Container>
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
