import React from 'react';
import { makeStyles } from '@material-ui/core';
//import { Link, animateScroll as scroll } from "react-scroll";

import '../styles/Accueil.css';


export default function Accueil(){

    const useStyles = makeStyles((theme) => ({
        root : {
            textAlign : "center",
            padding : "250px 10px 50px 10px",
            //backgroundColor : 'green'
        },
        scroll : {
            marginTop : "100px",
            marginBottom : "150px",
            cursor : "pointer",
            "& *" : {
                padding : 0,
                margin : 0
            },
            "& img" : {
                width : 40,
                height : 40
            },
        },
        image_profil : {
            width : "500px"
        }
    }));

    const classes = useStyles();

    return(
        <div class={classes.root}>
            <h1>Hello World ! Moi c'est Sylvain Frediani !</h1>
            <h3>Étudiant en Informatique</h3>
            
            <div class={classes.scroll}>
            {/* <Link
                activeClass="active"
                to="profil"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                    <img src="/images/scroll.png" alt="scroll" />
                </Link> */}
            </div>
        </div>
    )
}