import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import theme from '../../config/theme';
import brain from '../../static/logo/brain.png';
import adrinka1 from '../../static/adrinka1.png'
import ekoLogo from '../../static/logo/logo.png';
import adk1 from '../../static/adrinkas/1.png';
import {Container} from '../components/Header';
import {GridMember} from '../components/TeamMember';
import bg1 from '../../static/bg1.jpg';
import bg2 from '../../static/bg2.jpg';
import bg3 from '../../static/bg3.jpg';
import GoogleFontLoader from 'react-google-font-loader';


import franklin from '../../static/time/franklin.jpg';
import iris from '../../static/time/iris.jpg';
import lorena from '../../static/time/lorena.png';
import jamile from '../../static/time/jamile.jpg';
import TeamMember from '../components/TeamMember';
import AdinkraItemGrid from '../components/AdinkraItemGrid';


import ad1 from '../../static/adrinkas/1.png';
import ad1a from '../../static/adrinkas/1a.png';
import ad2a from '../../static/adrinkas/2a.png';
import ad2 from '../../static/adrinkas/2.png';
import ad3 from '../../static/adrinkas/3.png';
import ad3a from '../../static/adrinkas/3a.png';
import ad4a from '../../static/adrinkas/4a.png';
import ad4 from '../../static/adrinkas/4.png';

export const adinkraDataExample = {
  id: 1,
  text: "Este adinkra significa isso muito importe, pois o significado esta descrito aqui.",
  title: "Esperança (okuara)"
}

export const team = [
  {
      id: 1, 
      image: franklin,
      name: "Franklin Silva",
      shortDescription: "Engenheiro de Software Criativo",
      largeDescription: "Formado em Análise e Desenvolvimento de Sistemas pelo IFBAIANO e Desenvolvimento Mobile/Web pelo College of San Francisco além de Mestrando em Engenharia de Software pela UFBA. Defendo o uso da internet como meio para difundir boas ideias e criar conexões com significado, de forma a derrubar preconceitos e garantir uma melhor vivência em sociedade. ",
      instagram: "itsfranklins"
  },
  {
      id: 2,
      image: iris,
      name: "Iris Ribeiro",
      shortDescription: "Engenheira Backend Multitarefa",
      largeDescription: "Jean Rosier é sócio e professor da Perestroika. Palestrante internacional dos eventos TEDx(Madrid), Ouishare (Paris), Worldz(Hollywod) e CLEIN (Medellin). É responsável pela expansão internacional da escola além de influencer da Hyper Island na Suécia. Liderou workshops de criatividade para marcas globais como: Red Bull, LinkedIn, Coca-Cola, Oracle, Walmart e Rede Globo.",
      instagram: "irisribeiros1"
  },
  {
      id: 3,
      image: jamile,
      name: "Jamile Pereira",
      shortDescription: "Web Expert Apaixonada pelo que faz",
      largeDescription: "Jean Rosier é sócio e professor da Perestroika. Palestrante internacional dos eventos TEDx(Madrid), Ouishare (Paris), Worldz(Hollywod) e CLEIN (Medellin). É responsável pela expansão internacional da escola além de influencer da Hyper Island na Suécia. Liderou workshops de criatividade para marcas globais como: Red Bull, LinkedIn, Coca-Cola, Oracle, Walmart e Rede Globo.",
      instagram: "jamileInsta"
  },
  {
      id: 4,    
      image: lorena,
      name: "Lorena Pereira",
      shortDescription: "Cientista de Dados com Conteúdo",
      largeDescription: "Em formação para sempre :) aprendendo com tudo ao meu redor. Bacharela em Sistemas de Informação pela UNEB e mestranda em Ciências da Computação pela UFCG. Acredtio que a tecnologia é meio e que ela pode e deve ser aplicada para melhorar a vida das pessoas de forma consciente.",
      instagram: "lorenaps3"
  },

];

export const getNumber = () => {
  let number = Math.floor(Math.random() * Math.floor(3));
  console.log(number);
  return number;
}

export const choosebg = (number) => {
  switch (number){
    case 1:
      return bg1;
    case 2:
        return bg2;
    case 0:
        return bg3;
    default:
      return bg2;
  }
}

export const chooseColor = (number) => {
  switch (number){
    case 1:
      return theme.colors.green.light;
    case 2:
        return theme.colors.yellow.light;
    case 0:
        return theme.colors.orange.light;
    default:
        return theme.colors.yellow.light;
  }
}

const chooseFrontMatterColor = (name) => {
  console.log(name);
  if(name == "algoritmos")
      return theme.colors.subsetA;
  else if(name == "dados")
      return theme.colors.subsetB;
  else
    return theme.colors.subsetC;
}

const populateAdinkraGrid = (rowLevel, opacity) => {
  let baseCalc = 0
  if(window.innerWidth <= 768)
    baseCalc = 12;
  else if(window.innerWidth >= 1024)
    baseCalc = 10;
  else
    baseCalc = 5;

  let rowCount = Math.floor(100 / baseCalc);

  console.log(rowCount)

  let arrayCount = new Array(rowCount);
  arrayCount.map((e, i) => i + 1);
  let arrayReturn = [];
  for(var i = 0; i < arrayCount.length; i++){
    console.log(i);

    arrayReturn.push(returnAdinkraItem(rowLevel, baseCalc, i+1, opacity));
  }
  return arrayReturn.map(e => e);
  /*return (
    <div>
    {arrayCount.map( (e, i) => 
    <AdinkraItemGrid top={rowLevel * baseCalc + "%"} left ={(e + 1) * baseCalc + "%"} adinkra={chooseAdinkra(e)} />)}
    </div>
  )*/
  //return (<AdinkraItemGrid top={rowLevel * baseCalc + "%"} left ={(arrayCount.length) * baseCalc + "%"} adinkra={chooseAdinkra()} />)

}

const returnAdinkraItem = (level, baseCalc, pos, opacity) => {
  console.log("top " + level * baseCalc + "%");
  console.log("left " + pos * baseCalc + "%");
  return (<AdinkraItemGrid  title={adinkraDataExample.title} text={adinkraDataExample.text} 
                            key={(pos - 1) * baseCalc + level} 
                            opacity={opacity} 
                            top={level * baseCalc + "%"} 
                            left ={(pos - 1) * baseCalc + 5 + "%"} 
                            adinkra={chooseAdinkra()} />);
}

const chooseAdinkra = (e) => {
  let adinkraArray = [ad1, ad2, ad3, ad4, ad1a, ad2a, ad3a, ad4a];
  let number = Math.floor(Math.random() * Math.floor(7));
  console.log(number);
  return adinkraArray[number];
}

const fadeInDown = keyframes`
  0% {
    transform: translate3d(0, -10%, 0);
  }

  50% {
    transform: none;
  }

  100% {
    transform: translate3d(0, -10%, 0);
  }

`;

const rotate = keyframes`
  0% {
    transform: rotate(5deg);
  }

  50% {
    transform: none;
  }

  100% {
    transform: rotate(5deg);
  }

`;

const TranslateYElement = styled.div`
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation: ${fadeInDown} 15s ease-in-out 0s infinite;
`;

const RetangleSloganA =  styled.div`
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation: ${fadeInDown} 15s ease-in-out 0s infinite;

  width: 30px;
  height: 180px;
  background-color: ${theme.colors.yellow.base};
  position: absolute;
  left: 30px;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 0 0;
  padding: 8rem 2rem;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

const ViewDivisor = styled.div`
height:20px;
background: linear-gradient(90deg, 
                              ${theme.colors.primary.dark} 0%,
                              ${theme.colors.primary.dark} 25%,
                              ${theme.colors.pink.base} 25%,
                              ${theme.colors.pink.base} 50%,
                              ${theme.colors.blue.base} 50%,
                              ${theme.colors.blue.base} 75%,
                              ${theme.colors.green.base} 75%,
                              ${theme.colors.green.base} 100%);
`;



const StyledAbout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10rem 0;
  background: ${theme.colors.blue.base};
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
  backgroundColor: theme.colors.yellow.base,
  position: 'absolute',
  left: 30,
}


const TeamWrapper = styled.div`
  padding: 2rem;
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  let number = getNumber();
  

  const StyledMultipleBgOld = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 5rem 4rem 3rem 4rem;
    background: url(${choosebg(number)}) center center no-repeat;
    background-size: cover;
    @media (max-width: 1000px) {
      padding: 4rem 2rem 1rem 4rem;
    }
    @media (max-width: 700px) {
      padding: 4rem 1rem 1rem 1rem;
    }
  `;

  const StyledMultipleBg = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 5rem 4rem 3rem 4rem;
  background-color: ${chooseColor(number)};
  background-size: cover;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 1rem 4rem;
  }
  @media (max-width: 700px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

  const SyledIntro = styled.h1`
  font-size: 45px;
  position: absolute;
  margin: 3rem 0.5rem;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  line-height: 1.6;
  text-shadow: 2px 3px 8px rgba(170, 170, 170, 1);
  @media (min-width: 40em) {
    margin: 2rem 0.5rem;
  }
  @media (min-width: 1024px) {
  }
`;

const AdrinkasHolder = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 0;
  list-style: none;
  margin: 1em auto 0;
  border: solid 1px transparent;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    width: 800px;
    height: 550px;
  }
  @media (min-width: 1024px) {
    width: 1200px;
    height: 550px;
  }
`;

const ContinuedDivStyled = styled.div`
  background-image:  linear-gradient(180deg, ${chooseColor(number)} 0%, ${chooseColor(number)} 50%, ${theme.colors.blue.base} 100%);
  padding: 8rem 0;
`;


const BackgroundAdinkras =  styled.div`
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  animation: ${fadeInDown} 1s ease-in-out 0s infinite;
`;

const definetranslateY = () => {
  if(window.innerWidth <= 768)
    return "120px";
  else if(window.innerWidth >= 1024)
    return "180px";
  else
    return "150px";
}

  return (
    <Layout>
      
      <GoogleFontLoader
          fonts={[
              {
                  font: 'Comfortaa',
                  weights: [400, 700],
              },
          ]}
      />

      <StyledMultipleBg>
        {/*<SyledIntro>Transformando o invisível em ferramenta contra a Discriminação Online</SyledIntro>
        <img style={{width: "200px", position: "absolute"}} src={ekoLogo} alt="Gatsby Logo" />

          <AdrinkasHolder>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", left: "30%", backgroundColor: "red", transform: `rotate(27.7714285714deg) translateY(${definetranslateY()}) rotate(-27.7714285714deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", left: "30%", backgroundColor: "green", transform: `rotate(55.5428571429deg) translateY(${definetranslateY()}) rotate(-55.5428571429deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", left: "30%", backgroundColor: "blue", transform: `rotate(83.3142857143deg) translateY(${definetranslateY()}) rotate(-83.3142857143deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", left: "30%", backgroundColor: "yellow", transform: `rotate(111.0857142857deg) translateY(${definetranslateY()}) rotate(-111.0857142857deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", left: "30%", backgroundColor: "pink", transform: `rotate(138.8571428571deg) translateY(${definetranslateY()}) rotate(-138.8571428571deg)`}}></div>

            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", right: "30%", backgroundColor: "red", transform: `rotate(-27.7714285714deg) translateY(${definetranslateY()}) rotate(27.7714285714deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", right: "30%", backgroundColor: "green", transform: `rotate(-55.5428571429deg) translateY(${definetranslateY()}) rotate(55.5428571429deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", right: "30%", backgroundColor: "blue", transform: `rotate(-83.3142857143deg) translateY(${definetranslateY()}) rotate(83.3142857143deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", right: "30%", backgroundColor: "yellow", transform: `rotate(-111.0857142857deg) translateY(${definetranslateY()}) rotate(111.0857142857deg)`}}></div>
            <div style={{width: "40px", height: "40px", position: "absolute", top: "50%", right: "30%", backgroundColor: "pink", transform: `rotate(-138.8571428571deg) translateY(${definetranslateY()}) rotate(138.8571428571deg)`}}></div>
          </AdrinkasHolder>
*/}
   
          <SyledIntro>Mudando o contato entre Pessoas, Tecnologia e o Enfrentamento da Discriminação Online</SyledIntro>
            <BackgroundAdinkras>

            </BackgroundAdinkras>
            {populateAdinkraGrid(0, 0.1)}
            {populateAdinkraGrid(1, 0.1)}
            {populateAdinkraGrid(2, 0.2)}
            {populateAdinkraGrid(3, 0.2)}
            {populateAdinkraGrid(4, 0.3)}
            {populateAdinkraGrid(5, 0.3)}
            {populateAdinkraGrid(6, 0.3)}
            {populateAdinkraGrid(7, 0.3)}
            {populateAdinkraGrid(8, 0.4)}
            {populateAdinkraGrid(9, 0.5)}
            {populateAdinkraGrid(10, 0.6)}            
            
          
      </StyledMultipleBg>
      <ContinuedDivStyled>
        <Container>
          <Grid>
            <Text>
              <span style={retangleSlogan}></span>
              <h2 style={sloganTitle}>Invisível aos olhos, mas bem ali no botão <i>'Publicar'</i></h2>
              <p style={sloganBody}>
                As pessoas têm sua vida influenciada pela tecnologia, mas o 
                processo de desenvolvimento dessas tecnologias muitas vezes não 
                está levando em conta as pessoas que serão atingidas.
                <br></br>
                <br></br>
                <b>
                Como podemos entender melhor o cenário por trás das Redes 
                e usar isso para combater a discriminação na Internet? </b><br></br>
                É o sobre isso o que vamos falar aqui!
              </p>
            </Text>
            <Text>
              <img style={{marginBottom: 0}} src={adrinka1} alt="Gatsby Logo" />

            </Text>
          </Grid>
        </Container>
      </ContinuedDivStyled>
      <StyledAbout>
        <Container>
          <Grid>
            <Text>
              <RetangleSloganA></RetangleSloganA>
              <h2 style={sloganTitle}>Conteúdo sem ranço</h2>
              <p style={sloganBody}>
                A ideia das Trilhas do Conhecimento é passar o conteúdo 
                de forma simples e prática. 
                <br></br>
                <br></br>
                E para dar um <i>tchan</i> nessa 
                experiência dividimos as Trilhas em conceitos fundamentais, 
                assim a cada conceito que você aprende você ganha 
                símbolos Adinkras - 
                <a href='http://ipeafro.org.br/acoes/pesquisa/adinkra/'> Um sistema 
                de escrita africano incrível.</a>
                <br></br>
                <br></br>
                Você sabia que nos Adinkras existe um símbolo só para expressar  
                “Advertência contra calúnia, difamação e o falar mal do outro 
                pelas costas”?<br></br>
                - Lindo, maravilhoso, Ícone sem defeitos. 
              </p>
            </Text>
            <Text>
              <TranslateYElement>
                <img style={{marginBottom: 0}} src={adrinka1} alt="Gatsby Logo" />
              </TranslateYElement>

            </Text>
          </Grid>
        </Container>
      </StyledAbout>

      
      <PostWrapper>
        <h2 style={{fontSize: '52px', textAlign: 'center', color: '#666', marginBottom: "3rem", fontFamily: "Comfortaa, cursive", fontWeight: '700'}}>COMECE POR AQUI :)</h2>
        
        <div style={{display: 'flex', flexDirection: "column-reverse", alignItems: 'center'}}>
          {edges.map(({ node }) => (
            <PostList
              key={node.id}
              cover={node.frontmatter.cover} 
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              video={node.frontmatter.video}
              videoname={node.frontmatter.videoname}
              excerpt={node.excerpt}
              colorsBg={chooseFrontMatterColor(node.frontmatter.tags[0])}
            />
          ))}
          {/*.childImageSharp.fluid */}
        </div>
      </PostWrapper>

      <TeamWrapper>

        <h2 style={{fontSize: '35px', textAlign: 'center', color: '#343434', marginBottom: "3rem", fontFamily: "Comfortaa, cursive", fontWeight: '400'}}>O TIME EKO</h2>


        <GridMember>
          {team.map(e => (
            <TeamMember 
              id={e.id}
              image={e.image}
              name={e.name}
              shortDescription={e.shortDescription}
              largeDescription={e.largeDescription}
              instagram={e.instagram}
            />

            
          ))}
        </GridMember>
      </TeamWrapper>
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
              colors: PropTypes.array,
              video: PropTypes.bool,
              videoname: PropTypes.string,
              fronttitle: PropTypes.string
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
            video
            videoname
            fronttitle
          }
        }
      }
    }
  }
`;
