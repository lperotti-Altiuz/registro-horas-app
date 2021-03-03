import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { useCounter } from '../../hooks/useCounter';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  add: {
    margin: theme.spacing(1),
    color: 'white'
  },
  remove: {
    margin: theme.spacing(1),
    color: 'white'
  },
  count: {
    color: 'black',
    backgroundColor: 'white',
    "&:hover": {
      backgroundColor: "transparent"
    },
    pointerEvents: 'none'
  }
}));

export const FormHour = () => {

  const classes = useStyles();

  const { counter, increment, decrement} = useCounter(0);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro de Hora
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Actividad</InputLabel>
                <Select
                  native
                  label="Actividad"
                  id="actividad"
                  name="actividad"
                >
                  <option value={10}>Documentación</option>
                  <option value={20}>Desarrollo</option>
                  <option value={30}>Pruebas</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="asunto"
                label="Asunto"
                name="asunto"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                required
                id="descripcion"
                label="Descripción"
                name="descripcion"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Hora Extra"
              />
            </Grid>
          </Grid>
          <Grid className={classes.margin}>
            <Fab size="medium" color="secondary" aria-label="remove" onClick={decrement} className={classes.remove}>
              <RemoveIcon />
            </Fab>
            <IconButton aria-label="delete" className={classes.count} >
              {counter}
            </IconButton>
            <Fab size="medium" aria-label="add" color="primary" onClick={increment} className={classes.add}>
              <AddIcon />
            </Fab>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
        </form>
      </div>
    </Container>
  )
}
