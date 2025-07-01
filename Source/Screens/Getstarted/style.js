import { StyleSheet, Dimensions, Platform } from "react-native";
import { fontSize, scalableheight } from "../../Utilities/ResponsiveSheet";



export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    overflow: "hidden",

  },

  BackgroundImage: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFF1F3",
    height: "100%",
  },
  innercontainer: {
    paddingHorizontal: '1%',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: scalableheight.seven,
    borderRadius: fontSize.circle,
    backgroundColor: '#F05252',
    borderWidth: scalableheight.borderwidth,
    borderColor: '#F05252'
  }
});
