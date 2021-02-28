import {React} from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titre : { 
      marginBottom : "200px",
      paddingTop : 200,
      marginLeft : 10,
      marginRight : 10,
      textAlign : "center",
    },
  }));

export default function Titre(props){
    const classes = useStyles();

    return(
        <div class={classes.titre}>
            <h2>{props.primary}</h2>
            <h3>{props.secondary}</h3>
        </div>
    )
}