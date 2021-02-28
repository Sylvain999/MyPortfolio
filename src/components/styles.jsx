import React from 'react';
import {makeStyles} from '@material-ui/core';


export const useStylesCard = makeStyles((theme) => ({
    root : {
       //backgroundColor : "rgb(245, 245, 245)"
    },
    titre : {
        textAlign : 'center',
    }
}));


export const useStylesDialog = makeStyles((theme) => ({
    titre : {
        textAlign : "center",
        backgroundColor : '#2F4F4F',
        color : 'white',
        "& *" :{
            margin : 0,
        }
    },
    content : {
        "@media (min-width: 1280px)" : {
            display: 'flex',
        }
    },
    gauche : {
        width : '30%',
        "@media (max-width: 1279px)" : {
            margin : "auto",
        }
    },
    description : {
        textAlign : 'justify',
        padding : '10px'
    },
    outils : {
        display: 'flex',
        alignItems : "center",
        '& img': {
           width: 50,
           marginRight : 10,
        }
    },
    img : {
        width : '300px',
        backgroundColor : "red"
    }
}));