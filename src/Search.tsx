import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import axios from "axios";
import InputBase from "@material-ui/core/InputBase";
import Fellow from "./Fellow";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";

interface IFellow {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      [theme.breakpoints.up("sm")]: {
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(2, 2, 2, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    divider: {
      marginTop: "30px",
    },
  })
);

const Search = (props: any) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fellows, setFellows]: Array<any> = useState([]);
  const classes = useStyles();

  const debounce = (func: any, delay = 1000) => {
    let timeoutId: any;
    return (...args: any[]) => {
      if (timeoutId) {
        clearInterval(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${inputVal}`
      );
      setFellows(response.data.results);
      setIsLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleChange = (e: any) => {
    setInputVal(e.target.value);
    getData();
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          fullWidth
          placeholder="Search character"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={inputVal}
          onChange={handleChange}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Divider className={classes.divider} />
      {fellows.map((fellow: IFellow, idx: number) => (
        <Fellow key={fellow.name} fellow={fellow} idx={idx} />
      ))}
    </>
  );
};

export default Search;
