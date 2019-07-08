import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)"
  },
  scrollViewStyles: {
    flex: 1,
    width,
    height: width
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    height: "75%",
    width
  },
  imageStyles: {
    width: "80%",
    height: "50%"
  },
  titleStyles: {
    fontSize: 18,
    fontFamily: "FiraSans-SemiBold"
  },
  descriptionStyles: {
    fontSize: 14,
    fontFamily: "FiraSans-Regular",
    marginTop: 2
  },
  footerContainer: {
    height: "10%",
    flexDirection: "row",
    width,
    justifyContent: "space-between"
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  paginationBtnStyles: {
    height: 10,
    width: 10,
    margin: 6,
    backgroundColor: "rgb(52,168,83)",
    borderRadius: 6,
    opacity: 0.2
  },
  active: {
    opacity: 0.8
  },
  skipBtnText: {
    color: "rgb(0,58,238)",
    fontFamily: "FiraSans-Regular",
    fontSize: 16,
    marginRight: "4%"
  }
});
