import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;
const todayData = {
    confirmedCase: {
        total: 149,
        changes: 20
    },
    recoveredCase: {
        total: 26,
        changes: 1
    },
    pendingCase: {
        total: 239,
        changes: -23
    },
    deathCase: {
        total: 0,
        changes: 0
    }
}

export default class TodayData extends React.Component {
    render() {
        return (
            <div>
                
            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="确诊" value={todayData.confirmedCase.total} valueStyle={{ color: '#cf1322' }} />
                </Col>
                <Col span={6}>
                    <Statistic title="治愈" value={26} valueStyle={{ color: '#3f8600' }} />
                </Col>
                <Col span={6}>
                    <Statistic title="等待检测结果" value={262} valueStyle={{ color: '#b9bab8' }} />
                </Col>
                <Col span={6}>
                    <Statistic title="死亡" value={0} valueStyle={{ color: '#000000' }} />
                </Col>
            </Row>

            <Row gutter={16}>
            <Col span={6}>
                    <Text>+20</Text>
                </Col>
                <Col span={6}>
                    <Text>+1</Text>
                </Col>
                <Col span={6}>
                    <Text>-62</Text>
                </Col>
                <Col span={6}>
                    <Text>-</Text>
                </Col>
            </Row>
            </div>
        );
    }
}