import {React, useState} from 'react';
import { Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';

import {useStylesCard, useStylesDialog} from './styles'


export default function TetrisCard(){
    const classes = useStylesCard();

    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    

    return(
        <Box>
            <Paper elevation={2}>
                <Card class={classes.root} onClick={handleOpen}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="image"
                        image="/images/tetris.png"
                        title="Combava"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" class={classes.titre}>
                                Tetris
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Projet personnel réalisé au cours du premier confinement.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <TetrisDialog open={open} handleClose={handleClose}/>
        </Box>
    )
}

function TetrisDialog(props){

    const classes = useStylesDialog();

    return(

            <Dialog 
                open={props.open}
                onClose={props.handleClose}
                fullWidth={true}
                maxWidth="lg"
                //class={classes.root}
                >
                <DialogTitle class={classes.titre}>
                    <h2>Tetris</h2>
                    <h4>Recréation du jeu populaire</h4>
                </DialogTitle>
                <DialogContent class={classes.content}>
                    <div class={classes.gauche}>
                        <List >
                            <ListItem>
                                <ListItemIcon>
                                    <PeopleAltIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="2 personnes"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="~ 1 semaine"
                                />
                            </ListItem>
                            <ListItem button component="a"
                                href="https://github.com/Sylvain999/Tetris">
                                <ListItemIcon>
                                    <GitHubIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Cliquez ici"
                                    
                                />
                            </ListItem>
                            
                        </List>
                    </div>
                    <div class={classes.description}>
                        <h3>Description</h3>
                        <p>
                            J'ai eu l'occassion de passer le premier confinement de 2020 avec un ami de la même formation.
                            Venants de découvrir de nouvelle technologie - programmation orientée objet - nous voulions mettre
                            en pratique nos nouvelles compétences en travaillants ensemble sur la réalisation du jeu quasiment
                            mythique de Tetris.
                        </p>
                        <p>
                            Néanmoins, quelques mois après avoir terminé ce projet, je me suis rendu compte que nous avions
                            utilisé de nombreuses mauvaises pratiques. Ainsi, j'ai décidé de retravailler sur ce projet, cette
                            fois seul, en utilisant cette fois-ci de nouvelles techniques - ex : design patterns.
                        </p>
                        <h3>Langages de programmation et Outils</h3>
                        <div class={classes.outils}>
                            <img src='/images/java.png' alt="java.png"/>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>
                        Quitter la fiche
                    </Button>
                </DialogActions>
            </Dialog>
           
    )
}