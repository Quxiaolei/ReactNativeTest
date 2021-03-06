/*!
 *
 * Util模块 React Native module
 * 主要提供工具方法
 *
 */
import Dimensions from 'Dimensions';

import React,{
  PixelRatio,
  ActivityIndicatorIOS
} from 'react-native';

module.exports = {
  navigationHeight: 44,
  navigationBarBGColor:'#3497FF',
  statusBarHeight: 20,
  /*最小线宽*/
  pixel: 1 / PixelRatio.get(),
  /*获取当前时间*/
  currenttime : new Date().toLocaleDateString(),
  /*屏幕尺寸*/
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  /**
   * 基于fetch的get方法
   * @method post
   * @param {string} url
   * @param {function} callback 请求成功回调
   */
  get: function(url, successCallback, failCallback){
    console.log(url);
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        // console.log(responseText);
        successCallback(JSON.parse(responseText));
      })
      .catch(function(err){
        failCallback(err);
      });
  },
};
