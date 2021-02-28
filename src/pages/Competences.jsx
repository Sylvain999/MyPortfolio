import {React, useRef, useEffect} from 'react';

import { makeStyles, Paper, Tooltip, Box, Divider } from '@material-ui/core';
import Titre from '../components/Titre'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
    root: {
        position : 'relative',
        marginTop : "100px"
    },
    titre : {
        marginBottom : "300px"
    },
    langages : {
        "@media (min-width: 1280px)" : {
            width : 400,
            position : 'relative',
            left : '10%',
        },
        "@media (max-width: 1279px)" : {
            width : "85%",
            margin : 'auto',
            marginBottom : '50px'
        }
        
    },
    interieur : {
        padding : 20,
        "& > *" : {
            marginBottom : 10
        },
        "& h3":{
            marginBottom : 30
        },
        "& i" : {
            color :"gray",
            fontSize : "0.75em"
        }
    },
    bar : {
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        height: 40,
        "& img" : {
            width : 30,
            //float : 'left',
        },
    },
    cercles_compet : {
        width : "100%",
        display : "flex",
        justifyContent : "space-evenly",
        "& div" : {
            border : "2px solid rgb(114,216,243)",
            borderRadius : "50%",
            width : 20,
            height : 20,
        }
    },
    full : {
        backgroundColor : "rgb(114,216,243)"
    },
    autresCompet : {
        
        "@media (min-width: 1280px)" : {
            width : "30%",
            position : 'absolute',
            top : '500px',
            left : '55%',
        },
        "@media (max-width: 1279px)" : {
            width : '85%',
            margin : 'auto',
            marginBottom : "50px"
        }
    },

    langues : {
        "@media (min-width: 1280px)" : {
            width : "25%",
            position : 'absolute',
            top : '900px',
            left : '45%',
        },
        "@media (max-width: 1279px)" : {
            width : '85%',
            margin : 'auto',
        }
    },
    boule_droite : {
        position : "absolute",
        top : "230px",
        right : -10,
        width : 150,
        height : 150,
        backgroundColor : "rgba(114,216,243,0.8)",
        borderRadius : "50%",
        zIndex : -1,
    },

    boule_gauche : {
        position : "absolute",
        top : 600,
        left : -100,
        width : 300,
        height : 300,
        backgroundColor : "rgba(216, 225, 83, 0.5)",
        borderRadius : "50%",
        zIndex : -1,
    },

    boule_bas : {
        position : "absolute",
        top : 900,
        right : 10,
        width : 200,
        height : 200,
        backgroundColor : "rgba(128, 239, 160, 0.3)",
        borderRadius : "50%",
        zIndex : -1,
    }




  }));

function BarCompetence(props){
    const classes = useStyles();

    return(
        
            <Box class={classes.bar}>
                <Tooltip 
                title={props.nom + ' '}
                placement="left"
                >
                    <img src={"/images/" + props.nom + '.png'} alt={"image " + props.nom} />
                </Tooltip>
                <div class={classes.cercles_compet}>
                    <div class={props.value >= 1 ? classes.full : null} />
                    <div class={props.value >= 2 ? classes.full : null} />
                    <div class={props.value >= 3 ? classes.full : null} />
                    <div class={props.value >= 4 ? classes.full : null} />
                    <div class={props.value >= 5 ? classes.full : null} />
                    <div class={props.value >= 6 ? classes.full : null} />
                </div>
                
                
            </Box>
        
    )
    
};

export default function Competences(){
    const classes = useStyles();

    let root = useRef(null)

    let langages_prog = useRef(null)
    let projet = useRef(null)
    let langues = useRef(null)

    let boule_gauche =useRef(null)
    let boule_droite = useRef(null)
    let boule_bas = useRef(null)

    const vitesse_texte = -50;
    const vitessse_photo = 75;

    useEffect(() => {

        gsap.to(langages_prog, {
            yPercent: vitesse_texte,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                scrub: true
            }, 
        });

        gsap.to(projet, {
            yPercent: vitesse_texte,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                scrub: true
            }, 
        });

        gsap.to(langues, {
            yPercent: vitesse_texte,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            }, 
        });

        gsap.to(boule_gauche, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                scrub: true
            }, 
        });

        gsap.to(boule_droite, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                scrub: true
            }, 
        });

        gsap.to(boule_bas, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                scrub: true
            }, 
        });
    })
    
    
    return(
        <div class={classes.root} ref={el => root = el}>
            <div class={classes.titre}>
                <Titre 
                    primary="Mes compétences"
                    secondary="Mes points forts et faibles dans le domaine informatique"
                />
            </div>

            <div class={classes.boule_droite} ref={el => boule_droite = el}/>

            <div class={classes.boule_gauche} ref={el => boule_gauche = el}/>
            
            <div class={classes.boule_bas} ref={el => boule_bas = el}/>
            

           <div class={classes.langages} ref={el => langages_prog = el}>
                <Paper elevation={2}>
                    <div class={classes.interieur}>
                        <h3>Langages et Frameworks : </h3>

                        <BarCompetence nom="html" value={5}/>
                        <BarCompetence nom="css" value={5}/>
                        <BarCompetence nom="javascript" value={3}/>
                        <BarCompetence nom="php" value={2}/>
                        <BarCompetence nom="java" value={4}/>
                        <BarCompetence nom="langage_C" value={2}/>
                        <BarCompetence nom="rust" value={4}/>
                        <BarCompetence nom="kotlin" value={1}/>
                        <Divider/>
                        <BarCompetence nom="reactJs" value={4}/>
                        <BarCompetence nom="nodeJS" value={3}/>
                        <i>L'échelle de compétences est comprise entre 1 (débutant) et 6 (expert)</i>
                    </div>
                    
                </Paper>               
            </div>


            <div class={classes.autresCompet} ref={el => projet = el}>
                <Paper elevation={2}>
                    <div class={classes.interieur}>
                        <h3>Gestion de projets </h3>
                        <br/>
                        <p>
                            <b>Méthodes agiles : </b> 
                            Bonne expérience
                        </p>
                        <p>
                            <b>Cahier des charges : </b> 
                            Quelques expériences
                        </p>
                        <p>
                            <b>Git : </b>
                            À l'aise
                        </p>
                    </div>
                </Paper>               
            </div>

            <div class={classes.langues} ref={el => langues = el}>
                <Paper elevation={2}>
                    <div class={classes.interieur}>
                        <h3>Langues </h3>
                        <br/>
                        <p>
                            <b>Français : </b> 
                            Langue natale
                        </p>
                        <p>
                            <b>Anglais : </b> 
                            Courant
                        </p>
                        <p>
                            <b>Italien : </b>
                            Vocabulaire Professionnel
                        </p>
                    </div>
                </Paper>               
            </div>
            
        </div>
    )
}