import React from 'react';
import ReactEcharts from 'echarts-for-react';

// 导入饼图配置，减小包体积
import 'echarts/lib/chart/pie';

function PieChart() {
  const EventsDict = {
    // 'click': this.onChartClick,
    // 'legendselectchanged': this.onChartLegendselectchanged
  };

  // 图表加载成功的回调
  const onChartReadyCallback = (value, options) => {
    console.log(value, options);
  };

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      notMerge
      lazyUpdate
      theme="theme_name"
      onChartReady={onChartReadyCallback}
      style={{ height: '300px', width: '600px', marginTop: '32px' }}
      onEvents={EventsDict}
    />
  );
}

export default PieChart;
