import { style } from "@vanilla-extract/css";

export const main = style({
  alignItems: "center",
  color: "#666",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  padding: "20px 0",
  borderTop: "1px solid #6e58b1",
});

export const socials = style({
  display: "flex",
  justifyContent: "space-between",
  width: "20%",

  "@media": {
    "(max-width: 1024px)": {
      width: "50%",
    },
  },
});
