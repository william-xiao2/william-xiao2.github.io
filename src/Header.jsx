/**
 * The header for the website.
 *
 * Heavily inspired in its initial iteration by
 * https://betterprogramming.pub/building-a-basic-header-with-materialui-and-react-js-d650f75b4b0a.
 *
 * @author william-xiao2
 */
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const headersData = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Interests",
    href: "#interests",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#F5FFE7",
  },
  logo: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  }
 }));

export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {webpageLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>);
    };

  const webpageLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      William Xiao
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "default",
            href: href,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}