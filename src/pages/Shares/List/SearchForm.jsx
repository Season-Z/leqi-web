import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import FormBuilder from '@/components/FormBuilder';

const { Option } = Select;
const { Search } = Input;

function SearchForm(props) {
  const meta = {
    columns: 3,
    elements: [
      {
        id: 'columns',
        label: '搜索条件',
        widget: (
          <Select placeholder="请选择搜索条件">
            <Option key="12">代码</Option>
            <Option key="1s2">股票名称</Option>
            <Option key="1a2">股票股东号</Option>
          </Select>
        ),
      },
      {
        id: 'person',
        label: '查询内容',
        widget: <Search placeholder="请输入" />,
      },
    ],
  };
  return (
    <div>
      <Form>
        <FormBuilder meta={meta} form={props.form} />
      </Form>
    </div>
  );
}

export default Form.create()(SearchForm);
