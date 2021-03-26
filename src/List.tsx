import { useEffect, useState, FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
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
  })
);

const List: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [fellows, setFellows]: Array<any> = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`
        );
        setFellows([...fellows, ...response.data.results]);
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };
    getData();
  }, [page]);

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={classes.root}>
      {fellows.map((fellow: IFellow, idx: number) => (
        <Fellow key={fellow.name} fellow={fellow} idx={idx} />
      ))}
      {!isLoading ? (
        <Button
          className={classes.btn}
          onClick={handleLoadMoreClick}
          variant="contained"
          size="large"
          disabled={page === 9}
        >
          Load More
        </Button>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
};

export default List;
