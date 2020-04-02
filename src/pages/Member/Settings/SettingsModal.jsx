import React, { Component } from 'react';
import { Modal, Form, Input, Button, Select, InputNumber } from 'antd';
import FormBuilder from '@/components/FormBuilder';

const { Option } = Select;
class SettingsModal extends Component {
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
          label: '会员名称',
          widget: <Input placeholder="请输入会员名称" />,
          rules: [{ required: true, message: '请输入会员名称' }],
        },
        {
          id: 'type',
          label: '会员价格',
          widget: <InputNumber />,
          rules: [{ required: true, message: '请输入会员价格' }],
        },
        {
          id: 'sdd',
          label: '会员权限',
          widget: (
            <Select placeholder="请选择会员权限">
              <Option key={12}>asd</Option>
            </Select>
          ),
          rules: [{ required: true, message: '请选择会员权限' }],
        },
      ],
    };

    return (
      <Modal
        title="新增会员"
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
export default Form.create()(SettingsModal);
