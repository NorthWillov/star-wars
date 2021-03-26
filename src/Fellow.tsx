import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

function Fellow(props: any) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const { fellow, idx } = props;
  const classes = useStyles();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
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
          {fellow.birth_year}, {fellow.gender}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Height: {fellow.height}, Mass: {fellow.mass},
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Fellow;
