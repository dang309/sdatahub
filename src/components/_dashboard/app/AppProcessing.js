import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.secondary.darker,
  backgroundColor: theme.palette.secondary.lighter
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
  color: theme.palette.secondary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.secondary.dark, 0)} 0%, ${alpha(
    theme.palette.secondary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

AppProcessing.propTypes = {
  processingTasks: PropTypes.number
};
export default function AppProcessing(props) {
  const { processingTasks } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <DirectionsRunIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{processingTasks}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        PROCESSING
      </Typography>
    </RootStyle>
  );
}
