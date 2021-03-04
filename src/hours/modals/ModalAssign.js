import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import QueueIcon from '@material-ui/icons/Queue';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: '4%'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre', headerName: 'Nombre', width: 160 },
    { field: 'apellido', headerName: 'Apellido', width: 160 },
    {field: 'email', headerName: 'Email',width: 250},
    { field: 'estado',headerName: 'Estado',width: 160,},
];

const rows = [
    { id: 1, nombre: 'Jon', apellido: 'Snow', email: 'jsnow@altiuz.com', estado: 'Activo' },
    { id: 2, nombre: 'Cersei', apellido: 'Lannister', email: 'clannister@altiuz.com', estado: 'Activo' },
    { id: 3, nombre: 'Jaime', apellido: 'Lannister', email: 'jlannister@altiuz.com', estado: 'Activo' },
    { id: 4, nombre: 'Arya', apellido: 'Stark', email: 'astark@altiuz.com', estado: 'Activo' },
    { id: 5, nombre: 'Daenerys', apellido: 'Targaryen', email: 'dtarg@altiuz.com', estado: 'Activo' },
    { id: 6, nombre: 'Melisandre', apellido: null, email: 'mel@altiuz.com', estado: 'Activo' },
];


export const ModalAssign = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab size="small" aria-label="add" color="primary" onClick={handleOpen}><QueueIcon /></Fab>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <main>
                            <Container className={classes.cardGrid} >
                                <Typography component="h5" variant="h5" className={classes.title}>
                                   Asignación
                            </Typography>
                                <div style={{ height: 400, width: 900 }}>
                                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                                </div>
                                <form>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                            Asignar/Desasignar
                            </Button>
                        </form>
                            </Container>
                        </main>

                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
