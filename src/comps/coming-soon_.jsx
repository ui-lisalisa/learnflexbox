import React from 'react';
import MailChimp from './plugins/mailchimp_';
//prettier-ignore
const ComingSoon = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>{'It\'s almost here! Be the first to know'}</h1>
      <MailChimp/>
    </>
  );
};

export default ComingSoon;
