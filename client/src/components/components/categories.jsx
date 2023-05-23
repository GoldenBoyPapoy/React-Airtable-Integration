import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const DirectionStack = ({ category, setCategory, setSource }) => {
  const [categories, setCategories] = useState([]);
  const token =
    "patwxGIW1IEy4obje.4698f2fae36a50dd8b00fb6335086193541405e1bf506bd86f8875db903e045d";

  useEffect(() => {
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
        setCategories(data.records);
      } catch (error) {
        console.error(error);
      }
    };
    // This code will run after the first render
    fetchCategories();
  }, []);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          variant={category == -1 ? "contained" : "outlined"}
          onClick={() => {
            setCategory(-1);
            setSource("");
          }}
        >
          All Categories
        </Button>
        {categories.map((item, index) => {
          return (
            <Button
              key={index}
              variant={category == index ? "contained" : "outlined"}
              onClick={() => {
                setCategory(index);
                setSource(`?filter_Category=${item.fields.Name}`);
              }}
            >
              {item.fields.Name}
            </Button>
          );
        })}
      </Stack>
    </div>
  );
};

export default DirectionStack;
