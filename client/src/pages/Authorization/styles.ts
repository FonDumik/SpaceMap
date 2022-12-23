import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  authContainer: {
    display: "flex",
    overflow: "hidden",
  },
  authTypeControlWrapper: {
    width: "40%",
    display: "flex",
    overflow: "hidden",
    textAlign: "center",
  },
  centeredBlock: {
    zIndex: 1,
    margin: "auto",
  },
  authFormWrapper: {
    width: "60%",
    display: "flex",
    overflow: "hidden",
  },
  authCenteredBlock: {
    backgroundColor: "#ffffff9e",
    borderRadius: 10,
    padding: 20,
  },

  //parallax
  parallax: {
    width: "40%",
    display: "flex",
    flex: "0 0 auto",
    overflow: "hidden",
    textAlign: "center",
    justifyContent: "center",
  },
  bgParallaxChild: {
    backgroundImage: "url(images/bgAuth.png)",
    backgroundPositionY: "50%",
    transform: "scale(1.2)",
    position: "absolute",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    width: "100%",
    height: "100%",
    display: "flex",
    backfaceVisibility: "hidden",
  },

  //form
  formFields: {
    display: "flex",
    flexDirection: "column",
  },

  signWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 auto",
  },
}));
