import { useEffect, useState, FC } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Fellow from "./Fellow";

interface IFellow {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    btn: {
      margin: "40px 0",
      fontFamily: "Della Respira, sans-serif",
      backgroundColor: "orange",
      color: "#000",
      transition: "opacity 0.4s ease",
      "&:hover": {
        backgroundColor: "orange",
        opacity: 0.7,
      },
    },
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
  })
);

const List: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [fellows, setFellows]: Array<any> = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isBottom, setIsBottom] = useState<boolean>(false);

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`
        );
        setIsBottom(false);
        setFellows([...fellows, ...response.data.results]);
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom && page !== 9) {
      handleLoadMore();
    }
  }, [isBottom]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={classes.root}>
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
          inputProps={{ "aria-label": "search" }}
        />
      </div>

      {fellows.map((fellow: IFellow, idx: number) => (
        <Fellow key={fellow.name} fellow={fellow} idx={idx} />
      ))}
      {isLoading && <CircularProgress color="secondary" />}
    </div>
  );
};

export default List;
