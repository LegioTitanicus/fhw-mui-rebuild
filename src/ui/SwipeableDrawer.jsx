import React from "react";

const SwipeableDrawer = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {props.pages.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return <div></div>;
};

export default SwipeableDrawer;
