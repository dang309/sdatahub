import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { useSelector } from 'react-redux';
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

export default function AppSystemUsage() {
  const systemUsage = useSelector((state) => state.system.systemUsage);

  const dataRAM = systemUsage.map((item) => item.usedRam);
  const dataCPU = systemUsage.map((item) => item.usedCPU);

  const CHART_DATA = [
    {
      name: 'RAM',
      type: 'line',
      data: dataRAM.length > 15 ? dataRAM.slice(dataRAM.length - 15) : dataRAM
    },
    {
      name: 'CPU',
      type: 'area',
      data: dataCPU.length > 15 ? dataCPU.slice(dataCPU.length - 15) : dataCPU
    }
  ];

  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '12%', borderRadius: 4 } },
    fill: { type: ['solid', 'solid'], opacity: [1, 0.15] },
    yaxis: {
      labels: {
        formatter: (value) => `${value}%`
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(2)}%`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="System Usage" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
