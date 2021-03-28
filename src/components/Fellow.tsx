import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontFamily: "Della Respira, sans-serif",
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      fontFamily: "Della Respira, sans-serif",
      color: theme.palette.text.secondary,
    },
    desc: {
      fontFamily: "Della Respira, sans-serif",
    },
    accordion: {
      background: "rgba(125,122,115,0.3)",
      borderRadius: "0.3rem",
      padding: "10px",
      margin: "10px 0",
      color: "white",
    },
  })
);

function Fellow(props: any) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [moviesTitles, setMoviesTitles] = useState<string[]>([]);

  const { fellow, idx, border } = props;
  const classes = useStyles();

  useEffect(() => {
    const getMovie = async () => {
      try {
        let movies: string[] = [];
        fellow.films.map(async (movieUri: string) => {
          const response = await axios.get(movieUri);
          movies.push(response.data.title);
        });
        setMoviesTitles(movies);
      } catch (err) {
        throw new Error(err);
      }
    };
    getMovie();
  }, []);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      style={border === "blue" ? { border: "1px solid #0190de" } : {}}
      className={classes.accordion}
      expanded={expanded === `panel${idx}`}
      onChange={handleChange(`panel${idx}`)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${idx}bh-content`}
        id={`panel${idx}bh-header`}
      >
        <Typography className={classes.heading}>{fellow.name}</Typography>
        <Typography className={classes.secondaryHeading}>
          Birth Year: {fellow.birth_year}, Gender: {fellow.gender}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.desc}>
          Height: {fellow.height}, Mass: {fellow.mass}, Movies:{" "}
          {moviesTitles.map((movie: string) => {
            return movie === moviesTitles[moviesTitles.length - 1] ? (
              <span key={uuidv4()}>{movie}</span>
            ) : (
              <span key={uuidv4()}>{movie}, </span>
            );
          })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Fellow;
