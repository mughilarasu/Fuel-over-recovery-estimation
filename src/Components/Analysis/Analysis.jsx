import * as React from "react";
import Box from "@mui/material/Box";
import Estimation from "./Estimation";

export default function Analysis({
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
