import React from 'react';
import {db} from './admin';

export const postCount = () => {
  const counts = 1;
  db.collection('count')
    .add(counts)
    .then((res) => console.log(res));
};
