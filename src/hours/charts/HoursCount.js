import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
  });

export const HoursCount = () => {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Total Horas Registradas
        </Typography>
        <Typography component="p" variant="h4">
          170
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
          Mes de Abril
        </Typography>
      </React.Fragment>
    );
}
