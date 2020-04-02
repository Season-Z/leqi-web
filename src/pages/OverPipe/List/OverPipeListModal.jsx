import React, { Component } from 'react';
import { Modal, Form, Input, Button, Radio } from 'antd';
import FormBuilder from '@/components/FormBuilder';

const { TextArea } = Input;

class OverPipeListModal extends Component {
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
          label: '姓名',
          widget: <Input placeholder="请输入姓名" />,
          rules: [{ required: true, message: '请输入姓名' }],
        },
        {
          id: 'type',
          label: '微信号',
          widget: <Input placeholder="请输入微信号" />,
          rules: [{ required: true, message: '请输入微信号' }],
        },
        {
          id: 'asdas',
          label: '是否骨头',
          widget: (
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={2}>否</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择是否固投' }],
        },
        {
          id: 'sdd',
          label: '标签',
          widget: <Input placeholder="请输入标签" />,
          rules: [{ required: true, message: '请输入标签' }],
        },
        {
          id: 'Asdasd',
          label: '简介',
          widget: <TextArea rows={4} placeholder="请输入简介" />,
          rules: [{ required: true, message: '请输入简介' }],
        },
        {
          id: 'dsnj',
          label: '相关',
          widget: (
            <Radio.Group>
              <Radio value={1}>资讯</Radio>
              <Radio value={2}>荐股</Radio>
              <Radio value={4}>直播</Radio>
              <Radio value={5}>在线咨询</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择相关' }],
        },
      ],
    };

    return (
      <Modal
        title="新增超管"
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
export default Form.create()(OverPipeListModal);
