import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CommonStylesFunction } from "../../styles.js";

export default function Formula() {
  const commonStyles = CommonStylesFunction();

  return (
    <Box sx={{ margin: "24px" }}>
      <Typography variant="body2">
        1) To calculate the Gallons per hour
        <br />
        <br />
        gallons_per_hour = miles_per_hour / miles_per_gallon
      </Typography>
      <br />
      <Typography variant="body2">
        2) To calculate the Zero-Intercept dollars per hour
        <br />
        <br />
        zero_intercept_dollars_per_hour = zero_intercept_cost_per_gallon *
        gallons_per_hour
      </Typography>
      <br />
      <Typography variant="body2">
        To calculate the Implied
        <br />
        <br />
        implied = (zero_intercept_dollars_per_hour / base_price_per_hour) * 100
      </Typography>
      <br />
      <Typography variant="body2">
        4) To calculate the Over recovery percentage of adjustment
        <br />
        <br />
        over_recovery_percentage_of_adjustment = (1-(implied /
        zero_intercept_ratio)) * 100
      </Typography>
      <br />
      <Typography variant="body2">
        {" "}
        5) To calculate the Gallons
        <br />
        <br />
        gallons = hours * gallons_per_hour
      </Typography>
      <br />
      <Typography variant="body2">
        {" "}
        6) To calculate the Base revenue
        <br />
        <br />
        base_revenue = hours * base_price_per_hour
      </Typography>
      <br />
      <Typography variant="body2">
        {" "}
        7) To calculate the Adjustment percentage
        <br />
        <br />
        adjustment_percentage = (((cost_per_gallon /
        zero_intercept_cost_per_gallon) - 1) * zero_intercept_ratio) / 100
      </Typography>
      <br />
      <Typography variant="body2">
        {" "}
        8) To calculate the Adjustment
        <br />
        <br />
        adjustment = base_revenue * adjustment_percentage
      </Typography>
      <br />
      <Typography variant="body2">
        {" "}
        9) To calculate the Total Revenue
        <br />
        <br />
        total_revenue = adjustment + base_revenue
      </Typography>
      <br />
      <Typography variant="body2">
        {" "}
        10) To calculate the Cost change
        <br />
        <br />
        cost_change = gallons * (cost_per_gallon -
        zero_intercept_cost_per_gallon)
      </Typography>
      <br />

      <Typography variant="body2">
        {" "}
        11) To calculate the Over recovery
        <br />
        <br />
        over_recovery = adjustment - cost_change
      </Typography>
      <br />

      <Typography variant="body2">
        {" "}
        12) To calculate the Over recovery percentage
        <br />
        <br />
        over_recovery_percentage = (over_recovery / total_revenue) * 100
      </Typography>
      <br />

      <Typography variant="body2">
        {" "}
        13) To calculate the Zero-Intercept Ratio
        <br />
        <br />
        zero_intercept_ratio = (base_price_per_unit/((miles_per_hour /
        miles_per_gallon) * cost_per_gallon)) * 100
      </Typography>
      <br />
    </Box>
  );
}
