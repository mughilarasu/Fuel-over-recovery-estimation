import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "20px 0px",
  height: "90vh",
  overflow: "auto"
}));

export const CommonStylesFunction = () => {
  const theme = useTheme();

  return {
    textFieldStyle: {
      "& > :not(style)": { m: 1, width: "98%" }
    },
    graphDialogContentBoxStyle: {
      display: "flex",
      justifyContent: "space-between"
    },
    graphDialogTitleStyle: {
      fontWeight: 600
    },
    graphDialogCloseIconStyle: {
      m: -1
    },
    graphDialogContentBox1Style: {
      m: 2
    },
    graphDialogContentBox2Style: {
      textAlign: "center",
      ml: 1,
      mr: 1
    },
    graphButtonStyle: {
      m: 1
    },
    estimationHeaderStyle: {
      textAlign: "left",
      color: "#000",
      fontWeight: "bold",
      margin: "0px 20px"
    },
    estimationTypographStyle: {
      textAlign: "left",
      padding: "8px 0px",
      color: "#000"
    },
    estimationTypograph1Style: {
      padding: "8px 0px",
      color: "#000"
    },
    estimationTableWidthStyle: {
      minWidth: 650
    },
    estimationListStyle: {
      bgcolor: "background.paper"
    }
  };
};
