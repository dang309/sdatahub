import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

// ----------------------------------------------------------------------

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <DashboardIcon width={22} height={22} />
  },
  {
    title: 'task monitoring',
    path: '/dashboard/task-monitoring',
    icon: <AssignmentIcon width={22} height={22} />
  }
];

export default sidebarConfig;
