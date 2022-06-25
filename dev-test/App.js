import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Demo from '../src/index';
import './locales/i18n';
import './styles/style.scss';
import ux from './ux';

const AppTest = () => {
  const list = ['Juan', 'David', 'Ortiz', 'Vera', '06', '23', '2022'];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Demo ux={ux} naviList={list} tab={3} />
    </Suspense>
  );
};

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <AppTest />
  </Suspense>,
  document.getElementById('app')
);
