import React, { Component } from 'react';
import { Modal, Form, Input, Button, Radio } from 'antd';
import FormBuilder from '@/components/FormBuilder';

class ColumnsModal extends Component {
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
          label: '栏目名称',
          widget: <Input placeholder="栏目名称" />,
          rules: [{ required: true, message: '请输入栏目名称' }],
        },
        {
          id: 'type',
          label: '栏目状态',
          widget: (
            <Radio.Group>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择栏目状态' }],
        },
      ],
    };

    return (
      <Modal
        title="新增栏目"
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
export default Form.create()(ColumnsModal);
