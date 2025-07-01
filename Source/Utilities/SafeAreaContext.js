import { Platform } from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { scalableheight } from "./ResponsiveSheet";
const { top } = useSafeAreaInsets();
export var Safeareacontext = {
  top: Platform.OS == "ios" ? top : getStatusBarHeight(),
  bottom: scalableheight.three,
};
