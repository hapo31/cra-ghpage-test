import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import style from "styled-jsx";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <h1>{history.location.pathname}</h1>
      <div className="links">
        <Link to="/">Index</Link>
        <Link to="/articles/0">Articles</Link>
        <Link to="/about">About</Link>
      </div>

      <style jsx>{`
        .links {
          display: flex;
        }
        .links > a {
          display: inline-flex;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Header;
