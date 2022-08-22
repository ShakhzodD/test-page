import React from "react";
import "../assets/style/filmInfo.scss";
import Table from "./Table";
const FilmInfo = ({ filmsInfo, BannerImg, filmsInfoTable }) => {
  return (
    <div className="film-info">
      <h2 className="film-info-title title-style">Крёстный отец</h2>

      <p className="film-info-text">
        Эпос Френсиса Форда Копполы рассказывает о мафиозной семье Корлеоне.
        Глава клана дон Вито, которого все зовут Крёстным отцом, выдаёт замуж
        свою дочь. В то же время его любимый сын Майкл возвращается домой после
        войны. Последний не желает иметь ничего общего с тёмными делами отца.
        Однако покушение на Вито Корлеоне меняет всё.
      </p>

      <p className="film-info-text">
        «Крёстный отец» считается не только образцовым гангстерским фильмом, но
        и примером одной из самых пронзительных трансформаций персонажа за всю
        историю кинематографа.
      </p>

      <ul className="film-info-ul">
        {filmsInfo.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>

      <ol className="film-info-ul">
        {filmsInfo.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ol>

      <div className="film-info-img">
        <img src={BannerImg} alt="" />
      </div>

      <h3 className="film-info-title-h3 title-style">Лицо со шрамом</h3>

      <p className="film-info-text">
        Кубинский уголовник Тони Монтана собирается завязать с криминальным
        прошлым и начать новую жизнь. Но обстоятельства заставляют героя вновь
        ввязаться в тёмные дела. Неустрашимость и стальные нервы позволяют Тони
        стремительно подняться на самый верх преступного мира Майами.
      </p>
      <div className="filmInfo-table">
        <Table {...{ filmsInfoTable }} />
      </div>
      <div className="filmInfo-table">
        <Table {...{ filmsInfoTable }} />
      </div>
      <div className="filmInfo-table">
        <Table {...{ filmsInfoTable }} />
      </div>
    </div>
  );
};

export default FilmInfo;
