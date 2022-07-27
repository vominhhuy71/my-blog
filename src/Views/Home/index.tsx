import React from 'react';
import Layout from '../../components/Layout';
import style from './style.module.scss';

const HomePage = () => {
  return (
    <Layout>
      <div className={style.home_page__container}>
        <div className={style.home_page__desc}>
          <span> Blogging About Tech, Books and My Journey!</span>
        </div>
        <div className={style.home_page__img}></div>
      </div>
    </Layout>
  );
};

export default HomePage;
