import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const DirectionStack = () => {
  let token =
    "patwxGIW1IEy4obje.4698f2fae36a50dd8b00fb6335086193541405e1bf506bd86f8875db903e045d";
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appCkZvSU8PE6pKwN/tblsh9FVFPqqiUhHt",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  fetchCategories();
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">All Categories</Button>
        <Button variant="outlined">Item 2</Button>
        <Button variant="outlined">Item 3</Button>
      </Stack>
    </div>
  );
};

export default DirectionStack;
