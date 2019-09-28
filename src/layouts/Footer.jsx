import React from 'react';
import styled from '@emotion/styled';
import safernet from '../../static/safernet.png';


const Wrapper = styled.footer`
  box-shadow: ${props => props.theme.shadow.footer};
  font-weight: 500;
  display: flex;
  flex-direction:column;
  flex: 2;
  background-color: #fff;

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    padding-top: 0.5rem;
    bottom: 0;
    box-shadow: ${props => props.theme.shadow.footer};
    font-family: 'Confortaa', cursive;
    font-weight: 500;
    display: flex;  
    flex-direction:row;
    align-items: flex-start;
    padding-top: 0;
    justify-content: flex-start
  }
`;

const Text = styled.div`
  margin: 0;
  padding: 0.9rem;
  text-align: center;
  background: #d9f7fa;
  font-family: 'Confortaa', cursive;
  flex: 2;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.black.light};

    
  @media (max-width: ${props => props.theme.breakpoints.s}) {
  }
`;



const TextDeixe = styled.div`
  margin: 0;
  padding: 0.5rem;
  font-size: 14px;
  text-align: center;
  background: #bfd7d8;
  color: ${props => props.theme.colors.black.light};
  font-family: 'Confortaa', cursive;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const imgMember = {
  width: '130px',
  borderRadius: 12,
  margin:0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
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
  <div style={{backgroundColor: "#FFF"}}>
    <div style={{flexDirection: "row", display: "flex", alignItems: "flex-end"}}>
      <Wrapper>
        <TextDeixe>
          <span>Feito com muito amor pela equipe Deixe ViVer</span>
        </TextDeixe>
        
        <Text>
          <span>
            Projeto Financiado, motivado e inspirado pelo SAFERNET
          </span>
        </Text>
      </Wrapper>
      <img style={imgMember} src={safernet} alt={"Safernet Logo"} />

    </div>
   

    <ViewDivisor/>
  </div>

);
export default Footer;
