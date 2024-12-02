const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  primary_burger: "#ff9f1b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginLine: "#f56a2c",
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  SM: "15px",
  P0: "16px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};
const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
};
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

const family = {
  stylish: `"Amatic SC", cursive`,
};

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  family,
  spacing,
};

{
  /* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link> */
}

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 300 to 800

// .open-sans-<uniquifier> {
//     font-family: "Open Sans", sans-serif;
//     font-optical-sizing: auto;
//     font-weight: <weight>;
//     font-style: normal;
//     font-variation-settings:
//       "wdth" 100;
//   }

// .amatic-sc-regular {
//     font-family: "Amatic SC", sans-serif;
//     font-weight: 400;
//     font-style: normal;
//   }

//   .amatic-sc-bold {
//     font-family: "Amatic SC", sans-serif;
//     font-weight: 700;
//     font-style: normal;
//   }
