import * as React from "react";
import Trips from "../Trips/Trips";
import Calculator from "../Calculator/Calculator";
import Analysis from "../Analysis/Analysis";
import Formula from "./Formula";
import Header from "./Header";
import { Box } from "@mui/material";

export default function Overview() {
  const [tripSelected, setTripSelected] = React.useState({});
  const [selectedMenu, setSelectedMenu] = React.useState("analysis");
  const [fieldValues, setFieldValues] = React.useState({
    miles_per_hour: "",
    miles_per_gallon: "",
    gallons_per_hour: "",
    base_price_per_hour: "",
    zero_intercept_cost_per_gallon: "",
    zero_intercept_ratio: "",
    implied: "",
    over_recovery_percentage_of_adjustment: "",
    zero_intercept_dollars_per_hour: "",
    hours: "",
    gallons: "",
    cost_per_gallon: "",
    base_revenue: "",
    adjustment_percentage: "",
    adjustment: "",
    total_revenue: "",
    cost_change: "",
    over_recovery: "",
    over_recovery_percentage: "",
    base_price_per_unit: 3.65
  });

  const textFieldsOnChange = (e) => {
    setFieldValues((fieldValuesState) => ({
      ...fieldValuesState,
      [e.target.id]: e.target.value
    }));
  };
  // this is the function to calculate the Gallons per hour
  const calculateGallonsPerHour = () => {
    let result = 0;
    if (fieldValues.miles_per_hour && fieldValues.miles_per_gallon) {
      result =
        Number(fieldValues.miles_per_hour) /
        Number(fieldValues.miles_per_gallon);
      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        gallons_per_hour: result
      }));
    }
    return result;
  };
  const calculateGallonsPerHourValue = React.useMemo(
    () => calculateGallonsPerHour(),
    [fieldValues.miles_per_hour, fieldValues.miles_per_gallon]
  );

  // this is the function to calculate the ZeroIntercept dollars per hour
  const calculateZeroInterceptDollarsPerHour = () => {
    let result = 0;
    if (
      fieldValues.zero_intercept_cost_per_gallon &&
      fieldValues.gallons_per_hour
    ) {
      result =
        Number(fieldValues.zero_intercept_cost_per_gallon) *
        Number(fieldValues.gallons_per_hour);
      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        zero_intercept_dollars_per_hour: result
      }));
    }
    return result;
  };
  const calculateZeroInterceptDollarsPerHourValue = React.useMemo(
    () => calculateZeroInterceptDollarsPerHour(),
    [fieldValues.zero_intercept_cost_per_gallon, fieldValues.gallons_per_hour]
  );

  // this is the function to calculate the ZeroIntercept Ratio per hour
  const calculateZeroInterceptRatio = () => {
    let result = 0;
    if (
      fieldValues.miles_per_hour &&
      fieldValues.miles_per_gallon &&
      fieldValues.base_price_per_unit &&
      fieldValues.cost_per_gallon
    ) {
      result =
        (Number(fieldValues.base_price_per_unit) /
          ((Number(fieldValues.miles_per_hour) /
            Number(fieldValues.miles_per_gallon)) *
            Number(fieldValues.cost_per_gallon))) *
        100;
      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        zero_intercept_ratio: result.toFixed(2)
      }));
    }
    return result;
  };
  const calculateZeroInterceptRatioValue = React.useMemo(
    () => calculateZeroInterceptRatio(),
    [
      fieldValues.miles_per_hour,
      fieldValues.miles_per_gallon,
      fieldValues.base_price_per_unit,
      fieldValues.cost_per_gallon
    ]
  );

  // this is the function to calculate the Implied
  const calculateImplied = () => {
    let result = 0;
    if (
      fieldValues.zero_intercept_cost_per_gallon &&
      fieldValues.gallons_per_hour
    ) {
      result =
        (Number(fieldValues.zero_intercept_dollars_per_hour) /
          Number(fieldValues.base_price_per_hour)) *
        100;

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        implied: result
      }));
    }
    return result;
  };
  const calculateImpliedValue = React.useMemo(() => calculateImplied(), [
    fieldValues.zero_intercept_dollars_per_hour,
    fieldValues.base_price_per_hour
  ]);

  // this is the function to calculate the Over recovery percentage of adjustments
  const calculateoverRecoveryPercentageOfAdjustment = () => {
    let result = 0;
    if (fieldValues.zero_intercept_cost_per_gallon && fieldValues.implied) {
      result =
        (1 -
          Number(fieldValues.implied) /
            Number(fieldValues.zero_intercept_ratio)) *
        100;

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        over_recovery_percentage_of_adjustment: result
      }));
    }
    return result;
  };
  const calculateoverRecoveryPercentageOfAdjustmentValue = React.useMemo(
    () => calculateoverRecoveryPercentageOfAdjustment(),
    [fieldValues.implied, fieldValues.zero_intercept_ratio]
  );

  // this is the function to calculate the Gallons
  const calculateGallons = () => {
    let result = 0;
    if (fieldValues.hours && fieldValues.gallons_per_hour) {
      result = Number(fieldValues.hours) * Number(fieldValues.gallons_per_hour);

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        gallons: result
      }));
    }
    return result;
  };
  const calculateGallonsValue = React.useMemo(() => calculateGallons(), [
    fieldValues.hours,
    fieldValues.gallons_per_hour
  ]);

  // this is the function to calculate the Base revenue
  const calculateBaseRevenue = () => {
    let result = 0;
    if (fieldValues.hours && fieldValues.base_price_per_hour) {
      result =
        Number(fieldValues.hours) * Number(fieldValues.base_price_per_hour);

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        base_revenue: result
      }));
    }
    return result;
  };
  const calculateBaseRevenueValue = React.useMemo(
    () => calculateBaseRevenue(),
    [fieldValues.hours, fieldValues.base_price_per_hour]
  );

  // this is the function to calculate the Adjustment percentage
  const calculateAdjustmentPercentage = () => {
    let result = 0;
    if (
      fieldValues.cost_per_gallon &&
      fieldValues.zero_intercept_cost_per_gallon &&
      fieldValues.zero_intercept_ratio
    ) {
      result =
        (Number(fieldValues.cost_per_gallon) /
          Number(fieldValues.zero_intercept_cost_per_gallon) -
          1) *
        Number(fieldValues.zero_intercept_ratio);

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        adjustment_percentage:
          ((Number(fieldValues.cost_per_gallon) /
            Number(fieldValues.zero_intercept_cost_per_gallon) -
            1) *
            Number(fieldValues.zero_intercept_ratio)) /
          100
      }));
    }
    return result;
  };
  const calculateAdjustmentPercentageValue = React.useMemo(
    () => calculateAdjustmentPercentage(),
    [
      fieldValues.cost_per_gallon,
      fieldValues.zero_intercept_cost_per_gallon,
      fieldValues.zero_intercept_ratio
    ]
  );

  // this is the function to calculate the Adjustment
  const calculateAdjustment = () => {
    let result = 0;
    if (fieldValues.base_revenue && fieldValues.adjustment_percentage) {
      result =
        Number(fieldValues.base_revenue) *
        Number(fieldValues.adjustment_percentage);

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        adjustment: result
      }));
    }
    return result;
  };
  const calculateAdjustmentValue = React.useMemo(() => calculateAdjustment(), [
    fieldValues.base_revenue,
    fieldValues.adjustment_percentage
  ]);

  // this is the function to calculate the Total Revenue
  const calculateTotalRevenue = () => {
    let result = 0;
    if (fieldValues.base_revenue && fieldValues.adjustment) {
      result =
        Number(fieldValues.adjustment) + Number(fieldValues.base_revenue);

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        total_revenue: result
      }));
    }
    return result;
  };
  const calculateTotalRevenueValue = React.useMemo(
    () => calculateTotalRevenue(),
    [fieldValues.base_revenue, fieldValues.adjustment]
  );

  // this is the function to calculate the Cost change
  const calculateCostChange = () => {
    let result = 0;
    if (
      fieldValues.gallons &&
      fieldValues.cost_per_gallon &&
      fieldValues.zero_intercept_cost_per_gallon
    ) {
      result =
        Number(fieldValues.gallons) *
        (Number(fieldValues.cost_per_gallon) -
          Number(fieldValues.zero_intercept_cost_per_gallon));

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        cost_change: result
      }));
    }
    return result;
  };
  const calculateCostChangeValue = React.useMemo(() => calculateCostChange(), [
    fieldValues.gallons,
    fieldValues.cost_per_gallon,
    fieldValues.zero_intercept_cost_per_gallon
  ]);

  // this is the function to calculate the Over recovery
  const calculateOverRecovery = () => {
    let result = 0;
    if (fieldValues.adjustment && fieldValues.cost_change) {
      result = Number(fieldValues.adjustment) - Number(fieldValues.cost_change);

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        over_recovery: result
      }));
    }
    return result;
  };
  const calculateOverRecoveryValue = React.useMemo(
    () => calculateOverRecovery(),
    [fieldValues.adjustment, fieldValues.cost_change]
  );

  // this is the function to calculate the Over recovery percentage
  const calculateOverRecoveryPercentage = () => {
    let result = 0;
    if (fieldValues.over_recovery && fieldValues.total_revenue) {
      result =
        (Number(fieldValues.over_recovery) /
          Number(fieldValues.total_revenue)) *
        100;

      setFieldValues((fieldValuesState) => ({
        ...fieldValuesState,
        over_recovery_percentage: result
      }));
    }
    return result;
  };
  const calculateOverRecoveryPercentageValue = React.useMemo(
    () => calculateOverRecoveryPercentage(),
    [fieldValues.over_recovery, fieldValues.total_revenue]
  );

  const resetAll = () => {
    setTripSelected({});
    setSelectedMenu("analysis");
    setFieldValues({
      miles_per_hour: "",
      miles_per_gallon: "",
      gallons_per_hour: "",
      base_price_per_hour: "",
      zero_intercept_cost_per_gallon: "",
      zero_intercept_ratio: "",
      implied: "",
      over_recovery_percentage_of_adjustment: "",
      zero_intercept_dollars_per_hour: "",
      hours: "",
      gallons: "",
      cost_per_gallon: "",
      base_revenue: "",
      adjustment_percentage: "",
      adjustment: "",
      total_revenue: "",
      cost_change: "",
      over_recovery: "",
      over_recovery_percentage: "",
      base_price_per_unit: 3.65
    });
  };
  return Object.keys(tripSelected).length > 0 ? (
    <>
      <Header
        tripSelected={tripSelected}
        setTripSelected={setTripSelected}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        resetAll={resetAll}
      />
      <Box sx={{ marginTop: "5.5em" }}>
        {selectedMenu === "analysis" ? (
          <Analysis
            fieldValues={fieldValues}
            setFieldValues={setFieldValues}
            textFieldsOnChange={textFieldsOnChange}
            calculatedValues={{
              calculateGallonsPerHourValue,
              calculateZeroInterceptRatioValue,
              calculateZeroInterceptDollarsPerHourValue,
              calculateImpliedValue,
              calculateoverRecoveryPercentageOfAdjustmentValue,
              calculateGallonsValue,
              calculateBaseRevenueValue,
              calculateAdjustmentPercentageValue,
              calculateAdjustmentValue,
              calculateTotalRevenueValue,
              calculateCostChangeValue,
              calculateOverRecoveryValue,
              calculateOverRecoveryPercentageValue
            }}
          />
        ) : selectedMenu === "calculator" ? (
          <Calculator
            fieldValues={fieldValues}
            setFieldValues={setFieldValues}
            textFieldsOnChange={textFieldsOnChange}
            calculatedValues={{
              calculateGallonsPerHourValue,
              calculateZeroInterceptRatioValue,
              calculateZeroInterceptDollarsPerHourValue,
              calculateImpliedValue,
              calculateoverRecoveryPercentageOfAdjustmentValue,
              calculateGallonsValue,
              calculateBaseRevenueValue,
              calculateAdjustmentPercentageValue,
              calculateAdjustmentValue,
              calculateTotalRevenueValue,
              calculateCostChangeValue,
              calculateOverRecoveryValue,
              calculateOverRecoveryPercentageValue
            }}
          />
        ) : (
          <Formula />
        )}
      </Box>
    </>
  ) : (
    <Trips tripSelected={tripSelected} setTripSelected={setTripSelected} />
  );
}
