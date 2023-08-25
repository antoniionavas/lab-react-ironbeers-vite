import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src="src/assets/beers.png" /> <h2>All Beers</h2>{" "}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </Link>

      <Link to="/random-beer">
        <img src="src/assets/random-beer.png" /> <h2>Random Beers</h2>{" "}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Link>

      <Link to="/new-beer">
        <img src="src/assets/new-beer.png" /> <h2>New Beer</h2>{" "}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Link>
    </div>
  );
}

export default HomePage;
