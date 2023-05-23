import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Categories from "../components/categories";
import Dialog from "../components/dialog";

export default function BasicTabs() {
  const [tabValue, setTabValue] = React.useState(0);
  const [openTab, setOpenTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const confirmEmail = () => {
    if (!confirm) {
      setOpenDialog(true);
    } else {
      setOpenTab(1);
    }
  };
  const handleCloseDialog = () => {
    setTabValue(0);
    setOpenTab(0);
    setOpenDialog(false);
  };

  const handleSaveDialog = () => {
    setOpenTab(1);
    setConfirm(true);
    setOpenDialog(false);
  };

  const handleTabChange = (event, newValue) => {
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
            src="https://airtable.com/embed/shrYBakYy2ezQGGx7?viewControls=on"
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

// import { useState } from "react";
// import Dialog from "../widgets/dialog";

// const Home = () => {
//   const [openTab, setOpenTab] = useState(1);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [confirm, setConfirm] = useState(false);

//   const confirmEmail = () => {
//     setOpenTab(2);
//     if (!confirm) setOpenDialog(true);
//   };
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleSaveDialog = () => {
//     setConfirm(true);
//     setOpenDialog(false);
//   };
//   return (
//     <main className="w-9/12 m-auto">
//       {openDialog ? (
//         <Dialog
//           open={openDialog}
//           handleClose={handleCloseDialog}
//           handleSave={handleSaveDialog}
//         />
//       ) : (
//         <></>
//       )}
//       <div className="flex flex-wrap">
//         <div className="w-full">
//           <ul
//             className="w-1/2 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
//             role="tablist"
//           >
//             <li className="-mb-px mr-2 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold normal-case px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 1
//                     ? "text-white  bg-success"
//                     : "text-success bg-white")
//                 }
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setOpenTab(1);
//                 }}
//                 data-toggle="tab"
//                 href="#link1"
//                 role="tablist"
//               >
//                 <i className="fas fa-space-shuttle text-base mr-1"></i> Table
//               </a>
//             </li>
//             <li className="-mb-px mr-2 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold normal-case px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 2
//                     ? "text-white  bg-success"
//                     : "text-success bg-white")
//                 }
//                 onClick={(e) => {
//                   e.preventDefault();
//                   confirmEmail();
//                 }}
//                 data-toggle="tab"
//                 href="#link2"
//                 role="tablist"
//               >
//                 <i className="fas fa-cog text-base mr-1"></i> Chart
//               </a>
//             </li>
//             <li className="-mb-px mr-2 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold normal-case px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 3
//                     ? "text-white  bg-success"
//                     : "text-success bg-white")
//                 }
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setOpenTab(3);
//                 }}
//                 data-toggle="tab"
//                 href="#link3"
//                 role="tablist"
//               >
//                 <i className="fas fa-briefcase text-base mr-1"></i> Other
//               </a>
//             </li>
//           </ul>
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="px-4 py-5 flex-auto ">
//               <div className="tab-content tab-space">
//                 <div className={openTab === 1 ? "block" : "hidden"} id="link1">
//                   <iframe
//                     width="100%"
//                     height="700"
//                     src="https://airtable.com/embed/shrAJ4HMV4X0OgySc?viewControls=on"
//                   ></iframe>
//                 </div>
//                 <div
//                   className={openTab === 2 && confirm ? "block" : "hidden"}
//                   id="link2"
//                 >
//                   <iframe
//                     width="100%"
//                     height="700"
//                     src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRluXcoyZOl3YRgzY_FSdeyu1t1dPNjs39KQjxhCq7aP1V9QmlvJ9XdfpBR49dBT894gVXipjEAcazG/pubchart?oid=204936261&amp;format=interactive"
//                     style={{ height: "398px !important" }}
//                   ></iframe>
//                 </div>
//                 <div
//                   className={openTab === 3 ? "block" : "hidden"}
//                   id="link3"
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;
