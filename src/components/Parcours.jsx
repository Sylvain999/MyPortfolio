import React from 'react';

import { makeStyles, withStyles, Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';
import {ArrowForwardIosIcon, SettingsIcon, GroupAddIcon, VideoLabelIcon} from '@material-ui/icons/ArrowForwardIos';
import clsx from 'clsx';

import PropTypes from 'prop-types';

  const useStyles = makeStyles({
    root : {
      width : '100%',
      //backgroundColor : "red",
      display : "flex",
      flexDirection : 'column',
      alignContent : "center",
    },
    active: {
      backgroundColor : "red",
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        
        backgroundColor : 'gray',
    },
    date_lieu : {
      textAlign : "center",
      marginBottom : 20
    },
    lycee : {
      width : "40%",
      margin : "auto",
      backgroundColor : "rgba(255,255,255,.5)",
      padding : "10px",
      borderRadius : "20px",
      marginBottom : "50px",
      "@media (min-width: 1280px)" :{
        marginLeft : "20%",
      },
      "& h3" : {
        textAlign : "center",
      },
      "& h5" : {
        textAlign : "center",
        fontStyle: "italic",
      },
      "@media (max-width: 1279px)" : {
        width : "90%",
      },
    },
    dut : {
      width : "40%",
      margin : "auto",
      backgroundColor : "rgba(255,255,255,0.75)",
      padding : "10px",
      borderRadius : "20px",
      

      "@media (min-width: 1280px)" :{
        marginRight : "20%",
      },
      
      "& h3" : {
        textAlign : "center",
      },
      "& h5" : {
        textAlign : "center",
        fontStyle: "italic",
      },
      "@media (max-width: 1279px)" : {
        width : "90%",
      },
    }

  });



export default function Parcours(){

    const classes = useStyles();

    return(
        <div class={classes.root}> 
            <div class={classes.lycee}>
              <h3>Baccalaureat Scientifique</h3>
              <p class={classes.date_lieu}>
                <b>2019</b>
                <br />
                <b>Lycée Français d'Irlande, DUBLIN</b>
              </p>
              
              <p>
                Titulaire d'un Baccalaureat de série Scientifique SVT, spécialité mathématiques, avec la mention Très Bien.
              </p>
            </div>
            <div class={classes.dut}>
              <h3>DUT Informatique</h3>
              <p class={classes.date_lieu}>
                <b>2019-2021</b>
                <br />
                <b>IUT du Limousin, LIMOGES</b>
              </p>
              <p>
                Formation dans le domaine informatique, insistant sur la partie pratique de l'apprentissage, sans dénigrer 
                des matières plus générales.
              </p>
            </div>
        </div>
    )
}
