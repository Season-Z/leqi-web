import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import FormBuilder from '@/components/FormBuilder';

const { Option } = Select;

function SearchForm(props) {
  const { create } = props;

  const meta = {
    columns: 3,
    elements: [
      {
        id: 'columns',
        label: '直播状态',
        widget: (
          <Select placeholder="请选择直播状态">
            <Option key="12">预告</Option>
            <Option key="122">直播</Option>
            <Option key="142">回看</Option>
          </Select>
        ),
      },
      {
        id: 'status',
        label: '稿件状态',
        widget: (
          <Select placeholder="请选择稿件状态">
            <Option key="12">已发布</Option>
            <Option key="152">已撤回</Option>
            <Option key="122">待发布</Option>
          </Select>
        ),
      },
      {
        id: 'person',
        label: '直播标题',
        widget: <Input placeholder="请输入直播标题" />,
      },
    ],
  };
  return (
    <div>
      <Form>
        <FormBuilder meta={meta} form={props.form} />
        <Form.Item style={{ textAlign: 'right' }}>
          <Button onClick={create}>新建直播</Button>
          <Button type="primary" style={{ marginLeft: '16px' }}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create()(SearchForm);
