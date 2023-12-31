import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  justifyContent: "space-between",
});

export const homeUrlContainer = style({
  alignItems: "center",
  display: "flex",
});

export const navContainer = style({
  "@media": {
    "(max-width: 414px)": {
      display: "none",
    },
  },
});
