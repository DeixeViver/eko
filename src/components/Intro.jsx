import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'layouts';

const Intro = ({ path, cover, title, date, excerpt, tags }) => (
  <Container>
    <p>Teste</p>
  </Container>
);

export default BlogList;

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
