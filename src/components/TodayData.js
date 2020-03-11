import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const todayData = {
    confirmedCase: {
        total: 149,
        changes: '+20'
    },
    recoveredCase: {
        total: 26,
        changes: '+1'
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
export default class TodayData extends React.Component {
    render() {
        return (
            <div>
                
                <Title level={2}> 马西亚COVID - 19 实时数据 </Title>
                <h3> {new Date().format("yyyy年MM月dd日")} </h3>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Statistic title="确诊" value={todayData.confirmedCase.total} valueStyle={{ color: '#cf1322' }} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="治愈" value={todayData.recoveredCase.total} valueStyle={{ color: '#3f8600' }} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="等待检测结果" value={todayData.pendingCase.total} valueStyle={{ color: '#b9bab8' }} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="死亡" value={todayData.deathCase.total} valueStyle={{ color: '#000000' }} />
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={6}>
                            <Text>{todayData.confirmedCase.changes}</Text>
                        </Col>
                        <Col span={6}>
                            <Text>{todayData.recoveredCase.changes}</Text>
                        </Col>
                        <Col span={6}>
                            <Text>{todayData.pendingCase.changes}</Text>
                        </Col>
                        <Col span={6}>
                            <Text>{todayData.deathCase.changes}</Text>
                        </Col>
                    </Row>
            </div>
                    );
                }
            }
            
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