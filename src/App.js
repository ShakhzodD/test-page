import "./App.css";
import Navbar from "./components/Navbar";
import FilmInfo from "./components/FilmInfo";
import BannerImg from "./assets/img.png";
function App() {
  const films = [
    { id: 1, title: "Крёстный отец" },
    { id: 2, title: "Лицо со шрамом" },
    { id: 3, title: "Однажды в Америке" },
    { id: 4, title: "Неприкасаемые" },
    { id: 5, title: "Славные парни" },
    { id: 6, title: "Бронкская история" },
    { id: 7, title: "Путь Карлито" },
    { id: 8, title: "Криминальное чтиво" },
    { id: 9, title: "Казино" },
    { id: 10, title: "Донни Браско" },
  ];
  const filmsInfo = [
    { id: 1, title: "США, Италия, 1972 год." },
    { id: 2, title: "Эпическая гангстерская драма." },
    { id: 3, title: "Длительность: 175 минут." },
    { id: 4, title: "IMDb: 9,2." },
  ];
  const filmsInfoTable = [
    {
      id: 1,
      title: "Мисс Марвел",
      language: "США",
      year: 2022,
      genres: "Фантастика",
    },
    {
      id: 2,
      title: "Медленные лошади",
      language: "США",
      year: 2022,
      genres: "Детектив",
    },
    {
      id: 3,
      title: "Тёмные ветра",
      language: "США",
      year: 2022,
      genres: "Триллер",
    },
    {
      id: 4,
      title: "IMDb: 9,2.",
      language: "США",
      year: 2022,
      genres: "Фантастика",
    },
  ];

  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <div className="app-banner">
          <img src={BannerImg} alt="" />
        </div>

        <div className="app-title">15 лучших фильмов про мафию</div>

        <ul className="app-films-title_ul">
          {films.map((item, idx) => (
            <li className="app-films-title_ul_li" key={idx}>
              {item.title}
            </li>
          ))}
        </ul>

        <div className="">
          <FilmInfo {...{ filmsInfo, BannerImg, filmsInfoTable }} />
        </div>
      </div>
    </div>
  );
}

export default App;
