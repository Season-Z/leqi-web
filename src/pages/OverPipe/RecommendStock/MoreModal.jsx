import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import CommonTable from '@/components/CommonTable';

class MoreModal extends Component {
  handleCancel = () => this.props.closeModal();

  render() {
    const { visible } = this.props;
    const columns = [
      {
        title: '价格',
        dataIndex: 'sss',
        key: 'sss',
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (_, record) => (
          <>
            <a>买入</a>
            <a>补仓</a>
            <a>卖出</a>
          </>
        ),
      },
    ];

    return (
      <Modal
        title="更多"
        destroyOnClose
        maskClosable={false}
        width={500}
        visible={visible}
        onOk={this.handleCancel}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            取消
          </Button>,
        ]}
      >
        <CommonTable columns={columns} />
      </Modal>
    );
  }
}
export default MoreModal;
