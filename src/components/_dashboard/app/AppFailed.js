import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import PropTypes from 'prop-types';
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

AppFailed.propTypes = {
  failedTasks: PropTypes.number
};

export default function AppFailed(props) {
  const { failedTasks } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <ErrorOutlineIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{failedTasks}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        FAILED
      </Typography>
    </RootStyle>
  );
}
