import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import person from '../../static/logo/person.jpeg';

const Header = ({ children, title, date, cover }) => (
  <HeaderWrapper>
     {/*<Container>
     <h1 style={absoluteTitle}>
        APOIO TÉCNICO
      </h1>
      <h1 style={secondLine}>
        FORTALECENDO COMUNIDADES
      </h1>
      <Grid>
        <Text>
          <h3 style={headerText}>
            Uma plataforma sobre como a tecnologia pode ajudar no enfrentamento da Intolerância Online
          </h3>
          <br />
          <p style={{textAlign: 'center', marginBottom: 0}}>
            <div style={bolinha}></div>

            <StyledAnchorLink style={{marginTop: 10}} href="#trilhas">
              Vamos começar?
            </StyledAnchorLink>
          </p>
        </Text>
        <Text>
          <img style={{marginBottom: 0}} src={person} alt="Gatsby Logo" />

        </Text>
      </Grid>
    </Container>*/}
  </HeaderWrapper>
);

export default Header;

const bolinha = {
  backgroundColor: Theme.colors.primary.base,
  width:50,
  height: 50,
  borderRadius: 50,
  position: 'absolute',
  left: 170,
  zIndex: -10,
  marginTop: -10
}

const absoluteTitle = {
  position:'absolute', 
  maxWidth: '1000px', 
  fontSize: '60px',
  fontWeight: '500',
  backgroundColor: Theme.colors.primary.base,
  padding: 10,
  color: Theme.colors.black.base,
  zIndex: 10,
  fontFamily: Theme.fontFamily.body
}

const secondLine = {
  marginTop: '90px',
  position:'absolute', 
  maxWidth: '1000px', 
  fontSize: '60px',
  fontWeight: '500',
  backgroundColor: Theme.colors.primary.base,
  padding: 10,
  color: Theme.colors.black.base,
  zIndex: 10,
  fontFamily: Theme.fontFamily.body
}

const headerText = {
  marginTop: '190px',
  fontSize: "24px",
  fontWeight: '600',
  lineHeight: '1.2',
  fontFamily: Theme.fontFamily.body

}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 16px 0;
  @media (min-width: 575px) {
    max-width: 540px;
  }
  @media (min-width: 767px) {
    max-width: 720px;
  }
  @media (min-width: 991px) {
    max-width: 960px;
  }
  @media (min-width: 1199px) {
    max-width: 1200px;
  }
`;

const HeaderWrapper = styled.header`
  padding-top: 96px;
  @media (max-width: 991px) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  > div {
    width: 120%;
    margin-bottom: -4.5%;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  grid-gap: 48px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
    > ${Art} {
      order: 2;
    }
  }
`;

export const Text = styled.div`
  justify-self: center;
  @media (max-width: 991px) {
    justify-self: start;
  }
`;

const StyledAnchorLink = styled(AnchorLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
