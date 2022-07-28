import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import style from './style.module.scss';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <div className={style.home_page__container}>
        <div className={style.home_page__desc}>
          <span>{t('home:welcome')}</span>
        </div>
        <div className={style.home_page__img}></div>
      </div>
    </Layout>
  );
};

export default HomePage;
