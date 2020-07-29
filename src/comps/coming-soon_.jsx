import React from 'react';
import MailChimp from './plugins/mailchimp_';
//prettier-ignore
const ComingSoon = () => {
  return (
    <div>
      <h1>{'It\'s almost here! Be the first to know,'}</h1>
      <MailChimp/>
    </div>
  );
};

export default ComingSoon;
