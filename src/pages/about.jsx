import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import {getNumber, chooseColor} from './index';
import styled from '@emotion/styled';
import AdinkraGrid from '../components/AdinkraGrid';
import imersao from "../../static/imersao.jpg";
import ipeafro from '../../static/ipeafro.png';

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
  @media (min-width: 1000px) {
    height: 350px;  
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
          {/*<AdinkraGrid level={4} opacity={0.3} />*/}
        <StyledTitle>
          Sobre Nós
        </StyledTitle>
      </StyledMultipleBg>
      <Container center={center}>
        <h1>O Projeto</h1>

        <p>Ẹkọ (pronuncia-se Ékó), na língua Iorubá, significa instrução, 
          que é o nosso principal objetivo nessa iniciativa. Somos uma plataforma 
          de educação digital feita por engenheiros de software e cientistas de 
          dados. E isso já explica bastante o que você vai encontrar por aqui: Informação 
          sobre tecnologia e sobre como usar as ferramentas da Internet para combater a Discriminação Online.</p>
          <br></br>
          <br></br>
          
        <h1>Por que estamos fazendo isso?</h1>

        <p>Por vezes o conteúdo por trás do funcionamento da Internet, em relação a algoritmos, 
          dados, privacidade e segurança é um ponto oculto, camuflado que ninguém sabe muito 
          bem como funciona ou acha complicado demais para entender.</p>

        <p>Nesse contexto a falta de informação pode contribuir com a propagação da discriminação 
          na Rede. E é esse ponto que nós queremos alcançar. Desmistificar esse cenário deixando 
          os assuntos mais acessíveis e aplicáveis, de forma que as pessoas consigam utilizar os 
          conceitos e ferramentas disponíveis para fortalecer suas iniciativas.</p>
          <br></br>
          <br></br>

        <h1>Como o projeto foi construído?</h1>

        <p>Ẹkọ é fruto da iniciativa <a href="http://saferlab.org.br/" target="_blank" title="Saferlab">Saferlab</a>. 
        O objetivo do Saferlab é apoiar o protagonismo de jovens na criação de projetos que ajudam a tornar a Internet 
        um lugar melhor - com mais diálogo, respeito à diversidade e aos Direitos Humanos. Para isso, desde de abril de 2018, 
        os grupos inscritos no Saferlab passaram por etapas de formação online, formação presencial, mentoria e acompanhamento 
        da implementação do projeto. Contando com vários apoiadores ao longo do caminho, os quais somos extremamente gratos!</p>
        <br></br>

        <img src={imersao} alt="Imersão Nordeste do Saferlab - Realizada em Salvador-BA"/>
        <h5>Imersão Nordeste do Saferlab - Realizada em Salvador-BA (Foto: Ricardo Matsukawa)</h5>        
        <br></br>
        <br></br>

        <h1>Adinkra</h1>

        <p>
        Adinkra é um sistema de escrita africano formado por um conjunto de símbolos que 
        representam ideias através de provérbios. Toda a utilização dos<a href="http://ipeafro.org.br/acoes/pesquisa/adinkra/" target="_blank" title="símbolos Adinkra"> símbolos Adinkra </a>
        dentro do site deve-se ao material construído pelo <a href="http://ipeafro.org.br/" target="_blank" title="IPEAFRO"> IPEAFRO </a> que nos permitiu a reutilização. 
        Agradecemos a toda equipe pelo trabalho incrível na construção do material e pela possibilidade de reutilização.
        <br></br>
        <br></br>


        <img src={ipeafro} alt="Logo IPAFRO"/>
        </p>

      </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
