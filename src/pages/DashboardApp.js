// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import { useSelector } from 'react-redux';
import Page from '../components/Page';
import {
  AppFailed,
  AppIdling,
  AppProcessing,
  AppTotal,
  AppCompleted,
  AppSystemInfo,
  AppSystemUsage
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const totalTasks = useSelector((state) => state.task.tasks);
  const failedTasks = totalTasks && totalTasks.filter((item) => item.status === 'ERROR');
  const idlingTasks = totalTasks && totalTasks.filter((item) => item.status === 'IDLE');
  const completedTasks = totalTasks && totalTasks.filter((item) => item.status === 'DONE');
  const processingTasks = totalTasks && totalTasks.filter((item) => item.status === 'PROCESS');
  return (
    <Page title="S-DataHub">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppTotal totalTasks={totalTasks.length} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppFailed failedTasks={failedTasks.length} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppProcessing processingTasks={processingTasks.length} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppIdling idlingTasks={idlingTasks.length} />
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <AppCompleted completedTasks={completedTasks.length} />
          </Grid>

          <Grid item xs={12} md={6} lg={7.5}>
            <AppSystemUsage />
          </Grid>

          <Grid item xs={12} md={6} lg={4.5}>
            <AppSystemInfo />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
