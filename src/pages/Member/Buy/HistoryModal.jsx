import React from 'react';
import { Modal, Button } from 'antd';
import CommonTable from '@/components/CommonTable';

const HistoryModal = props => {
  const { visible } = props;
  const columns = [
    {
      title: '代码',
      dataIndex: 'sss',
      key: 'sss',
    },
    {
      title: '股票名称',
      dataIndex: 'asdasd',
      key: 'asdasd',
    },
    {
      title: '买入价',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '买入量',
      dataIndex: 'sdfsf',
      key: 'sdfsf',
    },
    {
      title: '持有量',
      dataIndex: 'dsfsd',
      key: 'dsfsd',
    },
    {
      title: '成本',
      dataIndex: 'nnn',
      key: 'nnn',
    },
  ];

  return (
    <Modal
      title="新增推送"
      destroyOnClose
      maskClosable={false}
      width={500}
      visible={visible}
      onOk={props.closeModal}
      onCancel={props.closeModal}
      footer={[
        <Button key="back" onClick={props.closeModal}>
          关闭
        </Button>,
      ]}
    >
      <CommonTable columns={columns} />
    </Modal>
  );
};

export default HistoryModal;
