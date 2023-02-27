import Nav from "../Nav/Nav";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <h3>
          <span className="omer">Omer </span>
          Frontend Developer
        </h3>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
