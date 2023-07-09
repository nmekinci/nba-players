import logo from "../assets/nba-logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
        <img src={logo} alt="NBA LOGO" />
        <h1>NBA Legends</h1>
    </div>
  )
}

export default Header