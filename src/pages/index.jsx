import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { jsx, css, keyframes, ThemeContext } from '@emotion/core';
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
import AdinkraLineItem from '../components/AdinkraLineItem';
import AdinkraGrid from '../components/AdinkraGrid';


import ad1 from '../../static/adrinkas/1.png';
import ad1a from '../../static/adrinkas/1a.png';
import ad2a from '../../static/adrinkas/2a.png';
import ad2 from '../../static/adrinkas/2.png';
import ad3 from '../../static/adrinkas/3.png';
import ad3a from '../../static/adrinkas/3a.png';
import ad4a from '../../static/adrinkas/4a.png';
import ad4 from '../../static/adrinkas/4.png';
import ad5 from '../../static/adrinkas/5.png';
import ad6 from '../../static/adrinkas/6.png';
import ad7 from '../../static/adrinkas/7.png';
import ad8 from '../../static/adrinkas/8.png';
import ad9 from '../../static/adrinkas/9.png';
import ad10 from '../../static/adrinkas/10.png';


export const adinkraData = [
  {id: 1, img: ad1, name: "NYANSAPOW", description: "Símbolo da sabedoria, engenhosidade, inteligência e paciência"},
  //{id: 2, img: ad2, name: "OBI NKA BI", description: "Símbolo da advertência contra calúnia, difamação e o falar mal do outro pelas costas"},
  {id: 3, img: ad3, name: "NTESIEMATE MASIE", description: "Eu ouvi e guardei. Símbolo da sabedoria, do conhecimento e da prudência"},
  {id: 4, img: ad4, name: "SANKOFA", description: "Símbolo da sabedoria para aprender com o passado para construir o futuro"},
  {id: 5, img: ad5, name: "ANANSE NTONTAN", description: "Símbolo da sabedoria, esperteza, criatividade e da complexidade da vida"},
  {id: 6, img: ad6, name: "MFRAMMA-DAN", description: "Símbolo de preparo, fortaleza, amparo social, excelência e elegância"},
  {id: 7, img: ad7, name: "NKONSONKONSON", description: "Símbolo das relações humanas. Símbolo da unidade, interdependência, fraternidade e cooperação"},
  {id: 8, img: ad8, name: "OHENE ANIWA", description: "Símbolo da Vigilância, proteção e segurança"},
  {id: 9, img: ad9, name: "FI-HANKRA", description: "Símbolo da proteção, segurança, fraternidade e solidariedade"},
  {id: 10, img: ad10, name: "DAMEDAME", description: "Quadrados múltiplos do jogo de xadrez. Simbolo da esperteza, inteligência e estratégia"},
]

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
      largeDescription: "Formada em Análise de Sistemas pela UNEB e Mestranda em Sistemas de Informação pelo IFBA. Procuro transformar as pessoas ao meu redor com todo o conhecimento que adquiri durante minha vida.",
      instagram: "irisribeiros1"
  },
  {
      id: 3,
      image: jamile,
      name: "Jamile Lima",
      shortDescription: "Web Expert Apaixonada pelo que faz",
      largeDescription: "Estudante de Ciência e Tecnologia, Desenvolvedora Web e Mobile, amante de café e em busca de criatividade através de livros, filmes e séries.",
      github: "https://github.com/jamilelima",
      instagram:""
  },
  {
      id: 4,    
      image: lorena,
      name: "Lorena Pereira",
      shortDescription: "Cientista de Dados com Conteúdo",
      largeDescription: "Bacharela em Sistemas de Informação pela UNEB e mestranda em Ciências da Computação pela UFCG. Acredito que a tecnologia é meio e que ela pode e deve ser aplicada para melhorar a vida das pessoas de forma consciente.",
      github: "https://github.com/lorenaps",
      instagram:""

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
  opacity: 0.2;
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

const StyledKnownProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 6rem 0;
  background: ${theme.colors.orange.base};
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
  justify-self: start;

  @media (max-width: 1200px) {
    justify-self: center;
  }

  @media (max-width: 600px) {
    justify-self: start;
  }
`;

const sloganTitle = {
  fontSize: '45px',
  fontFamily: theme.fontFamily.body,
  fontWeight: '600',
  marginBottom: 15
}

const sloganBody = {
  fontSize: '24px',
  maxWidth: '600px'
}

const sloganTitleWhite = {
  fontSize: '45px',
  fontFamily: theme.fontFamily.body,
  fontWeight: '600',
  marginBottom: 15,
  color: theme.colors.white.base
}

const sloganBodyWhite = {
  fontSize: '24px',
  maxWidth: '600px',
  color: theme.colors.white.base
}

const sloganBodyWhiteCenter = {
  fontSize: '24px',
  maxWidth: '600px',
  textAlign: "center",
  color: theme.colors.white.base
}

const retangleSlogan = {
  width: 30,
  height: 180,
  backgroundColor: theme.colors.yellow.base,
  position: 'absolute',
  left: 30,
  opacity: 0.2
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
    padding: 5rem 2rem 3rem 2rem;
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
  }
  @media (max-width: 700px) {
    left: 0;
    right: 0;

  }
`;

  const SyledIntro = styled.h1`
  font-size: 30px;
  position: absolute;
  width: 90%;
  margin: 0 auto;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  line-height: 1.6;
  text-shadow: 2px 3px 8px rgba(170, 170, 170, 1);
  top: 25%;
  
  @media (min-width: 40em) {
    font-size: 40px;
    margin: 0rem 0.5rem;
  }
  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: inherit auto;
    font-size: 50px;
  }
  @media (min-width: ${theme.breakpoints.l}) {
    font-size: 60px;
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

const AdinkraLine = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  top: 40%;
  @media screen and (max-width: ${theme.breakpoints.m}){
    top: 40%;
    width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints.l}){
    top: 45%;
    width: 100%;
  }

  @media screen and (max-width: ${theme.breakpoints.s}){
    top: 33%;
  }

  @media screen and (max-width: 375px){
    position: absolute;
    top: 85%;
  }
`;

const PostListCss = styled.div`
  display: flex;
  flex-direction: column-reverse; 
  align-items: center;
  @media screen and (min-width: ${theme.breakpoints.l}){
    flex-direction: row-reverse;   
  }
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
  
          <SyledIntro>O que você precisa saber sobre Tecnologia para enfrentar a Discriminação na Internet</SyledIntro>
            {/*<AdinkraGrid level={0} opacity={0.1} />
            <AdinkraGrid level={1} opacity={0.1} />
            <AdinkraGrid level={2} opacity={0.2} />
            <AdinkraGrid level={3} opacity={0.2} />
            <AdinkraGrid level={4} opacity={0.3} />
            <AdinkraGrid level={5} opacity={0.3} />
            <AdinkraGrid level={6} opacity={0.3} />
            <AdinkraGrid level={7} opacity={0.3} />
            <AdinkraGrid level={8} opacity={0.4} />
            <AdinkraGrid level={9} opacity={0.5} />
            <AdinkraGrid level={10} opacity={0.6} />
           */}


           <AdinkraLine>
            {adinkraData.map(e => (
              <AdinkraLineItem adinkra={e.img} title={e.name} text={e.description} />
            )) }
             
           </AdinkraLine>
            
          
      </StyledMultipleBg>
      <ContinuedDivStyled>
        <Container>
          <Grid>
            <Text>
              <span style={retangleSlogan}></span>
              <h2 style={sloganTitle}>Você sabe o que são algoritmos? </h2>
              <p style={sloganBody}>
                Sabe o que os dados espalhados na Internet por todos os usuários - você, 
                por exemplo - tem a ver com privacidade e bolha social? 
                E como a gente pode usar dados abertos para fortalecer uma narrativa? 
                <br></br>
                <br></br>
                <b>Somos uma plataforma de educação digital feita por engenheiros de software e 
                  cientistas de dados e em três seções vamos explicar tudo isso, de forma simples 
                  e com linguagem acessível.</b>
                <br></br>
                <br></br>
                  Separamos o conteúdo em 3 partes que chamamos Trilhas do Conhecimento.
                  Passaremos por cada uma delas como se fossem um caminho bem 
                  sinalizado e guiado com um sistema africano de símbolos que tem tudo 
                  a ver com essa conversa? É o Adinkra, esse conjunto de ícones que você vê 
                  aqui, onde cada um deles tem um significado, relacionado ao conteúdo da trilha.
              </p>
            </Text>
            <Text>
              <TranslateYElement>
                {/*<img style={{marginBottom: 0}} src={adrinka1} alt="Gatsby Logo" />*/}
                <img style={{marginBottom: 0, padding: "1rem", backgroundColor: "white", borderRadius: "50%"}} src={ad7} alt="Gatsby Logo" />

              </TranslateYElement>
            </Text>
          </Grid>
        </Container>
      </ContinuedDivStyled>
      {/*<StyledAbout>
        <Container>
          <Grid>
            <Text>
              <RetangleSloganA></RetangleSloganA>
              <h2 style={sloganTitleWhite}>Trilhas do Conhecimento</h2>
              <p style={sloganBodyWhite}>
                Separamos o conteúdo em 3 Trilhas de forma simples, com exemplos próximos da nossa realidade. 
                Passaremos por cada uma delas como se fossem um caminho bem direcionado e sinalizado.
                <br></br>
                <br></br>
                E para tornar a experiência ainda mais potente, que tal guiar esse caminho com um sistema africano de símbolos que tem tudo a ver com essa conversa?
                <a style={{color: theme.colors.green.light, textDecoration: "underline"}} href='http://ipeafro.org.br/acoes/pesquisa/adinkra/'> É o Adinkra, </a> 
                esse conjunto de ícones que você vê aqui e que representam ideias expressas em provérbios. 
                Cada um deles tem um significado, relacionado ao conteúdo da trilha.
              </p>
            </Text>
            <Text>
              <TranslateYElement>
                <img style={{marginBottom: 0, padding: "1rem", backgroundColor: "white", borderRadius: "50%"}} src={ad7} alt="Gatsby Logo" />
              </TranslateYElement>

            </Text>
          </Grid>
        </Container>
      </StyledAbout>*/}

      
      <PostWrapper>
        <h2 id="trilhas" style={{fontSize: '52px', textAlign: 'center', color: '#666', marginBottom: "3rem", fontFamily: "Comfortaa, cursive", fontWeight: '700'}}>COMECE POR AQUI :)</h2>
        
        <PostListCss>
          {edges.map(({ node }) => (
            <PostList
              key={node.id}
              cover={node.frontmatter.cover} 
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              video={node.frontmatter.video}
              videoname={node.frontmatter.videoname}
              fronttitlea={node.frontmatter.fronttitlea}
              fronttitleb={node.frontmatter.fronttitleb}
              frontsubtitle={node.frontmatter.frontsubtitle}
              barpercentage={node.frontmatter.barpercentage}
              baradinkra={node.frontmatter.baradinkra}
              excerpt={node.excerpt}
              colorsBg={chooseFrontMatterColor(node.frontmatter.tags[0])}
            />
          ))}
          {/*.childImageSharp.fluid */}
        </PostListCss>
      </PostWrapper>

      <StyledKnownProjects>
        <div style={{maxWidth: "1200px", margin: "0 auto", display: "block"}}>
          <h2 style={{fontSize: '35px', textAlign: 'center', color: '#fafafa', marginBottom: "3rem", fontFamily: "Comfortaa, cursive", fontWeight: '400'}}>MOSTRE SUA VOZ</h2>
          <Text>
            <p style={sloganBodyWhiteCenter}>
              Conheça aqui outros projetos que fazem da Internet um lugar melhor.
            </p>
          </Text>
          <div style={{display:"flex", justifyContent: "center"}}>
            <div style={{margin: "0 15px", display: "flex", flexDirection: "column",}}>
              <iframe style={{marginBotton: "10px !important"}} width="100%" height="100%" src="https://www.youtube.com/embed/5Wc7rdAjBJE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{fontSize: 16, color: "white", fontFamily: "Comfortaa, cursive", textAlign: "center", marginTop: "-10px"}}>Seja Extraordinária</p>
            </div>  
            <div style={{margin: "0 15px", display: "flex", flexDirection: "column",}}>
              <iframe style={{marginBotton: "10px !important"}} width="100%" height="100%" src="https://www.youtube.com/embed/5Wc7rdAjBJE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p style={{fontSize: 16, color: "white", fontFamily: "Comfortaa, cursive", textAlign: "center", marginTop: "-10px"}}>Diário da Mari</p>
            </div>
          </div>

          <div style={{backgroundColor: theme.colors.green.base, padding: "10px"}}>
            <p style={{fontSize: 16, color: "white", fontFamily: "Comfortaa, cursive", textAlign: "center", margin: 0}}>Nos acompanhe no Instagram e veja mais<br/> <a href="https://www.instagram.com/ekoprojeto/" target="_blank" title="Instagram do Eko">Projeto Ẹkọ</a></p>
          </div>
        </div>
      </StyledKnownProjects>

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
              github={e.github}
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
              fronttitlea: PropTypes.string,
              fronttitleb: PropTypes.string,
              frontsubtitle: PropTypes.string,
              barpercentage: PropTypes.array,
              baradinkra: PropTypes.array,
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
            fronttitlea
            fronttitleb
            frontsubtitle
            barpercentage
            baradinkra
          }
        }
      }
    }
  }
`;
