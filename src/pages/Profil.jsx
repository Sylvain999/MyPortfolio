import React, {useEffect, useRef, useState} from 'react'
import { makeStyles} from '@material-ui/core';
import Parcours from '../components/Parcours'
import Titre from '../components/Titre'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
    root : {
        position : "relative" , 
        marginTop : 100,
        width : '100%',      
    },
    //profil
    profilEnsemble : {
        position : "relative",
        marginTop : "200px",
        marginBottom : "300px",
    },
    descDiv : {
       width : "60%",
       backgroundColor: "rgba(63,204,241,0.8)",
       position : "relative",
       "@media (min-width: 1280px)" : {
        left : "-20px",
        top : "0px",
       },
       padding : "10px",
       margin : "auto",
       "@media (max-width: 1279px)" : {
            width : "80%",
       }


    },
    img_profil : {
        width : "400px",
        position : "relative",
        top : "100px",
        left : "-40px"
    },
    //parcours
    parcoursEnsemble : {
        position : "relative",
        marginTop : "200px",
    },
    descParcours : {
        position : "relative",
        backgroundColor : "rgba(128, 239, 160, 0.8)",
        width : "70%",
        margin : "auto",
        padding : "10px",
        "& h2" : {
            textAlign : 'center',
        },
        "@media (max-width: 1279px)" : {
            width : "80%",
        }
    },
    //hobbies
    hobbies : {
        position : "relative",
        marginTop : "150px",
        width : "65%",
        "@media (min-width: 1280px)" : {
            left:"100px",
        },
        "@media (max-width: 1279px)" : {
            width : "80%",
            margin : "auto",
            marginTop : "300px"
        },
    },
    hobbies_desc : {
        width : "100%",
        backgroundColor : "rgba(216, 225, 83, 0.8)",
        padding : 10,
    },
    titre_hobbie : {
        display : "flex",
        flexDirection : "row",
        alignItems: "center",
        "& img" : {
            width : 30,
            height : 30,
            marginRight : 10
        },
    },
    cornemuse:{
        position : "absolute",
        right : "-30%",
        width : 400,
        zIndex : -1,
        top: "-20%"
    },
    paper : {
        display : "flex",
    },


    //Boules
    boule_bleu : {
        width: "500px",
        height:"500px",
        position : "absolute",
        top:"-400px",
        right:"-125px",
        borderRadius : "50%",
        backgroundColor : "rgba(114,216,243,0.8)",
        zIndex : -1,
    },
    boule_parcours : {
        width: "300px",
        height:"300px",
        position : "absolute",
        top:"-20px",
        right:"-50px",
        borderRadius : "50%",
        backgroundColor : "rgba(114,216,243,0.8)",
        zIndex : -1,
    },
    boule2_parcours : {
        width: "200px",
        height:"200px",
        position : "absolute",
        top:"-200px",
        left:"-10px",
        borderRadius : "50%",
        backgroundColor : "rgba(216, 225, 83, 0.6)",
        zIndex : -2,
    },

    cv :{
        textAlign : "center",
        marginTop : 30,
        "& a" : {
            textDecoration : "none",
            color : "black",
            fontWeight : "bold",
        }
        
    }
}));

export default function Profil(props){

    //const dog = useRef(null);

    let root = useRef(null);
    let boule_debut = useRef(null);

    let profil = useRef(null);
    let profil_desc = useRef(null);
    let photo_profil = useRef(null);

    let boule_parcours = useRef(null);
    let boule2_parcours = useRef(null);
    let parcours_desc = useRef(null);
    let parcours = useRef(null);

    let cornemuse = useRef(null);
    let hobbies = useRef(null);
    let hobbies_desc = useRef(null);
    
    const vitesse_texte = -50;
    const vitessse_photo = 65;

    const [i, setI] = useState(0);
    

    useEffect(() => {

        gsap.to(boule_debut, {
            yPercent: 100,
            ease: "none",
            scrollTrigger: {
                trigger: root,
                start: "top bottom", // the default values
                end: "bottom top",
                scrub: true
            }, 
        });

        gsap.to(profil_desc, {
            yPercent: vitesse_texte,
            ease: "none",
            scrollTrigger: {
                trigger: profil,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            }, 
        });

        gsap.to(photo_profil, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: profil,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            }, 
        });

        gsap.to(parcours_desc, {
            yPercent: vitesse_texte,
            ease: "none",
            scrollTrigger: {
                trigger: parcours,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            }, 
        });

        gsap.to(boule_parcours, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: parcours,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            },  
        });

        gsap.to(boule2_parcours, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: parcours,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            },  
        });

        gsap.to(hobbies_desc, {
            yPercent: vitesse_texte,
            ease: "none",
            scrollTrigger: {
                trigger: hobbies,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            }, 
        });

        gsap.to(cornemuse, {
            yPercent: vitessse_photo,
            ease: "none",
            scrollTrigger: {
                trigger: hobbies,
                // start: "top bottom", // the default values
                // end: "bottom top",
                scrub: true
            },  
        });

        
        
    })



    const classes = useStyles();

    return(
        <div class={classes.root} ref={el => root = el} id="profil">

            <Titre
                primary="Qui suis-je ?"
                secondary="C'est vrai, je ne me suis pas encore présenté !"
            />

            <div class={classes.boule_bleu} ref={el => boule_debut = el} />

            {/* Profil */}
            <div class={classes.profilEnsemble} ref={el => profil = el}>
                <img src="/images/photo_profil_cercle.png" alt="photo de profil"   
                    class={classes.img_profil} ref={el => photo_profil = el} />

                <div class={classes.descDiv} ref={el => profil_desc = el}>
                    <h2>Mon profil</h2>
                    <p>
                        Salut, je m'appelle Sylvain Frediani, et je suis un étudiant de 19 ans. Toujours curieux
                        et avide de connaissances, j'ai choisi d'orienter mes études vers le domaine informatique, 
                        fasciné par son pouvoir de création.
                    </p>
                    <p>
                        D'un tempérament calme en quasiment toute situation, je suis capable de travailler en équipe ou seul,
                        en m'adaptant aux différentes contraintes.
                    </p>
                    <p>
                        Je souhaite prochainement partir pour l'Écosse pour faire une année d'étude dans la cybersécurité,
                        pour revenir ensuite en France, dans le but d'obtenir un diplôme d'ingénieur.
                    </p>
                    <p class={classes.cv}>
                        <a href="/CV.pdf" target="_blank" >Cliquez ici pour voir mon CV</a> 
                    </p>
                </div>

            </div>

            <div class={classes.parcoursEnsemble} ref={el=> parcours= el}>
                <div class={classes.boule_parcours} ref={el => boule_parcours = el} />
                <div class={classes.boule2_parcours} ref={el => boule2_parcours = el} />
                <div class={classes.descParcours} ref={el=> parcours_desc = el}>
                    <h2>Mon parcours</h2>
                    <Parcours/>
                </div>
            </div>


            
            <div class={classes.hobbies} ref={el=> hobbies = el}>

                <img src="/images/musique_photo.png" alt="cornemuse" class={classes.cornemuse}
                ref={el=> cornemuse = el} />

                <div ref={el=> hobbies_desc = el} class={classes.hobbies_desc}>
                    <h2>Mes autres hobbies</h2>

                    <div class={classes.titre_hobbie}>
                        <img src="/images/musique.png" />
                        <h3> Musique </h3>
                    </div>
                    
                    <p>
                        Plongé depuis l'enfance dans le monde de la musique, j'ai eu la chance de pouvoir m'exercer de manière pointilleuse à 
                        3 instruments différents : la guitare (depuis mes 8 ans), le piano (depuis mes 10 ans), ainsi que la cornemuse écossaise
                        (depuis mes 14 ans).
                        <br />
                        J'ai eu d'autant plus la chance d'être membre d'un groupe de musique celtique, nommé <b>Lilith's Pipers</b> depuis mes 16 ans, 
                        en tant que sonneur.
                    </p>

                    <br/>

                    
                    <div class={classes.titre_hobbie}>
                        <img src="/images/histoire.png" />
                        <h3> Histoire </h3>
                    </div>
                    
                    <p>
                        Poussé par ma soif de connaissances, je me suis très intéressé au domaine de l'Histoire.
                        J'ai ainsi fait des recherches grâce à des ressources personnelles, venants de la médiathèque de Limoges,
                        ou venants d'Internet.
                        <br />
                        J'ai ainsi eu l'occasion de mettre au point plusieurs documents texte dans lesquels je réunis toutes les informations
                        que je souhaite garder en mémoire - ces documents prennent aujourd'hui au total un peu plus de 100 pages.
                    </p>

                    <br/>
                    
                    <div class={classes.titre_hobbie}>
                        <img src="/images/rpg.png" />
                        <h3> RPG papier </h3>
                    </div>
                    
                    <p>
                        Attiré par les mondes fantastiques depuis ma lecture de la trilogie de J.R.R. Tolkien, je me suis de plus en plus
                        intéressé à un genre de jeu assez particulier : celui du RPG papier.
                        <br />
                        Dans ce type de jeu, où un maître du jeu présente un monde qu'il a imaginé à des joueurs qui pourront évoluer
                        dedans, j'ai pu développer des compétences dans ma prise de parole et mon improvisation, par mes expériences
                        en tant que joueur et maître du jeu.
                    </p>

                    <br/>
                </div>

            </div>
            

            
        </div>
    )
}