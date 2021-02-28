import {React, useEffect, useRef, useState} from 'react';
import { makeStyles, Box} from '@material-ui/core';
import Titre from '../components/Titre'

import Combava from '../components/ProjetCombava'
import Tetris from '../components/ProjetTetris'
import GMP from '../components/projetGMP'
import Covoit from '../components/ProjetCovoiturage'


import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


 const useStyles = makeStyles((theme) => ({
    root: {        
        position : 'relative',
        width : "100%",
    },
    gmp : {
      marginTop : "350px",
      position : 'relative',
      "@media (min-width: 1280px)" : {
        left : "18%",
        width : "25%",
      },
      "@media (max-width: 1279px)" : {
        width : "80%",
        margin : 'auto',
        marginBottom : 50,
      },

      marginBottom : 50,

      " & .boule" : {
        position : 'absolute',
        width : '150px',
        height : '150px',
        top : "-80px",
        left : "-120px",
        borderRadius : "50%",
        backgroundColor : 'rgba(128, 239, 160, 0.3)',
        zIndex : '-1',
      }
    },

    covoit : {
      position : 'relative',
      "@media (min-width: 1280px)" : {
        left : "53%",
        width : "25%",
      },
      "@media (max-width: 1279px)" : {
        width : "80%",
        margin : 'auto',
        marginBottom : 50,
      },
      " & .boule" : {
        position : 'absolute',
        width : '150px',
        height : '150px',
        top : "-25px",
        right : "-200px",
        borderRadius : "50%",
        backgroundColor : 'rgba(63,204,241,0.3)',
        zIndex : '-1',
      }
      //backgroundColor : "red",
    },


    combava : {
      position : 'relative',
      "@media (min-width: 1280px)" : {
        left : "23%",
        width : "25%",
      },
      "@media (max-width: 1279px)" : {
        width : "80%",
        margin : 'auto',
        marginBottom : 50,
      },

      marginBottom : 50,

      " & .boule" : {
        position : 'absolute',
        width : '150px',
        height : '150px',
        top : "-50px",
        left : "-75px",
        borderRadius : "50%",
        backgroundColor : 'rgb(255,250,205,0.6)',
        zIndex : '-1',
      }
      //backgroundColor : "red",
    },
    tetris : {
      position : 'relative',
      "@media (min-width: 1280px)" : {
        left : "47%",
        width : "25%",
      },
      "@media (max-width: 1279px)" : {
        width : "80%",
        margin : 'auto',
        marginBottom : 50,
      },
      " & .boule" : {
        position : 'absolute',
        width : '150px',
        height : '150px',
        top : "-25px",
        right : "-100px",
        borderRadius : "50%",
        backgroundColor : 'rgba(199,190,190,0.5)',
        zIndex : '-1',
      }
      //backgroundColor : "red",
    },


    lien_final : {
      fontSize : "1em",
      display : "flex",
      alignItems : "center",
      justifyContent : "center",
      marginTop : "25px",
      "& img" : {
        width : "1.5em",
        height : "1.5em",
        marginRight : "10px",
      },
      "& a" : {
        textDecoration : "none",
        color : "black",
      }

    },


    boule_debut : {
      position : 'absolute',
      width : '300px',
      height : '300px',
      top : "-20px",
      left : "-100px",
      borderRadius : "50%",
      backgroundColor : 'rgba(199,190,190,0.5)',
      zIndex : '-1',
    }
    
  }));

export default function Projet() {

    const classes = useStyles();

    let gmp = useRef(null);
    let boule_gmp = useRef(null);
    let gmp_card = useRef(null);

    let covoit = useRef(null);
    let boule_covoit = useRef(null);
    let covoit_card = useRef(null);

    let combava = useRef(null);
    let boule_combava = useRef(null);
    let combava_card = useRef(null);

    let tetris = useRef(null);
    let boule_tetris = useRef(null);
    let tetris_card = useRef(null);

    const vitesse_texte = -50;
    const vitessse_photo = 75;

    useEffect(() => {

      gsap.to(gmp_card, {
        yPercent: vitesse_texte,
        ease: "none",
        scrollTrigger: {
            trigger: gmp,
            scrub: true
        }, 
    });

    gsap.to(boule_gmp, {
        yPercent: vitessse_photo,
        ease: "none",
        scrollTrigger: {
            trigger: gmp,
            scrub: true
        }, 
    });

    gsap.to(covoit_card, {
      yPercent: vitesse_texte,
      ease: "none",
      scrollTrigger: {
          trigger: covoit,
          scrub: true
      }, 
  });

  gsap.to(boule_covoit, {
      yPercent: vitessse_photo,
      ease: "none",
      scrollTrigger: {
          trigger: covoit,
          scrub: true
      }, 
  });

      gsap.to(combava_card, {
          yPercent: vitesse_texte,
          ease: "none",
          scrollTrigger: {
              trigger: combava,
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true
          }, 
      });

      gsap.to(boule_combava, {
          yPercent: vitessse_photo,
          ease: "none",
          scrollTrigger: {
              trigger: combava,
              scrub: true
          }, 
      });
        
      gsap.to(tetris_card, {
        yPercent: vitesse_texte,
        ease: "none",
        scrollTrigger: {
            trigger: tetris,
            scrub: true
          }, 
      });

      gsap.to(boule_tetris, {
        yPercent: vitessse_photo,
        ease: "none",
        scrollTrigger: {
            trigger: tetris,
            scrub: true
        }, 
      });

    })

    return(
      
        <div class={classes.root}>

          <Titre
            primary="Mes Projets"
            secondary="Voici pour vous quelques projets dont je me suis occupé"
            />

          <div class={classes.boule_debut} />

          <Box class={classes.gmp} ref={el => gmp = el}>
            <div ref={el => gmp_card = el}>
              <GMP />
            </div>
            <div className="boule" ref={el => boule_gmp = el}/>
          </Box>

          <Box class={classes.covoit} ref={el => covoit = el}>
            <div ref={el => covoit_card = el}>
              <Covoit />
            </div>
            <div className="boule" ref={el => boule_covoit = el}/>
          </Box>

          <Box class={classes.combava} ref={el => combava = el}>
            <div ref={el => combava_card = el}>
              <Combava  />
            </div>
            <div className="boule" ref={el => boule_combava = el}/>
          </Box>

          <Box class={classes.tetris} ref={el => tetris = el}>
            <div ref={el => tetris_card = el}>
              <Tetris />
            </div>
            <div className="boule" ref={el => boule_tetris = el}/>
          </Box>


          <div class={classes.lien_final}>
            <img src="/images/github.png" />
            <a href="https://github.com/Sylvain999" >
              <b>Cliquez ici pour découvrir plus de projets</b>
            </a>
          </div>

      </div>
    )
}