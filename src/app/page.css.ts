import { style } from "@vanilla-extract/css";

export const contentContainer = style({
  width: "70%",

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});

export const mainContainer = style({
  display: "flex",
  justifyContent: "center",
  margin: "80px 0",

  "@media": {
    "(max-width: 1024px)": {
      margin: "40px 0",
    },
  },
});

export const sections = style({
  width: "50%",

  "@media": {
    "(max-width: 1024px)": {
      width: "100%",
    },
  },
});
