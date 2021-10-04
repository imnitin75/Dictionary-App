import {
  createMuiTheme,
  TextField,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import categories from "../../data/category";
import "./Header.css";

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange=(language)=>{
         setCategory(language);
         setWord("");
  }
  return (
    <div className="header">
      <span className="title">{word ? word : "word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            id="standard-basic"
            label="standard"
            value={word}
            onChange={(e)=>setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
             label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
