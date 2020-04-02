import React, { Component } from 'react';
import { Modal, Form, Input, Button, Radio, Select, Row, Col } from 'antd';
import FormBuilder from '@/components/FormBuilder';
import UploadImg from '@/components/UploadImg';

const { Option } = Select;

class ArticleModal extends Component {
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

  setImgUrl = ({ imageUrl }) => {
    this.props.form.setFieldsValue({
      imageUrl,
    });
  };

  render() {
    const { visible } = this.props;
    const formMeta = {
      elements: [
        {
          id: 'type',
          label: '稿件类型',
          widget: (
            <Radio.Group>
              <Radio value={1}>内容</Radio>
              <Radio value={2}>外链</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择稿件类型' }],
        },
        {
          id: 'name',
          label: '稿件标题',
          widget: <Input placeholder="稿件标题" />,
          rules: [{ required: true, message: '请输入稿件标题' }],
        },
        {
          id: 'sadasd',
          label: '外链地址',
          widget: <Input placeholder="外链地址" />,
          rules: [{ required: true, message: '请输入外链地址' }],
        },
        {
          id: 'imageUrl',
          label: '列表图',
          widget: <UploadImg setImgUrl={this.setImgUrl} />,
          rules: [{ required: true, message: '请输入描述' }],
        },
        {
          id: 'condition',
          label: '所属栏目',
          widget: (
            <Select placeholder="请选择所属栏目">
              <Option key={12}>asd</Option>
            </Select>
          ),
          rules: [{ required: true, message: '请选择所属栏目' }],
        },
      ],
    };

    return (
      <Modal
        title="新增稿件"
        destroyOnClose
        maskClosable={false}
        width={1000}
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="oneKey" type="primary">
            一件成稿
          </Button>,
          <Button key="submit" type="primary" style={{ margin: '0 8px' }} onClick={this.handleOk}>
            保存
          </Button>,
          <Button key="back" onClick={this.handleCancel}>
            取消
          </Button>,
        ]}
      >
        <Row>
          <Col span={12}>
            <Form>
              <FormBuilder meta={formMeta} form={this.props.form} />
            </Form>
          </Col>
          <Col>code</Col>
        </Row>
      </Modal>
    );
  }
}
export default Form.create()(ArticleModal);
