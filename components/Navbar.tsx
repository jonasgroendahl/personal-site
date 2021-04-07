import { AppBar, Box, Button, IconButton, Toolbar } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <Toolbar>
        <Button sx={{ textTransform: "none" }} href="#projects">
          Projects
        </Button>
        <Button sx={{ textTransform: "none" }} href="#updates">
          Updates
        </Button>
        <Button sx={{ textTransform: "none" }} href="#about">
          About me
        </Button>
        <Box ml="auto">
          <IconButton
            onClick={() => window.open("https://github.com/jonasgroendahl")}
          >
            <GitHub />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/jonas-groendahl/")
            }
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
