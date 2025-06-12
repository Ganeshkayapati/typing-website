import { useTheme } from "../context/ThemeContext";
import Account from "./Account";
import logo from "../assets/logo.webp";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: theme.backgroundColor,
      }}
    >
      {/* Logo */}
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </div>

      {/* Account icons */}
      <div
        className="user-icon"
        style={{ color: theme.typeBoxColor, display: "flex", alignItems: "center", gap: "10px" }}
      >
        <Account />
      </div>
    </div>
  );
};

export default Header;
