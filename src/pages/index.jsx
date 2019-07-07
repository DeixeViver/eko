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
import adrinka1 from '../../static/adrinka1.png';
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
      largeDescription: "Em formação para sempre :) aprendendo com tudo ao meu redor. Bacharela em Análise de Sistemas pela UNEB e mestranda em Ciências da Computação pela UFCG. Acredtio que a tecologia é meio e que ela pode e deve ser aplicada para melhorar a vida das pessoas de forma consciente.",
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
  if(name == "algoritmo")
      return theme.colors.subsetA;
  else if(name == "dados")
      return theme.colors.subsetB;
  else
    return theme.colors.subsetC;
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
  

  const StyledMultipleBg = styled.div`
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

  const SyledIntro = styled.h1`
    font-size: 45px;
    margin: 3rem 0.5rem;
    font-family: 'Comfortaa', cursive;
    text-align: center;
    line-height: 1.6;
    text-shadow: 2px 3px 8px rgba(170, 170, 170, 1);
    @media (min-width: 40em) {
      font-size: 55px;
      margin: 0 1rem;
    }
    @media (min-width: 1024px) {
      font-size: 70px;
      margin: 2rem;
    }
`;

const ContinuedDivStyled = styled.div`
  background-image:  linear-gradient(180deg, ${chooseColor(number)} 0%, ${chooseColor(number)} 50%, ${theme.colors.blue.base} 100%);
  padding: 10rem 0;
`;

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
        <SyledIntro>Mudando o contato entre Pessoas, Tecnologia e o Enfrentamento da Discriminação Online</SyledIntro>
      </StyledMultipleBg>
      <ContinuedDivStyled>
        <Container>
          <Grid>
            <Text>
              <span style={retangleSlogan}></span>
              <h2 style={sloganTitle}>Nós queremos um Contato Bilateral</h2>
              <p style={sloganBody}>
                Por vezes nós temos a propagação de discriminação na Rede. 
                As pessoas têm sua vida influenciada pela tecnologia, 
                mas o processo de desenvolvimento dessas tecnologias muitas 
                vezes não está levando em conta as pessoas que serão atingidas.
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
              <h2 style={sloganTitle}>Pergunte-me Como!</h2>
              <p style={sloganBody}>
                Através do entendimento das nossas Trilhas do Conhecimento!
                A ideia das Trilhas é comunicar temas relacionados a 
                tecnologia e que são capazes de ajudar no protagonismos de outras iniciativas 
                no enfrentamento da discriminação online. <br></br>
                E tudo isso de uma forma simples e prática!
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
        <h2 style={{fontSize: '52px', textAlign: 'center', color: '#666', marginBottom: "3rem", fontFamily: "Comfortaa, cursive", fontWeight: '700'}}>COMECE NAS TRILHAS</h2>
        
        <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
          {edges.map(({ node }) => (
            <PostList
              key={node.id}
              cover={node.frontmatter.cover.childImageSharp.fluid}
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              colorsBg={chooseFrontMatterColor(node.frontmatter.tags[0])}
            />
          ))}
        </div>
      </PostWrapper>

      <TeamWrapper>

        <h2 style={{fontSize: '35px', textAlign: 'center', color: '#343434', marginBottom: "3rem", fontFamily: "Comfortaa, cursive", fontWeight: '400'}}>O TIME</h2>


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
