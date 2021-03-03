import React from 'react';
import Wrapper from './Wrapper';
import A from './A';

function Footer() {
  return (
    <Wrapper>
      {`Designed & Built by `}
      <A href="https://ductran.netlify.app/" target="_blank">
        Duc Tran
      </A>
    </Wrapper>
  );
}

export default Footer;
