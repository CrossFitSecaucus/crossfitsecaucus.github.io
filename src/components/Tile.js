import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 225px;

  @media (min-width: 576px) {
    height: 250px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 992px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }
`

const Tile = ({children, className, style, url}) => {
  style = style || {};

  if (url) {
    style.background = `url('${url}')`;
    style.backgroundSize = 'cover';
    style.backgroundPosition = 'center center';
    style.width = '100%';
  }

  return (
    <Container className={`col-12 col-lg-4 ${className || ''}`} style={style}>
      {children}
    </Container>
  );
}

export default Tile

