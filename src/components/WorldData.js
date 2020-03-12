import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    country: '中国',
    confirm: 80980,
    death: 3191,
  },
  {
    key: '2',
    country: '意大利',
    confirm: 12462,
    death: '827',
  },
  {
    key: '3',
    country: '伊朗',
    confirm: 9000,
    death: 354,
  },
  {
    key: '4',
    country: '韩国',
    confirm: 7755,
    death: 61,
  },
  {
    key: '5',
    country: '意大利',
    confirm: 12462,
    death: '827',
  },
  {
    key: '6',
    country: '法国',
    confirm: 2281,
    death: 48,
  },
  {
    key: '7',
    country: '西班牙',
    confirm: 2128,
    death: 49,
  },
  {
    key: '8',
    country: '德国',
    confirm: 1966,
    death: 3,
  },
  {
    key: '9',
    country: '美国',
    confirm: 1322,
    death: 38,
  },
  {
    key: '10',
    country: '钻石公主号',
    confirm: 696,
    death: 7,
  },
  {
    key: '11',
    country: '日本',
    confirm: 641,
    death: 16,
  },
  {
    key: '12',
    country: '挪威',
    confirm: 629,
    death: 0,
  },
  {
    key: '13',
    country: '瑞士',
    confirm: 613,
    death: 4,
  },
  {
    key: '14',
    country: '丹麦',
    confirm: 514,
    death: 0,
  },
  {
    key: '15',
    country: '荷兰',
    confirm: 503,
    death: 5,
  },
  {
    key: '16',
    country: '瑞典',
    confirm: 500,
    death: 1,
  },
  {
    key: '17',
    country: '英国',
    confirm: 460,
    death: 8,
  },
  {
    key: '18',
    country: '比利时',
    confirm: 314,
    death: 3,
  },
  {
    key: '19',
    country: '卡塔尔',
    confirm: 262,
    death: 0,
  },
  {
    key: '20',
    country: '奥地利',
    confirm: 246,
    death: 0,
  },
  {
    key: '21',
    country: '巴林',
    confirm: 195,
    death: 0,
  },
  {
    key: '22',
    country: '新加坡',
    confirm: 178,
    death: 0,
  },
  {
    key: '23',
    country: '马来西亚',
    confirm: 149,
    death: 0,
  },
  {
    key: '24',
    country: '澳大利亚',
    confirm: 144,
    death: 3,
  },
];

const columns = [
  {
    title: '国家',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '确诊',
    dataIndex: 'confirm',
    key: 'confirm',
  },
  {
    title: '死亡',
    dataIndex: 'death',
    key: 'death',
  },
];



export default class WorldData extends React.Component {
    render() {
        return (
            <Table dataSource={dataSource} columns={columns} />
        );
                }
            }