import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
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

const About = center => (
  <Layout>
    <Helmet title={'Sobre o Eko'} />
      <StyledMultipleBg>
          <AdinkraGrid level={0.3} opacity={0.1} />
          <AdinkraGrid level={1.3} opacity={0.1} />
          <AdinkraGrid level={2.3} opacity={0.2} />
          <AdinkraGrid level={3.2} opacity={0.2} />
          <AdinkraGrid level={4} opacity={0.3} />
        <StyledTitle>
          SOBRE O EKO
        </StyledTitle>
      </StyledMultipleBg>
      <Container center={center}>
        <h1>Texto bonito</h1>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
        <p>Paragrafo de lorem Ipsum</p>
      </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
