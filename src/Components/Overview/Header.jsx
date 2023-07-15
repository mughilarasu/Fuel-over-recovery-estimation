import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Header({
  tripSelected,
  //setTripSelected,
  selectedMenu,
  setSelectedMenu,
  resetAll
}) {
  const HeaderButtonMenuSelected = (value) => {
    return {
      background: selectedMenu === value ? "white" : null,
      color: selectedMenu === value ? "black" : "white",
      margin: "0px 2px"
    };
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={resetAll}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {tripSelected.name} ({tripSelected.month})
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Over-Recovery Estimation
          </Typography>
          <Button
            sx={HeaderButtonMenuSelected("analysis")}
            onClick={() => setSelectedMenu("analysis")}
          >
            Analysis
          </Button>
          <Button
            sx={HeaderButtonMenuSelected("calculator")}
            onClick={() => setSelectedMenu("calculator")}
          >
            Calculator
          </Button>
          <Button
            sx={HeaderButtonMenuSelected("Formula")}
            onClick={() => setSelectedMenu("Formula")}
          >
            Formula
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
