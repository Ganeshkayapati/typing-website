import Select from 'react-select';
import { themeOptions } from '../utils/themeOptions';
import { useTheme } from '../context/ThemeContext';

const Footer=()=>{
    
    const { theme,setTheme } = useTheme();
    const handleChange = (event) => {
        setTheme(event.value);
        localStorage.setItem('theme', JSON.stringify(event.value));
    }
    return(
        <div className="footer">
            <div className="links">
                Links
            </div>
            <div className="themeButton">
                 <Select
                    onChange={handleChange}
                    options={themeOptions}
                    menuPlacement='top'
                    defaultValue={{label: theme.label, value: theme}}
                    styles={
                        {control:styles => ({...styles, backgroundColor: theme.backgroundColor}),
                        menu:styles => ({...styles, backgroundColor: theme.backgroundColor,color: "#4ecdc4"}),
                        option: (styles, { isFocused }) => ({
                            ...styles,
                            backgroundColor: isFocused ? theme.backgroundColor : null,
                            color: isFocused ? "#4ecdc4" : "#fff",
                            cursor: 'pointer',
                        }),
                    }
                    }
                />
                
            </div>
        </div>
    )
}

export default Footer;