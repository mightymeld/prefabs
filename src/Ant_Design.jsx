import {
    Affix,
    Alert,
    Anchor,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Button,
    Calendar,
    Card,
    Checkbox,
    Col,
    ColorPicker,
    DatePicker,
    Divider,
    FloatButton,
    Image,
    Input,
    InputNumber,
    Mentions,
    Pagination,
    Popconfirm,
    Radio,
    Rate,
    Row,
    Segmented,
    Select,
    Skeleton,
    Slider,
    Space,
    Spin,
    Statistic,
    Switch,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Watermark
} from "antd";

import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import { UserOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";

export function _Affix() {
    return (
        <Affix offsetTop={120}>
            <Button type="primary">Affix to the top</Button>
        </Affix>
    );
}

export function _Alert() {
    return (
        <Alert message="Alert message title" description="Further details about the context of this console.log." type="info" />
    );
}

export function _Anchor() {
    return (
        <Anchor>
            <Anchor.Link href="#section1" title="Section 1" />
            <Anchor.Link href="#section2" title="Section 2" />
        </Anchor>
    );
}

export function _AutoComplete() {
    const options = [{ value: 'Apple' }, { value: 'Banana' }, { value: 'Cherry' }];

    return <AutoComplete options={options} />;
}

export function _Avatar() {
    return <Avatar size={64} icon={<UserOutlined />} />;
}

export function _BackTop() {
    return <BackTop />;
}

export function _Badge() {
    return (
        <Badge count={5}>
            <Avatar shape="circle" size="large" />
        </Badge>
    )
}

export function _Button() {
    return <Button type="primary">Primary Button</Button>
}

export function _FloatButton() {
    return <FloatButton icon={<QuestionCircleOutlined />} />
}

export function _Divider() {
    return <Divider />
}

export function _Grid() {
    return (
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <div >col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div >col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div >col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div >col-6</div>
            </Col>
        </Row>
    )
}

export function _Space() {
    return (
        <Space size={8}>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
        </Space>
    )
}

export function _Breadcrumb() {
    return (
        <Breadcrumb
            items={[
                {
                    title: 'Home',
                },
                {
                    title: <a href="">Application Center</a>,
                },
                {
                    title: <a href="">Application List</a>,
                },
                {
                    title: 'An Application',
                },
            ]}
        />
    )
}

export function _Checkbox() {
    return <Checkbox onChange={() => console.log('clicked')}>Checkbox</Checkbox>
}

export function _ColorPicker() {
    return <ColorPicker size="small" showText />
}

export function _DatePicker() {
    return <DatePicker onChange={() => console.log('clicked')} />
}

export function _InputNumber() {
    return <InputNumber min={1} max={10} defaultValue={3} onChange={() => console.log('changed')} />
}

export function _Calendar() {
    return <Calendar onPanelChange={() => console.log('clicked')} />
}

export function _Input() {
    return <Input placeholder="Basic usage" />
}

export function _Image() {
    return (
        <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
    )
}

export function _Mentions() {
    return (
        <Mentions
            style={{ width: '100%' }}
            onChange={() => console.log('clicked')}
            onSelect={() => console.log('clicked')}
            defaultValue="@afc163"
            options={[
                {
                    value: 'afc163',
                    label: 'afc163',
                },
                {
                    value: 'zombieJ',
                    label: 'zombieJ',
                },
                {
                    value: 'yesmeck',
                    label: 'yesmeck',
                },
            ]}
        />
    )
}

export function _Pagination() {
    return <Pagination defaultCurrent={1} total={50} />;
}

export function _Radio() {
    return (
        <Radio.Group onChange={() => console.log('clicked')} value={4}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </Radio.Group>
    )
}

export function _Select() {
    return (
        <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            allowClear
            options={[{ value: 'lucy', label: 'Lucy' }]}
        />
    )
}

export function _Statistics() {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="Active"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="Idle"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    )
}

export function _Spinner() {
    return <Spin indicator={<LoadingOutlined />} />
}

export function _Skeleton() {
    return <Skeleton active />
}

export function _Segmented() {
    return <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
}

export function _Switch() {
    return <Switch defaultChecked onChange={() => console.log('changed')} />
}

export function _Tabs() {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: 'Tab 1',
                    key: '1',
                    children: 'Tab 1',
                },
                {
                    label: 'Tab 2',
                    key: '2',
                    children: 'Tab 2',
                },
                {
                    label: 'Tab 3',
                    key: '3',
                    children: 'Tab 3',
                },
            ]}
        />
    )
}

export function _Slider() {
    return <Slider defaultValue={30} />
}

export function _Textarea() {
    return <TextArea rows={4} />
}

export function _Tooltip() {
    return (
        <Tooltip title="prompt text">
            <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
    )
}

export function _Timeline() {
    return (
        <Timeline
            items={[
                {
                    children: 'Create a services site 2015-09-01',
                },
                {
                    children: 'Solve initial network problems 2015-09-01',
                },
                {
                    children: 'Technical testing 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
            ]}
        />
    )
}

export function _PopConfirm() {
    return (
        <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => console.log('Yes')}
            onCancel={() => console.log('canceled')}
            okText="Yes"
            cancelText="No"
        >
            <Button danger>Delete</Button>
        </Popconfirm>
    )
}

export function _Tag() {
    return <Tag color="red">red</Tag>
}

export function _Rate() {
    return <Rate />
}

export function _TimePicker() {
    return <TimePicker onChange={() => console.log('clicked')} />
}

export function _Watermark() {
    return (
        <Watermark content="Watermark">
            <div style={{ height: 500 }} />
        </Watermark>
    )
}