import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import FormBuilder from '@/components/FormBuilder';

class RecommendStockModal extends Component {
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
          label: '推荐股票代码',
          widget: <Input placeholder="请输入推荐股票代码" />,
          rules: [{ required: true, message: '请输入推荐股票代码' }],
        },
        {
          id: 'type',
          label: '推荐股票名称',
          widget: <Input placeholder="请输入推荐股票名称" />,
          rules: [{ required: true, message: '请输入推荐股票名称' }],
        },
      ],
    };

    return (
      <Modal
        title="新增推荐股票"
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
export default Form.create()(RecommendStockModal);
