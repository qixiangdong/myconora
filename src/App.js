import React from 'react';
import {
  Button
} from 'antd';
import './App.css';

import TodayData from './components/TodayData'

const App = () => (
  <div className="App" >
    <h1 > 马西亚COVID - 19 实时数据 < /h1>
  <h3 > {new Date().format("yyyy年MM月dd日")} < /h3>
  <TodayData />
  </div>
      );
      
      
Date.prototype.format = function (fmt) {
  var o = {
        "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
  if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

export default App;