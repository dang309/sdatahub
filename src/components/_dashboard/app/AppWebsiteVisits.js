// import { merge } from 'lodash';
// import ReactApexChart from 'react-apexcharts';
// // material
// import { Card, CardHeader, Box } from '@material-ui/core';
// //
// import { useSelector } from 'react-redux';
// import { BaseOptionChart } from '../../charts';

// // ----------------------------------------------------------------------

// const CHART_DATA = [
//   {
//     name: 'RAM',
//     type: 'column',
//     data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
//   },
//   {
//     name: 'CPU',
//     type: 'area',
//     data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
//   }
// ];

// export default function AppWebsiteVisits() {
//   const chartOptions = merge(BaseOptionChart(), {
//     stroke: { width: [0, 2, 3] },
//     plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
//     fill: { type: ['solid', 'gradient', 'solid'] },
//     // xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       y: {
//         formatter: (y) => {
//           if (typeof y !== 'undefined') {
//             return `${y.toFixed(0)} visits`;
//           }
//           return y;
//         }
//       }
//     }
//   });

//   return (
//     <Card>
//       <CardHeader title="System Usage" />
//       <Box sx={{ p: 3, pb: 1 }} dir="ltr">
//         <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
//       </Box>
//     </Card>
//   );
// }
