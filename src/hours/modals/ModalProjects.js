import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        minWidth: '100%'
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
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cover: {
        paddingTop: '40%',
        width: '80%',
    },
    grid:{
       width:'100%' 
    }
}));

const cards = [1, 2, 3, 4];

export const ModalProjects = () => {

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
            <Fab size="small" aria-label="add" color="primary" onClick={handleOpen}><AssignmentIcon /></Fab>
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
                                    Proyecto asignados
                                </Typography>
                                {/* End hero unit */}
                                <Grid container spacing={4} className={classes.grid}>

                                    {cards.map((card) => (
                                        <Grid item key={card} xs={12} sm={6} md={4}>
                                            <Card className={classes.root}>
                                                <div className={classes.details}>
                                                    <CardContent className={classes.content}>
                                                        <Typography component="h5" variant="h5">
                                                            Proyecto {card}
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="textSecondary">
                                                        is section to descisis section to describe the content is section to describe the content.
                                                        </Typography>
                                                    </CardContent>
                                                </div>
                                                <CardMedia
                                                    className={classes.cover}
                                                    image="https://source.unsplash.com/random"
                                                    title="Live from space album cover"
                                                />
                                            </Card>


                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </main>

                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
