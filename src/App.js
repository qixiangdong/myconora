import React from 'react';
import {
  Button
} from 'antd';
import './App.css';

import TodayData from './components/TodayData';
import { Chart } from '@antv/g2';

const App = () => (
  <div className="App" >
    <TodayData todayData={todayData} />
  </div>
);

const todayData = {
  confirmedCase: {
    total: 158,
    changes: '+9'
  },
  recoveredCase: {
    total: 32,
    changes: '+6'
  },
  pendingCase: {
    total: 239,
    changes: '-23'
  },
  deathCase: {
    total: 0,
    changes: '-'
  }
}

export default App;

const data = [
  { 日期: '2-11', type: '确诊', 人数: 18 },
  { 日期: '2-12', type: '确诊', 人数: 18 },
  { 日期: '2-13', type: '确诊', 人数: 19 },
  { 日期: '2-14', type: '确诊', 人数: 19 },
  { 日期: '2-15', type: '确诊', 人数: 22 },
  { 日期: '2-16', type: '确诊', 人数: 22 },
  { 日期: '2-17', type: '确诊', 人数: 22 },
  { 日期: '2-18', type: '确诊', 人数: 22 },
  { 日期: '2-19', type: '确诊', 人数: 22 },
  { 日期: '2-20', type: '确诊', 人数: 22 },
  { 日期: '2-21', type: '确诊', 人数: 22 },
  { 日期: '2-22', type: '确诊', 人数: 22 },
  { 日期: '2-23', type: '确诊', 人数: 22 },
  { 日期: '2-24', type: '确诊', 人数: 22 },
  { 日期: '2-25', type: '确诊', 人数: 22 },
  { 日期: '2-26', type: '确诊', 人数: 22 },
  { 日期: '2-27', type: '确诊', 人数: 23 },
  { 日期: '2-28', type: '确诊', 人数: 23 },
  { 日期: '2-29', type: '确诊', 人数: 25 },
  { 日期: '3-1', type: '确诊', 人数: 29 },
  { 日期: '3-2', type: '确诊', 人数: 29 },
  { 日期: '3-3', type: '确诊', 人数: 36 },
  { 日期: '3-4', type: '确诊', 人数: 50 },
  { 日期: '3-5', type: '确诊', 人数: 50 },
  { 日期: '3-6', type: '确诊', 人数: 83 },
  { 日期: '3-7', type: '确诊', 人数: 93 },
  { 日期: '3-8', type: '确诊', 人数: 99 },
  { 日期: '3-9', type: '确诊', 人数: 117 },
  { 日期: '3-10', type: '确诊', 人数: 129 },
  { 日期: '3-11', type: '确诊', 人数: 149 },
  { 日期: '3-12', type: '确诊', 人数: 158 },

  { 日期: '2-11', type: '治愈', 人数: 3 },
  { 日期: '2-12', type: '治愈', 人数: 3 },
  { 日期: '2-13', type: '治愈', 人数: 3 },
  { 日期: '2-14', type: '治愈', 人数: 3 },
  { 日期: '2-15', type: '治愈', 人数: 7 },
  { 日期: '2-16', type: '治愈', 人数: 7 },
  { 日期: '2-17', type: '治愈', 人数: 7 },
  { 日期: '2-18', type: '治愈', 人数: 13 },
  { 日期: '2-19', type: '治愈', 人数: 15 },
  { 日期: '2-20', type: '治愈', 人数: 15 },
  { 日期: '2-21', type: '治愈', 人数: 15 },
  { 日期: '2-22', type: '治愈', 人数: 15 },
  { 日期: '2-23', type: '治愈', 人数: 15 },
  { 日期: '2-24', type: '治愈', 人数: 18 },
  { 日期: '2-25', type: '治愈', 人数: 18 },
  { 日期: '2-26', type: '治愈', 人数: 18 },
  { 日期: '2-27', type: '治愈', 人数: 18 },
  { 日期: '2-28', type: '治愈', 人数: 18 },
  { 日期: '2-29', type: '治愈', 人数: 18 },
  { 日期: '3-1', type: '治愈', 人数: 18 },
  { 日期: '3-2', type: '治愈', 人数: 18 },
  { 日期: '3-3', type: '治愈', 人数: 22 },
  { 日期: '3-4', type: '治愈', 人数: 22 },
  { 日期: '3-4', type: '治愈', 人数: 22 },
  { 日期: '3-6', type: '治愈', 人数: 22 },
  { 日期: '3-7', type: '治愈', 人数: 23 },
  { 日期: '3-8', type: '治愈', 人数: 24 },
  { 日期: '3-9', type: '治愈', 人数: 24 },
  { 日期: '3-10', type: '治愈', 人数: 24 },
  { 日期: '3-11', type: '治愈', 人数: 26 },
  { 日期: '3-12', type: '治愈', 人数: 32 },
];

const chart = new Chart({
  container: 'c1',
  autoFit: true,
  height: 500,
});

chart.data(data);
chart.scale({
  日期: {
    range: [0, 1],
  },
  人数: {
    nice: true,
  },
});

chart.tooltip({
  showCrosshairs: true,
  shared: true,
});

chart
  .line()
  .position('日期*人数')
  .color('type')
  .shape('smooth');

chart
  .point()
  .position('日期*人数')
  .color('type')
  .shape('circle');

chart.render();