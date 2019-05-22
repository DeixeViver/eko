import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 0.5rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: #bfd7d8;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 0.7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 0.5rem;
  text-align: center;
  color: ${props => props.theme.colors.black.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Projeto Financiado, motivado e inspirado pelo SAFERNET
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
