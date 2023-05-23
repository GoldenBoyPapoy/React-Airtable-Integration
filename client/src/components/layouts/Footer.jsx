import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div id="aboutUS">
      <AppBar position="static">
        <Typography
          variant="h6"
          noWrap
          sx={{
            m: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontSize: 16,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          © 2023 Owesome. All rights reserved.
        </Typography>
      </AppBar>
    </div>
  );
};

export default Footer;
