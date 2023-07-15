import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { trips } from "../../utils";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import moment from "moment";

const marginTripsListSecondary = { margin: "4px 10px", width: 150 };
const months = moment.monthsShort();

export default function Trips({ tripSelected, setTripSelected }) {
  const [selectMonth, setSelectMonth] = React.useState(moment().format("MMM"));

  const handleChange = (event) => {
    setSelectMonth(event.target.value);
  };
  return (
    <>
      <List
        sx={{
          margin: "0px auto",
          width: "100%",
          maxWidth: 800,
          bgcolor: "background.paper"
        }}
      >
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ margin: "32px 0px" }}
        >
          Trips
        </Typography>
        <Box sx={{ minWidth: 120, paddingBottom: "32px" }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Filter by Month</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={selectMonth}
              label="Filter by Month"
              onChange={handleChange}
            >
              {months.map((d) => {
                return (
                  <MenuItem
                    value={d}
                    key={d}
                    disabled={d !== moment().format("MMM")}
                  >
                    {d}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        {trips.map((trip) => {
          return (
            <>
              <ListItem
                alignItems="flex-start"
                key={trip.id}
                component={Button}
                sx={{
                  "&:hover": {
                    background: "rgb(237 242 247 / 1)"
                  }
                }}
                onClick={() => setTripSelected(trip)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <LocalShippingIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      {trip.name} ({trip.month})
                    </>
                  }
                  secondary={
                    <React.Fragment>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={marginTripsListSecondary}
                        >
                          {trip.from}
                        </Typography>
                        <Box
                          sx={[
                            marginTripsListSecondary,
                            { marginTop: 0, marginBottom: 0 }
                          ]}
                        >
                          <CompareArrowsIcon />
                        </Box>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                          sx={marginTripsListSecondary}
                        >
                          {" "}
                          {trip.to}
                        </Typography>{" "}
                      </Box>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
}
