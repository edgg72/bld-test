import { BoldLogoSVG } from "../../assets/BoldLogoSVG";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <BoldLogoSVG />
      <div className="navbar__buttons">
        <button>Mi negocio</button>
        <button>Ayuda</button>
      </div>
    </nav>
  );
};
