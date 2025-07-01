import { StyleSheet, Dimensions, Platform } from "react-native";
import { fontSize, scalableheight } from "../../Utilities/ResponsiveSheet";



export default StyleSheet.create({
  main: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    //  marginVertical: scalableheight.five,
  },
  buttontext: {
    fontSize: fontSize.fifteen,
    // fontFamily: FontFamily.Bold,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: scalableheight.seven,
    borderRadius: fontSize.borderradiuslarge,
    marginTop: "1%",
    marginBottom: "1%",
    backgroundColor: '#c26e73'
  },
  
  animagetionstyle: {
    height: "20%",
    width: "90%",
    borderRadius: scalableheight.onepointfive,
    position: 'absolute',
    bottom: scalableheight.fifteen
  },
  innerview6: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: fontSize.borderradiusmedium,
    // top: scalableheight.five,
  },
  text4: {
    color: "white",
    fontSize: fontSize.twentyeight,
    fontWeight: 'bold',
    textAlign: "left",
  },
  text5: {
    color: "white",
    fontSize: fontSize.fifteen,
    fontWeight: 'heavy',
    // fontFamily: FontFamily.SemiBold,
    textAlign: "left",
  },

  BackgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //    backgroundColor: "#9EBFC4",
    height: "100%",
  },

  dot: {
    height: scalableheight.onepointfive,
    width: scalableheight.onepointfive,
    borderRadius: scalableheight.one,
    marginLeft: scalableheight.pointfive,
    marginRight: scalableheight.pointfive,
    bottom: scalableheight.five,
  },
});
