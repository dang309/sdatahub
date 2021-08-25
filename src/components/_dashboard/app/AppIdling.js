import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
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
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

AppIdling.propTypes = {
  idlingTasks: PropTypes.number
};

export default function AppIdling(props) {
  const { idlingTasks } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <CancelPresentationIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{idlingTasks}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        IDLING
      </Typography>
    </RootStyle>
  );
}
