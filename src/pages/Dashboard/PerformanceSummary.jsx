import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import Subheading from '@/components/Subheading';

export default class PerformanceSummary extends PureComponent {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  componentDidMount() {
    this.renderChart();
  }

  renderChart = () => {
    var data = [
      {
        month: 'Jan',
        订单数: 7.0,
        交易额: 3.9,
      },
      {
        month: 'Feb',
        订单数: 6.9,
        交易额: 4.2,
      },
      {
        month: 'Mar',
        订单数: 9.5,
        交易额: 5.7,
      },
      {
        month: 'Apr',
        订单数: 14.5,
        交易额: 8.5,
      },
      {
        month: 'May',
        订单数: 18.4,
        交易额: 11.9,
      },
      {
        month: 'Jun',
        订单数: 21.5,
        交易额: 15.2,
      },
      {
        month: 'Jul',
        订单数: 25.2,
        交易额: 17.0,
      },
      {
        month: 'Aug',
        订单数: 26.5,
        交易额: 16.6,
      },
      {
        month: 'Sep',
        订单数: 23.3,
        交易额: 14.2,
      },
      {
        month: 'Oct',
        订单数: 18.3,
        交易额: 10.3,
      },
      {
        month: 'Nov',
        订单数: 13.9,
        交易额: 6.6,
      },
      {
        month: 'Dec',
        订单数: 9.6,
        交易额: 4.8,
      },
    ];
    var ds = new DataSet();
    var dv = ds.createView().source(data);
    // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
    dv.transform({
      type: 'fold',
      fields: ['订单数', '交易额'], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段
    });
    var chart = new G2.Chart({
      container: this.chart,
      forceFit: true,
      height: 400,
    });
    chart.source(dv, {
      month: {
        range: [0, 1],
      },
    });
    chart.tooltip({
      crosshairs: {
        type: 'line',
      },
    });
    chart.axis('temperature', {
      label: {
        formatter: function formatter(val) {
          return val + '°C';
        },
      },
    });
    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');
    chart
      .point()
      .position('month*temperature')
      .color('city')
      .size(4)
      .shape('circle')
      .style({
        stroke: '#fff',
        lineWidth: 1,
      });
    chart.render();
  };

  render() {
    return (
      <div>
        <Subheading title="业绩汇总" />
        <div ref={node => (this.chart = node)} style={{ minHeight: '400px' }} />
      </div>
    );
  }
}
