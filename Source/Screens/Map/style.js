import { StyleSheet, Dimensions, Platform } from "react-native";
import { fontSize, scalableheight } from "../../Utilities/ResponsiveSheet";


// import { theme } from "../../Constanats/style";
// import { FontFamily } from "../../Constanats/fontFamily";

export default StyleSheet.create({

  mainContainer: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: '#000',
  },
  mapStyle: {
    height: "100%",
    width: "100%",
    borderRadius: fontSize.fifteen,
    position: "absolute",
    zIndex: 1000
  },
  LocationdesCard: {
    backgroundColor: "white",
    padding: scalableheight.one,
    borderRadius: fontSize.borderradiusmedium,
    flexDirection: "row",
    alignItems: "center",
    width: scalableheight.twenty, height: scalableheight.ten,


  },

  LocationtextCard: {
    color: 'black',
    fontSize: fontSize.ten,
  },


  innercontainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingHorizontal: '1%'
  },
  topHeaderButton: {
    flexDirection: 'row',
    width: '25%', zIndex: 1000,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: scalableheight.one,
    position: 'absolute',
    right: 0,
  },
  topHeaderButtoninner: {
    borderRadius: fontSize.borderradiusmedium,
    width: scalableheight.five,
    height: scalableheight.five,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    right: scalableheight.pointeight,
  },
  PlusMinus: {
    position: "absolute",
    width: scalableheight.five,
    height: scalableheight.five,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scalableheight.borderradiusmedium,
    zIndex: 3000
  },
  googletext: {
    fontSize: fontSize.fifteen,
    borderRadius: fontSize.borderradiusmedium,
    backgroundColor: 'white',
    width: '100%'
  },
  modalMain: {
    width: '100%',
    height: '100%',
  },
  modalInner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '1%'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: scalableheight.two
  },
  listLayout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listAddress: {
    flex: 1,                // Text will take remaining space
    color: 'black',
    fontSize: fontSize.twelve,
    paddingLeft: scalableheight.one
  },
  emptyList: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center', alignItems: 'center',

  },
  emptytext: {
    fontSize: fontSize.seventeen,
    fontWeight: '600'
  },
  heading: { fontSize: fontSize.fifteen, fontWeight: 'bold' }

});
