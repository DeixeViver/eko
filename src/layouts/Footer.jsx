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
  align-items: flex-start;
  padding-top: 0;
  justify-content: flex-start
`;

const Text = styled.div`
  margin: 0;
  flex: 2 1 0;
  padding: 0.9rem;
  text-align: center;
  background: #d9f7fa;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.colors.black.light};
`;

const TextDeixe = styled.div`
  flex: 1 1 0;
  margin: 0;
  padding: 0.5rem;
  font-size: 14px;
  text-align: center;
  background: #bfd7d8;
  color: ${props => props.theme.colors.black.light};

  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const ViewDivisor = styled.div`
height:20px;
background: linear-gradient(90deg, 
  ${props => props.theme.colors.primary.dark} 0%,
  ${props => props.theme.colors.primary.dark} 25%,
  ${props => props.theme.colors.pink.base} 25%,
  ${props => props.theme.colors.pink.base} 50%,
  ${props => props.theme.colors.blue.base} 50%,
  ${props => props.theme.colors.blue.base} 75%,
  ${props => props.theme.colors.green.base} 75%,
  ${props => props.theme.colors.green.base} 100%);
`;



const Footer = () => (
  <div>
    <Wrapper>
      <TextDeixe>
        <span>Feito com muito amor pela equipe Deixe ViVer</span>
      </TextDeixe>
      
      <Text>
        <span>
          Projeto Financiado, motivado e inspirado pelo SAFERNET
        </span>
        <img style={imgMember} src={safernet} alt={"Safernet Logo"} />
      </Text>
    </Wrapper>
    
    <ViewDivisor/>
  </div>

);
export default Footer;
