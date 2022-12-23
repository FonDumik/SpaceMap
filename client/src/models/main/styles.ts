import { makeStyles } from "@material-ui/core";

export const useDefaultStyles = makeStyles(() => ({
  centeredObject: {
    width: "calc(100vw)",
    height: "calc(100vh - 64px)",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
  },
  defaultSize: {
    width: "calc(100vw)",
    height: "calc(100vh - 64px)",
  },
  mainTitle: {
    width: "fit-content",
    margin: "50px auto !important",
  },

  //animation
  fadeIn: {},
}));
