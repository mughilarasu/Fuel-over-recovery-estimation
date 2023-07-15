import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import { CommonStylesFunction } from "../../styles.js";

export default function Graph({ plot, dependencyArray, id }) {
  // const commonStyles = CommonStylesFunction();

  React.useEffect(() => {
    plot();
  }, [dependencyArray]);

  return (
    <Box component={Paper}>
      <div id={id} style={{ margin: "10px" }} />
    </Box>
  );
}
