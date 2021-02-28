import {React, useState} from 'react';
import { Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';

import {useStylesCard, useStylesDialog} from './styles'


export default function CovoiturageCard(){
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
                        image="/images/gmp_fond.png"
                        title="Combava"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" class={classes.titre}>
                                Covoiturage
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Projet du DUT Informatique pour créer un site web de covoiturage.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <CovoiturageDialog open={open} handleClose={handleClose}/>
        </Box>
    )
}

function CovoiturageDialog(props){

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
                    <h2>Covoiturage</h2>
                    <h4>Créer un site pour apprendre un langage</h4>
                </DialogTitle>
                <DialogContent class={classes.content}>
                    <div class={classes.gauche}>
                        <List >
                            <ListItem>
                                <ListItemIcon>
                                    <PeopleAltIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="1 personne"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="~ 2 mois"
                                />
                            </ListItem>
                            <ListItem button component="a"
                                href="https://github.com/Sylvain999/Covoituragephp">
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
                            Dans le cadre de ma deuxième année de DUT Informatique, notre professeur nous enseignant le langage
                            de php a choisi de nous apprendre à utiliser ce langage en se mettant directement dans la pratique.
                        </p>
                        <p>
                            En effet, en nous donnant un carnet de plusieurs pages répertoriant les consignes, notre professeur 
                            nous a demandé de créer avec son aide un site web tout à fait fonctionnel en php, en utilisant des
                            méthodes plus ou moins compliqué.
                        </p>
                        <h3>Langages de programmation et Outils</h3>
                        <div class={classes.outils}>
                            <img src='/images/html.png' alt="html.png"/>
                            <img src='/images/css.png' alt="css.png"/>
                            <img src='/images/php.png' alt="php.png"/>
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