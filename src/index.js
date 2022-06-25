import React from 'react';
import MainT from './core/main';

const Demo = props => {
  const { ux, naviList, tab } = props;

  return <MainT tab={tab} ux={ux} naviList={naviList} />;
};

export default Demo;
