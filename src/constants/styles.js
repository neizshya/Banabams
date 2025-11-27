// Brand colors
export const COLORS = {
  primary: "#FEBF00",
  primaryLight: "#FED33F",
  primaryLighter: "#FEED98",
  cream: "#FEF7CB",
  brown: "#773B30",
  brownRgba: "rgba(119, 59, 48, 1)",
  white: "#FFFFFF",
  gray: "#ccc",
};

// Common modal styles
export const MODAL_STYLES = {
  overlay: {
    zIndex: 9999999,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  content: {
    zIndex: 1000,
    boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
    width: "30vw",
    height: "28vw",
    top: "25%",
    left: "35%",
  },
};

// Common button styles
export const BUTTON_STYLES = {
  primary: {
    backgroundColor: COLORS.primary,
    border: `2px solid ${COLORS.brownRgba}`,
  },
  warning: {
    backgroundColor: COLORS.primary,
    border: `1.5px solid brown`,
  },
};
