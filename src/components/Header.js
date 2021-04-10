import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "black",
  },
  headerTitle: {
    fontFamily: "Raleway",
    fontWeight: 700,
    letterSpacing: "0.5rem",
    color: "orange",
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Raleway",
    fontWeight: 1000,
    textTransform: "none",
    color: "#fff",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h4' className={classes.headerTitle}>
            SINDHURA.
          </Typography>

          <Tabs
            className={classes.tabsContainer}
            indicatorColor='primary'
            textColor='primary'
            // onChange={(event, newValue) => setValue(newValue)}
            // value={value}
            aria-label='disabled tabs example'
          >
            <Tab
              className={classes.tab}
              component={Link}
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              label='About'
              disableRipple
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='experience'
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
              label='Experience'
              disableRipple
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              label='Contact'
              disableRipple
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
