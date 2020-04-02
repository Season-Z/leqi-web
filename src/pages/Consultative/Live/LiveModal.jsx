import React, { Component } from 'react';
import { Modal, Form, Input, Button, Radio, Select, Row, Col, DatePicker } from 'antd';
import FormBuilder from '@/components/FormBuilder';
import UploadImg from '@/components/UploadImg';

const { Option } = Select;
const { TextArea } = Input;

class LiveModal extends Component {
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

  setBgImgUrl = ({ imageUrl }) => {
    this.props.form.setFieldsValue({
      bgImgUrl: imageUrl,
    });
  };

  render() {
    const { visible } = this.props;
    const formMeta = {
      elements: [
        {
          id: 'name',
          label: '直播标题',
          widget: <Input placeholder="直播标题" />,
          rules: [{ required: true, message: '请输入直播标题' }],
        },
        {
          id: 'type',
          label: '直播状态',
          widget: (
            <Radio.Group>
              <Radio value={1}>预告</Radio>
              <Radio value={4}>直播</Radio>
              <Radio value={2}>回放</Radio>
            </Radio.Group>
          ),
          rules: [{ required: true, message: '请选择直播状态' }],
        },
        {
          id: 'sadasd',
          label: '开始时间',
          widget: <DatePicker />,
          rules: [{ required: true, message: '请选择开始时间' }],
        },
        {
          id: '萨达多',
          label: '直播流地址',
          widget: <Input placeholder="直播流地址" />,
          rules: [{ required: true, message: '请输入直播流地址' }],
        },
        {
          id: '奥术大师多',
          label: '回放地址',
          widget: <Input placeholder="回放地址" />,
          rules: [{ required: true, message: '请输入回放地址' }],
        },
        {
          id: 'imageUrl',
          label: '列表图',
          widget: <UploadImg setImgUrl={this.setImgUrl} />,
          help: '图片比例16：9',
        },
        {
          id: 'bgImgUrl',
          label: '预告背景图',
          widget: <UploadImg setImgUrl={this.setBgImgUrl} />,
          help: '图片比例16：9',
        },
        {
          id: 'namsade',
          label: '直播介绍',
          widget: <Input placeholder="直播介绍" />,
        },
        {
          id: 'namsasdde',
          label: '主讲人',
          widget: <Input placeholder="主讲人" />,
        },
        {
          id: 'namsdsasdde',
          label: '说明',
          initialValue: '直播内容仅供参考。请理性投股。可变更，不超过30字。(文案确认 或者是否需要)',
          widget: <TextArea rows={3} placeholder="说明" />,
        },
        {
          id: 'sdaa',
          label: '是否需要会员',
          widget: (
            <Radio.Group>
              <Radio value={1}>是</Radio>
              <Radio value={4}>否</Radio>
            </Radio.Group>
          ),
        },
      ],
    };

    return (
      <Modal
        title="新增直播"
        destroyOnClose
        maskClosable={false}
        width={700}
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
export default Form.create()(LiveModal);
