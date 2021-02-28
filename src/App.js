import React from 'react'
import { makeStyles } from '@material-ui/core';
import Accueil from './pages/Accueil'
import Projet from './pages/Projet';
import Competences from './pages/Competences';
import Contact from './pages/Contact';


import Profil from './pages/Profil'


import './styles/App.css';




function App() {

  const useStyles = makeStyles((theme) => ({
    root : {
      overflowX : 'hidden'
      //backgroundColor : 'yellow',
    },
    
  }));
  
  const classes = useStyles();

  return (
    <div class={classes.root}>
      <Accueil/>
      <Profil/>
      <Projet/>
      <Competences/>
      <Contact/>
    </div>
  );
}

export default App;
