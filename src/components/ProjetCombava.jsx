import {React, useState} from 'react';
import { Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@material-ui/core';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GitHubIcon from '@material-ui/icons/GitHub';

import {useStylesCard, useStylesDialog} from './styles'


export default function CombavaCard(){
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
                        image="/images/combava_fond.png"
                        title="Combava"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" class={classes.titre}>
                                Combava
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Projet réalisé en 1ère année de DUT Informatique, dans lequel un site web évenementiel devait être
                                crée
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>

            <CombavaDialog open={open} handleClose={handleClose}/>
        </Box>
    )
}

function CombavaDialog(props){

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
                    <h2>Combava</h2>
                    <h4> Un site pour une association</h4>
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
                                    primary="~ 1 mois"
                                />
                            </ListItem>
                            <ListItem button component="a"
                                href="https://github.com/Sylvain999/Combava">
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
                            Au cours de ma première année de formation de DUT Informatique, j'ai eu l'occasion de travailler avec
                            un camarade sur un site web évenementiel. Sur ce-dernier, nous devions présenter une association
                            de producteurs de citronnade.
                        </p>
                        <p>
                            Ce projet, pour un client fictif, devait être fait en binome. En s'appuyant sur une charte 
                            graphique précise (étant très... jaune), nous devions créer de A à Z la page web.
                        </p>
                        <p>
                            Ce travail nous a ainsi permis de mettre en pratique nos compétences sur la mise en place d'un
                            site ergonome.
                        </p>
                        <h3>Langages de programmation et Outils</h3>
                        <div class={classes.outils}>
                            <img src='/images/html.png' alt="html.png"/>
                            <img src='/images/css.png' alt="css.png"/>
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