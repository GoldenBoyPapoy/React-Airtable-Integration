import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categories from "../components/categories";
import Dialog from "../components/dialog";

export default function Compare() {
  const [tabValue, setTabValue] = React.useState(0);
  const [openTab, setOpenTab] = useState(0);
  const [pastTab, setPastTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [category, setCategory] = useState(-1);
  const [uri, setUri] = useState("");

  const confirmEmail = () => {
    if (!confirm) {
      setOpenDialog(true);
    } else {
      setOpenTab(1);
    }
  };

  const handleCloseDialog = () => {
    setTabValue(pastTab);
    setOpenTab(0);
    setOpenDialog(false);
  };

  const handleSaveDialog = () => {
    setOpenTab(1);
    setConfirm(true);
    setOpenDialog(false);
  };

  const handleTabChange = (event, newValue) => {
    setPastTab(tabValue);
    setTabValue(newValue);
  };

  return (
    <div className="w-9/12 m-auto">
      {openDialog ? (
        <Dialog
          open={openDialog}
          handleClose={handleCloseDialog}
          handleSave={handleSaveDialog}
        />
      ) : (
        <></>
      )}
      <Box
        sx={{
          width: "100%",
          margin: 2,
        }}
      >
        <Categories
          sx={{
            width: "100%",
            margin: 2,
          }}
          category={category}
          setCategory={setCategory}
          setSource={setUri}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          margin: 2,
          border: 1,
          borderRadius: 2,
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            m: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          All Categories
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            m: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Item One"
              onClick={() => {
                setOpenTab(0);
              }}
            />
            <Tab
              label="Item Two"
              onClick={() => {
                confirmEmail();
              }}
            />
            <Tab
              label="Item Three"
              onClick={() => {
                setOpenTab(2);
              }}
            />
          </Tabs>
        </Box>
        <div className={openTab === 0 ? "block" : "hidden"} id="link1">
          <iframe
            width="100%"
            height="700"
            src={"https://airtable.com/embed/shrYBakYy2ezQGGx7" + uri}
          ></iframe>
        </div>
        <div
          className={openTab === 1 && confirm ? "block" : "hidden"}
          id="link2"
        >
          <iframe
            width="100%"
            height="700"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRluXcoyZOl3YRgzY_FSdeyu1t1dPNjs39KQjxhCq7aP1V9QmlvJ9XdfpBR49dBT894gVXipjEAcazG/pubchart?oid=204936261&amp;format=interactive"
            style={{ height: "398px !important" }}
          ></iframe>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link3">
          <iframe
            width="100%"
            height="700"
            src="https://airtable.com/embed/shrYBakYy2ezQGGx7?viewControls=on"
          ></iframe>
        </div>
      </Box>
    </div>
  );
}
