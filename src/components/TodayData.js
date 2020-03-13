import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;


export default class TodayData extends React.Component {
    render() {
        return (
            <>
                
                <h3> 马来西亚COVID-19统计数据 </h3>
                <h4> {new Date().format("yyyy年MM月dd日")} </h4>
                <h5> 最后更新时间: 2020年3月13日 晚上8点  </h5>
                    <Row justify='center' gutter={6}>
                        <Col span={6}>
                            <Statistic title="确诊" value={this.props.todayData.confirmedCase.total} valueStyle={{ color: '#cf1322' }} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="治愈" value={this.props.todayData.recoveredCase.total} valueStyle={{ color: '#3f8600' }} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="等待检测结果" value={this.props.todayData.pendingCase.total} valueStyle={{ color: '#b9bab8' }} />
                        </Col>
                        <Col span={6}>
                            <Statistic title="死亡" value={this.props.todayData.deathCase.total} valueStyle={{ color: '#000000' }} />
                        </Col>
                    </Row>

                    <Row justify='center' gutter={6}>
                        <Col span={6}>
                            <Text>{this.props.todayData.confirmedCase.changes}</Text>
                        </Col>
                        <Col span={6}>
                            <Text>{this.props.todayData.recoveredCase.changes}</Text>
                        </Col>
                        <Col span={6}>
                            <Text>{this.props.todayData.pendingCase.changes}</Text>
                        </Col>
                        <Col span={6}>
                            <Text>{this.props.todayData.deathCase.changes}</Text>
                        </Col>
                    </Row>
            </>
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