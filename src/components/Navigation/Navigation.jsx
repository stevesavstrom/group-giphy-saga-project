import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (destination) => {
    setAnchorEl(null);
    history.push(destination);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        color="secondary"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Navigation Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("/")}>Search</MenuItem>
        <MenuItem onClick={() => handleClose("/favorites")}>
          Favorite
        </MenuItem>
      </Menu>
    </div>
  );
}
