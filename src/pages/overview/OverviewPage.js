// @flow
import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const OverviewPage = () => {
  return (
    <Container>
      Click to see an <Link to="/group/1">example detail page</Link>.
    </Container>
  );
};

export default OverviewPage;
