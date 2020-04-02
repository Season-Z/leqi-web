/**
 * 通用列表
 */
import React, { Component } from 'react';
import { Table, Alert, Spin } from 'antd';
// import ypRequest from '@utils/ypRequest/'
// import Rider from 'yp-rider'
// import styles from './Style.less'

export default class CommonTable extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static defaultProps = {
    canSelect: false,
    showAlert: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      pageSize: 10,
      total: 0,
      current: 1,
      loading: false,
      outSearchParams: {},
      selectedRowKeys: [],
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  componentDidMount() {
    this.sendRequest({});
  }

  /**
   * 外部统一调用该方法进行表格查询
   *
   * 通过ref获取该组件的实例
   */
  queryTableList = values => this.sendRequest(values);

  /**
   * values 外部查询调用传参
   * pageParams 分页等查询参数
   */
  sendRequest = async (values, pageParams) => {
    // this.setState({ loading: true });

    const { current, pageSize, outSearchParams, dataSource } = this.state;
    // const { queryDataUrl } = this.props;

    // const otherSearch = {
    //   ...outSearchParams,
    //   ...values,
    // };
    console.log(values);
    let pageNo = pageParams ? pageParams.current : current;
    const size = pageParams ? pageParams.pageSize : pageSize;

    if (outSearchParams.isEnd && !dataSource.length) {
      pageNo = 1;
    }

    // Todo 具体请求参数的传递 实现
    // const params = {
    //   pageNo,
    //   pageSize: size,
    //   order: pageParams ? pageParams.order : null
    // }
    const params = {
      tenantId: 2,
      accountDateFrom: null,
      accountDateTo: null,
      collateTimeFrom: null,
      collateTimeTo: null,
      merchantId: null,
      merchantType: 1,
      status: [2, 3],
      size,
      page: pageNo,
      operationGroupId: '200000471',
    };

    // try {
    //   const { result }: any = await ypRequest(queryDataUrl, params)
    //   const { page = 1, size = 10, isEnd, total = 0, list } = result

    //   const outSearchParams = { ...otherSearch, isEnd }

    //   this.setState({
    //     dataSource: list,
    //     current: page,
    //     pageSize: size,
    //     total,
    //     outSearchParams,
    //     selectedRowKeys: []
    //   })
    // } finally {
    //   this.setState({
    //     loading: false
    //   })
    // }
  };

  // 表格事件操作
  changeTable = (pagination, filters, sorter) => {
    const { current, pageSize } = pagination;
    const { order, columnKey, column } = sorter;
    // 防止没有排序的列发生请求
    if (sorter.column && !column.sorter) {
      return;
    }

    const params = [
      {
        column: columnKey,
        dir: order && order.includes('asc') ? 'asc' : 'desc',
      },
    ];

    this.sendRequest(undefined, {
      order: JSON.stringify(params),
      current,
      pageSize,
    });

    const { rowSelectCallback, sortCallback } = this.props;

    if (sortCallback) {
      sortCallback(sorter);
    }

    // 页面切换后，清空选中项
    this.setState({ selectedRowKeys: [] });
    if (rowSelectCallback) {
      rowSelectCallback([], []);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  // eslint-disable-next-line @typescript-eslint/member-ordering
  render() {
    const { dataSource, pageSize, total, current, loading, selectedRowKeys } = this.state;
    const {
      columns,
      canSelect,
      scroll,
      showAlert,
      alertMsg,
      rowSelectCallback,
      // paginationElement,
    } = this.props;

    const selection = {
      selectedRowKeys,
      onChange: (keys, selectedRows) => {
        this.setState({
          selectedRowKeys: keys,
        });
        if (rowSelectCallback) {
          rowSelectCallback(keys, selectedRows);
        }
      },
    };
    const rowSelection = canSelect ? selection : undefined;

    const pagination = {
      total,
      current,
      pageSize,
      showSizeChanger: true,
      pageSizeOptions: ['10', '25', '50', '100'],
    };

    const msg = alertMsg || `共有${total}条数据`;
    return (
      <Spin spinning={loading}>
        {showAlert && (
          <Alert message={msg} type="info" showIcon key="alert" style={{ marginBottom: '10px' }} />
        )}
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={(key, record) => (record.id ? record.id : key)}
          rowSelection={rowSelection}
          pagination={pagination}
          onChange={this.changeTable}
          scroll={scroll}
          key="table"
          size="small"
        />
      </Spin>
    );
  }
}
