import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className={style.nav_bar__container}>
      <span className={style.nav_bar__title}>
        i'm <b>Huy Vo</b>
        <br /> a <i>full-stack</i> developer
      </span>
      <div className={style.nav_bar__btns}>
        <div className={style.nav_bar__btn} onClick={() => navigate('/blog')}>
          Blog
        </div>
        <div className={style.nav_bar__btn} onClick={() => navigate('/about')}>
          About me
        </div>
        <div
          className={style.nav_bar__btn}
          onClick={() => navigate('/playground')}
        >
          Playground
        </div>
      </div>
    </div>
  );
};

export default NavBar;
