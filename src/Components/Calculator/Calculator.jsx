import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Estimation from "./Estimation";
import { Item } from "../../styles.js";

export default function Calculator({
  fieldValues,
  setFieldValues,
  textFieldsOnChange,
  calculatedValues
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        //   padding: '8px',
        textAlign: "center",
        margin: "20px 0px"
        // height: "90vh",
        // overflow: "auto"
      }}
    >
      <Estimation
        fieldValues={fieldValues}
        setFieldValues={setFieldValues}
        textFieldsOnChange={textFieldsOnChange}
        calculatedValues={calculatedValues}
      />
    </Box>
  );
}
