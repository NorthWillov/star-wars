import { useState, useEffect } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import InputBase from "@material-ui/core/InputBase";
import Fellow from "./Fellow";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import { debounce } from "../debounce";

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
    noresults: {
      fontSize: "25px",
      padding: "20px 0",
    },
  })
);

const Search = (props: any) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fellows, setFellows]: Array<any> = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (inputVal.length > 1) {
      const getData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `https://swapi.dev/api/people/?search=${inputVal}`
          );
          setFellows(response.data.results);
          console.log("Debounced");
          setIsLoading(false);
        } catch (err) {
          throw new Error(err);
        }
      };
      getData();
    } else if (inputVal.length <= 1) {
      setFellows([]);
    }
  }, [inputVal]);

  const handleChange = (e: any) => {
    setInputVal(e.target.value);
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
          onChange={debounce(handleChange, 500)}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      {fellows.map((fellow: IFellow, idx: number) => (
        <Fellow border={"blue"} key={fellow.name} fellow={fellow} idx={idx} />
      ))}
      {inputVal.length > 1 && fellows.length === 0 && !isLoading ? (
        <div className={classes.noresults}>No Results</div>
      ) : null}
      <Divider className={classes.divider} />
      {isLoading && <CircularProgress color="primary" />}
    </>
  );
};

export default Search;
