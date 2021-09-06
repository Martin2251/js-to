import "./App.css";

function App(props) {
  const { searchValue } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(function () {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=24885019`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setMovieInfo(data);
      });
  }, []);

  return (
    //as it reads from the api.

    <div className="card">
      <h4>Movie Name: {movieInfo.Title}</h4>
      <p>Year{movieInfo.Year}</p>
    </div>
  );
}

export default App;
