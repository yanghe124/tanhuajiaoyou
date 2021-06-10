// 设计稿的宽度 /元素的宽度 = 手机屏幕 /手机中元素的宽度

import {Dimensions} from "react-native";

/**
 * 屏幕的宽度
 */
export const screenWidth = Dimensions.get("window").width;
/**
 * 屏幕的高度
 */
export const screenHeight = Dimensions.get("window").height;

//像素转dp
export const pxToDp = (elePX) => screenWidth * elePX / 375;
