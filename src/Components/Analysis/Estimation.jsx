import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Graph from "./Graph";
import { CommonStylesFunction } from "../../styles.js";
import {
  graph1,
  graph2,
  graph3,
  graph4,
  graph5,
  graph6
} from "./plotFunctions";
export default function Estimation({
  fieldValues,
  //setFieldValues,
  textFieldsOnChange,
  calculatedValues
}) {
  const commonStyles = CommonStylesFunction();

  const [renderPlotAgain, setRenderPlotAgain] = React.useState(false);

  return (
    <Box>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={[commonStyles.estimationHeaderStyle]}
      >
        Trucking Assumptions
      </Typography>

      <Box
        component="form"
        sx={[commonStyles.textFieldStyle]}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="miles_per_hour"
          label="Miles Per Hour"
          variant="outlined"
          value={fieldValues.miles_per_hour}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TextField
          id="miles_per_gallon"
          label="Miles Per Gallon"
          variant="outlined"
          value={fieldValues.miles_per_gallon}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TextField
          type="number"
          label="Base Price Per Unit"
          id="base_price_per_unit"
          value={fieldValues.base_price_per_unit}
          onChange={textFieldsOnChange}
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TextField
          id="base_price_per_hour"
          label="Base Price Per Hour ($)"
          variant="outlined"
          value={fieldValues.base_price_per_hour}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />

        <TextField
          id="hours"
          label="Hours"
          variant="outlined"
          value={fieldValues.hours}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TextField
          id="cost_per_gallon"
          label="Cost Per Gallon ($)"
          variant="outlined"
          value={fieldValues.cost_per_gallon}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TextField
          id="zero_intercept_cost_per_gallon"
          label="Zero-Intercept Cost Per Gallon ($)"
          variant="outlined"
          value={fieldValues.zero_intercept_cost_per_gallon}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TextField
          id="zero_intercept_ratio"
          label="Zero-Intercept Ratio (%)"
          variant="outlined"
          value={
            fieldValues.zero_intercept_ratio ||
            calculatedValues.calculateZeroInterceptRatioValue.toFixed(2)
          }
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Graph
              plot={() => graph1(fieldValues, setRenderPlotAgain)}
              dependencyArray={[
                fieldValues.miles_per_hour,
                fieldValues.miles_per_gallon,
                fieldValues.zero_intercept_ratio,
                renderPlotAgain
              ]}
              id="container1"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Graph
              plot={() => graph2(fieldValues, setRenderPlotAgain)}
              dependencyArray={[
                fieldValues.miles_per_hour,
                fieldValues.miles_per_gallon,
                fieldValues.gallons_per_hour,
                renderPlotAgain
              ]}
              id="container2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Graph
              plot={() => graph3(fieldValues, setRenderPlotAgain)}
              dependencyArray={[
                fieldValues.zero_intercept_dollars_per_hour,
                fieldValues.gallons_per_hour,
                renderPlotAgain
              ]}
              id="container3"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Graph
              plot={() => graph4(fieldValues, setRenderPlotAgain)}
              dependencyArray={[fieldValues.gallons, renderPlotAgain]}
              id="container4"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Graph
              plot={() => graph5(fieldValues, setRenderPlotAgain)}
              dependencyArray={[
                fieldValues.base_revenue,
                fieldValues.adjustment,
                fieldValues.total_revenue,
                fieldValues.cost_change,
                fieldValues.over_recovery,
                renderPlotAgain
              ]}
              id="container5"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Graph
              plot={() => graph6(fieldValues, setRenderPlotAgain)}
              dependencyArray={[
                fieldValues.adjustment_percentage,
                fieldValues.over_recovery_percentage_of_adjustment,
                fieldValues.implied,
                fieldValues.over_recovery_percentage,
                renderPlotAgain
              ]}
              id="container6"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
