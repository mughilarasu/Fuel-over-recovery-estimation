import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { CommonStylesFunction } from "../../styles.js";

export default function Estimation({
  fieldValues,
  setFieldValues,
  textFieldsOnChange,
  calculatedValues
}) {
  const commonStyles = CommonStylesFunction();

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
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={[commonStyles.estimationTypographStyle]}
        >
          Gallons Per Hour :{" "}
          <b>{calculatedValues.calculateGallonsPerHourValue.toFixed(2)}</b>
        </Typography>
        <TextField
          id="base_price_per_hour"
          label="Base Price Per Hour ($)"
          variant="outlined"
          value={fieldValues.base_price_per_hour}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={[commonStyles.estimationHeaderStyle]}
      >
        Actuals
      </Typography>

      <Box
        component="form"
        sx={[commonStyles.textFieldStyle]}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="hours"
          label="Hours"
          variant="outlined"
          value={fieldValues.hours}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={[commonStyles.estimationTypographStyle]}
        >
          Gallons : <b>{calculatedValues.calculateGallonsValue.toFixed(0)}</b>
        </Typography>
        <TextField
          id="cost_per_gallon"
          label="Cost Per Gallon ($)"
          variant="outlined"
          value={fieldValues.cost_per_gallon}
          onChange={textFieldsOnChange}
          type="number"
          inputProps={{ onWheel: (e) => e.target.blur() }}
        />
        <TableContainer sx={{ m: 1 }}>
          <Table
            sx={[commonStyles.estimationTableWidthStyle]}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Rate Adjustment</TableCell>
                <TableCell align="center">Actual</TableCell>
                <TableCell align="center" width="200">
                  Implied
                </TableCell>
                <TableCell align="center" width="200">
                  Over-Recovery % of Adjustment
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    component="form"
                    sx={[commonStyles.textFieldStyle]}
                    noValidate
                    autoComplete="off"
                  >
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={[commonStyles.estimationTypographStyle]}
                    >
                      Zero-Intercept Cost Per Gallon ($)
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={[commonStyles.estimationTypographStyle]}
                    >
                      Zero-Intercept Ratio (%)
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      sx={[commonStyles.estimationTypographStyle]}
                    >
                      Zero-Intercept Dollars Per Hour ($)
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="form"
                    sx={[commonStyles.textFieldStyle]}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="zero_intercept_cost_per_gallon"
                      label=""
                      variant="outlined"
                      value={fieldValues.zero_intercept_cost_per_gallon}
                      onChange={textFieldsOnChange}
                      type="number"
                      inputProps={{ onWheel: (e) => e.target.blur() }}
                    />
                    <TextField
                      id="zero_intercept_ratio"
                      label=""
                      variant="outlined"
                      value={
                        fieldValues.zero_intercept_ratio ||
                        calculatedValues.calculateZeroInterceptRatioValue.toFixed(
                          2
                        )
                      }
                      onChange={textFieldsOnChange}
                      type="number"
                      inputProps={{ onWheel: (e) => e.target.blur() }}
                    />
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={[commonStyles.estimationTypographStyle]}
                    >
                      <b>
                        {calculatedValues.calculateZeroInterceptDollarsPerHourValue.toFixed(
                          2
                        )}
                      </b>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center" width="200">
                  {" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={[commonStyles.estimationTypograph1Style]}
                  >
                    <b>{calculatedValues.calculateImpliedValue.toFixed(2)} %</b>
                  </Typography>
                </TableCell>
                <TableCell align="center" width="200">
                  {" "}
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={[commonStyles.estimationTypograph1Style]}
                  >
                    <b>
                      {isFinite(
                        calculatedValues.calculateoverRecoveryPercentageOfAdjustmentValue
                      )
                        ? calculatedValues.calculateoverRecoveryPercentageOfAdjustmentValue.toFixed(
                            2
                          )
                        : 0}{" "}
                      %
                    </b>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>$</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateBaseRevenueValue.toFixed(0)}
                    </b>
                  }
                  secondary="Base Revenue"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>%</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateAdjustmentPercentageValue.toFixed(
                        2
                      )}
                    </b>
                  }
                  secondary="Adjustment %"
                />
              </ListItem>
            </List>
          </Grid>{" "}
          <Grid item xs={6} sm={6} md={3}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>$</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateAdjustmentValue.toFixed(0)}
                    </b>
                  }
                  secondary="Adjustment"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>$</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateTotalRevenueValue.toFixed(0)}
                    </b>
                  }
                  secondary="Total Revenue"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>$</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateCostChangeValue.toFixed(0)}
                    </b>
                  }
                  secondary="Cost Change"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>$</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateOverRecoveryValue.toFixed(0)}
                    </b>
                  }
                  secondary="Over-Recovery"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <List sx={[commonStyles.estimationListStyle]} component={Paper}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>%</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <b>
                      {calculatedValues.calculateOverRecoveryPercentageValue.toFixed(
                        2
                      )}
                    </b>
                  }
                  secondary="Over-Recovery % of Revenue"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
