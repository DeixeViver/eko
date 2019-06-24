import React from 'react';
import styled from '@emotion/styled';
import safernet from '../../static/safernet.png';


const Wrapper = styled.footer`
  position: relative;
  padding-top: 0.5rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  font-family: 'Confortaa', cursive;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding-top: 0;
`;

const Text = styled.div`
  margin: 0;
  flex: 3;
  padding: 0.9rem;
  text-align: center;
  background: #d9f7fa;

  color: ${props => props.theme.colors.black.light};
`;

const TextDeixe = styled.div`
  flex: 1;
  margin: 0;
  padding: 0.5rem;
  font-size: 14px;
  text-align: center;
  background: #bfd7d8;
  color: ${props => props.theme.colors.black.light};
`;

const imgMember = {
  width: '100px',
  borderRadius: 12,
  flex: 2,
  marginBottom: 0,
  position: 'absolute',
  right: 0,
  top: "-78px"
}


const Footer = () => (
  <Wrapper>
    <TextDeixe>
      <span>Feito com muito amor pela equipe DeixeVirVer</span>
    </TextDeixe>
    
    <Text>
      <span>
        Projeto Financiado, motivado e inspirado pelo SAFERNET
      </span>
      <img style={imgMember} src={safernet} alt={name} />
    </Text>
  </Wrapper>
);
export default Footer;
