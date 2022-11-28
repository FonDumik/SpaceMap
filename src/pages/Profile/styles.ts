import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  userProfileWrapper: {
    display: "flex",
    overflow: "hidden",
  },
  userLayout: {
    width: "50%",
    height: "calc(100vh - 64px)",
    position: "relative",
  },
  userInfoWrapper: {
    paddingTop: 170,
  },
  userPhotoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  userInfoBlock: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 15px",
    borderRadius: 20,
    width: "80%",
    height: 160,
    margin: "0 auto",
    boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.19)",
  },
  userInfoBlockTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  userRole: {
    padding: "0 10px",
    top: 20,
    right: 20,
    position: "absolute",
    borderRadius: 10,
    fontSize: 18,
    background: "#d4d4d4f0",
  },
}));
