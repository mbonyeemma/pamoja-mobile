import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(240, 240, 240)",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "30%",
    justifyContent: "center",
    paddingTop: "5%"
  },
  signInActive: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // color: 'rgb(0, 58, 238)'
  },
  signInInactive: {
    backgroundColor: "rgb(240, 240, 240)",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10
  },
  registerActive: {
    backgroundColor: "white",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  registerInactive: {
    backgroundColor: "rgb(240, 240, 240)",
    borderBottomLeftRadius: 10,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: "100%",
    height: "8%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgb(240,240,240)"
  },
  registercontainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column"
    // height: "100%",
    // paddingTop: "3%"
  },
  signIncontainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    // height: '100%',
    // paddingTop: 35,
    borderWidth: 2,
    borderColor: "yellow"
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "900",
    color: "rgba(34, 50, 176, 0.87)",
    marginLeft: "5%",
    marginTop: 30
  },
  registerTextcontainer: {
    display: "flex",
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14
  },
  registerText: {
    fontSize: 15,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 50,
    backgroundColor: "rgb(34, 50, 176)",
    color: "white"
  },
  cameraIconLowRes: {
    padding: 5,
    backgroundColor: "blue",
    position: "absolute",
    borderRadius: 100,
    bottom: 0,
    right: 20
  },
  cameraIconHighRes: {
    padding: 10,
    backgroundColor: "blue",
    position: "absolute",
    borderRadius: 100,
    bottom: -5,
    right: 12
  },
  termsNConsText: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(0, 58, 238)",
    color: "rgb(0, 58, 238)",
    fontSize: 14
  },
  termsNConsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  signInTextContainer: {
    width: "50%",
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 30,
    // marginTop: 15,
    backgroundColor: "rgb(34, 50, 176)",
    shadowColor: "#eee",
    shadowOffset: {
      height: 5,
      width: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 50
  },
  forgotPwdTextContainer: {
    width: "60%",
    marginTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(0, 58, 238)",
    display: "flex",
    alignSelf: "center"
  }
});
