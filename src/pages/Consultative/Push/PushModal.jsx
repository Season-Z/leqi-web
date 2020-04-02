import React, { Component } from 'react';
import { Modal, Form, Input, Button, Radio, Select } from 'antd';
import FormBuilder from '@/components/FormBuilder';

const { Option } = Select;
class PushModal extends Component {
  // 保存浮层
  handleOk = bool => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      this.props.saveModal(values, bool);
    });
  };

  handleCancel = () => this.props.closeModal();

  render() {
    const { visible } = this.props;
    const formMeta = {
      elements: [
        {
          id: 'name',
          label: '推送标题',
          widget: <Input placeholder="不超过34字" />,
          rules: [{ required: true, message: '请输入推送标题' }],
        },
        {
          id: 'type',
          label: '推送内容',
          widget: <Input placeholder="推送内容" />,
          rules: [{ required: true, message: '请输入推送内容' }],
        },
        {
          id: 'sdd',
          label: '推送对象',
          widget: (
            <Radio.Group>
              <Radio value={1}>所有用户</Radio>
              <Radio value={2}>会员用户</Radio>
              <Radio value={2}>个人用户</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择推送对象' }],
        },
        {
          id: 'sad',
          label: '会员类型',
          widget: (
            <Radio.Group>
              <Radio value={1}>青铜用户</Radio>
              <Radio value={2}>白银用户</Radio>
              <Radio value={2}>黄金用户</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择推送对象' }],
        },
        {
          id: 'asdas',
          label: '关联用户',
          widget: (
            <Select placeholder="请选择关联用户">
              <Option key={12}>asd</Option>
            </Select>
          ),
          rules: [{ required: true, message: '请选择关联用户' }],
        },
      ],
    };

    return (
      <Modal
        title="新增推送"
        destroyOnClose
        maskClosable={false}
        width={500}
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" style={{ margin: '0 8px' }} onClick={this.handleOk}>
            保存
          </Button>,
          <Button key="back" onClick={this.handleCancel}>
            取消
          </Button>,
        ]}
      >
        <Form>
          <FormBuilder meta={formMeta} form={this.props.form} />
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(PushModal);
