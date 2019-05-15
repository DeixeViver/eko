import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = ({ children, title, date, cover }) => (
  <HeaderWrapper>
    <Container>
      <Grid>
        <Text>
          <h1>
            Transformando a caixa preta da Internet em uma caixa de ferramentas.
          </h1>
          <br />
          <p>
            <StyledAnchorLink href="#trilhas">
              Vamos começar? &nbsp;&#x2794;
            </StyledAnchorLink>
          </p>
        </Text>
      </Grid>
    </Container>
  </HeaderWrapper>
);

export default Header;

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
  padding: 0 16px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-gap: 80px;
    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
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
