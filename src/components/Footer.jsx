import Select from "react-select";
import { themeOptions } from "../utils/themeOptions";
import { useTheme } from "../context/ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const handleChange = (event) => {
    setTheme(event.value);
    localStorage.setItem("theme", JSON.stringify(event.value));
  };
  return (
   
<div
  className="footer"
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: theme.backgroundColor, 
  }}
>
  <div className="links" style={{ display: 'flex', gap: '10px' }}>
    <a
      href="https://github.com/Ganeshkayapati/typing-website"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#87CEFA' }} // Light Sky Blue
    >
      <GitHubIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/ganesh-k-467728325"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#87CEFA' }}
    >
      <LinkedInIcon />
    </a>
  </div>

  <div className="themeButton" style={{ width: '200px' }}>
    <Select
      onChange={handleChange}
      options={themeOptions}
      menuPlacement="top"
      defaultValue={{ label: theme.label, value: theme }}
      styles={{
        control: (styles) => ({
          ...styles,
          backgroundColor: theme.backgroundColor,
        }),
        menu: (styles) => ({
          ...styles,
          backgroundColor: theme.backgroundColor,
          color: '#4ecdc4',
        }),
        option: (styles, { isFocused }) => ({
          ...styles,
          backgroundColor: isFocused ? theme.backgroundColor : null,
          color: isFocused ? '#4ecdc4' : '#fff',
          cursor: 'pointer',
        }),
      }}
    />
  </div>
</div>

  );
};

export default Footer;
