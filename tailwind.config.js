module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      orange: "#ea4255",
      white: "#fff",
      black: "#000",
      gray: "#333",
      lightGray: "#5A5959"
    },
    spacing: {
      0: "0",
      1: "8px",
      2: "20px",
      3: "40px",
      4: "80px",
    },
    lineHeight: {
      none: 1,
      tight: 1.15,
      normal: 1.4,
    },
    fontSize: {
      small: "12px",
      base: "18px",
      md: "30px",
      lg: "40px",
      xl: "48px",
    },
    fontFamily: {
      lulo: "Lulo Clean",
      merriweather: "Merriweather",
      avenir: "AvenirNextLTPro",
      baskerville: "BaskervilleMTStd-Bold",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
    },

    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        default: "0.8rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  variants: {
    margin: ["last"],
  },
  options: { important: true },
};
