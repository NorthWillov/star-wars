import { useEffect, useState, FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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
  })
);

const List: FC = () => {
  const [page, setPage] = useState(1);
  const [fellows, setFellows]: Array<any> = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${page}`
        );
        await setFellows([...fellows, ...response.data.results]);
        console.log(response.data.results);
      } catch (err) {
        throw new Error(err);
      }
    };
    getData();
  }, [page]);

  const handleLoadMoreClick = (): void => {
    setPage(page + 1);
  };

  return (
    <div className={classes.root}>
      {fellows.map((fellow: IFellow, idx: number) => (
        <Fellow key={fellow.name} fellow={fellow} idx={idx} />
      ))}
      <button onClick={handleLoadMoreClick}>Load More</button>
    </div>
  );
};

export default List;
