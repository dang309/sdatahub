import ListAltIcon from '@material-ui/icons/ListAlt';
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
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
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
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

AppTotal.propTypes = {
  totalTasks: PropTypes.number
};

export default function AppTotal(props) {
  const { totalTasks } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <ListAltIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{totalTasks}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        TOTAL
      </Typography>
    </RootStyle>
  );
}
