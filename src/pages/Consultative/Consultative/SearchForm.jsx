import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import FormBuilder from '@/components/FormBuilder';

const { Option } = Select;

function SearchForm(props) {
  const { createArticle } = props;

  const meta = {
    columns: 3,
    elements: [
      {
        id: 'columns',
        label: '所属栏目',
        widget: (
          <Select placeholder="请选择所属栏目">
            <Option key="12">sad</Option>
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
        label: '推荐人',
        widget: <Input placeholder="请输入" />,
      },
    ],
  };
  return (
    <div>
      <Form>
        <FormBuilder meta={meta} form={props.form} />
        <Form.Item style={{ textAlign: 'right' }}>
          <Button onClick={createArticle}>新建稿件</Button>
          <Button type="primary" style={{ marginLeft: '16px' }}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create()(SearchForm);
