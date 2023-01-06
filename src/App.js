import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="cards">
        <div className="card">
          <img src={props.pic} alt="pic" className="card_img" />
          <div className="card__info">
            <span className="card__category">{props.title} </span>
            <h3 className="card__title">{props.name}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
