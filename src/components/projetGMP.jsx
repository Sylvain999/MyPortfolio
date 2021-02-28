import {React, useState} from 'react';
import { Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';

import {useStylesCard, useStylesDialog} from './styles'


export default function GMPCard(){
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
                                GMP Projet tutoré
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Projet tutoré de ma deuxième année de DUT Informatique.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <GMPDialog open={open} handleClose={handleClose}/>
        </Box>
    )
}

function GMPDialog(props){

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
                    <h2>GMP Projet tutoré</h2>
                    <h4>Un projet d'un an</h4>
                </DialogTitle>
                <DialogContent class={classes.content}>
                    <div class={classes.gauche}>
                        <List >
                            <ListItem>
                                <ListItemIcon>
                                    <PeopleAltIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="5 personnes"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="~ 1 an"
                                />
                            </ListItem>
                            <ListItem button component="a"
                                href="https://github.com/Sylvain999/GMP">
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
                            Dans le cadre de la deuxième année de DUT Informatique, un projet tutoré encadré par des professeurs
                            est organisé pour des groupes entre 4 et 5 étudiants, où l'on nous affecte un problème donné par
                            un véritable client.
                        </p>
                        <p>
                            Dans mon cas, j'étais dans un groupe constitué de 5 personnes. Notre client, un professeur du département
                            GMP (Génie Mécanique et Productique) du même IUT que le notre, nous a confié le projet de faire une
                            application web dans lequel il pourrait gérer des exercices personnalisés pour ces étudiants.
                        </p>
                        <p>
                            Ce projet m'a permis de mettre en pratique mes compétences de gestion de projet, mais aussi d'apprendre
                            à utiliser le framework React.js, dont je n'avais jamais encore eu l'opportunité de découvrir.
                        </p>
                        <h3>Langages de programmation et Outils</h3>
                        <div class={classes.outils}>
                            <img src='/images/reactJs.png' alt="reactJs.png"/>
                            <img src='/images/nodeJs.png' alt="nodeJs.png"/>
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