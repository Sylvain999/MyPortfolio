import {React, useState} from 'react';
import { makeStyles, TextField, Paper, Button, Icon } from '@material-ui/core';
import Titre from '../components/Titre'
import emailjs from 'emailjs-com';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom : 40
    },
    formulaire : {
        padding : 20,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        height : 300,
        transitionDuration: "4s",
    },
    ensemble :{
        "@media (min-width: 1280px)" : {
            width : 500,
        },
        "@media (max-width: 1279px)" : {
            width : "90%",
        },
        margin : props => props.margin,
        marginBottom: 20,
    },
    titre : {
        textAlign : "center",
        paddingTop : "20px"
    },
    button : {
        textAlign : "center",
    },
    fiche : {
        display: 'flex',
        flexDirection : 'column'
        
    },
    lien_contacts : {
        width : "30%",
        margin : "auto",
        display : "flex",
        justifyContent : "space-between",
        "& img" : {
            width : "50px",
            height : "50px",
        },
        marginTop : "40px",
        "@media (max-width: 1279px)" : {
            width : "80%",
        }
    },
    main : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        "@media (max-width: 1279px)" : {
            flexDirection : "column",
        },
    },
    envoye : props => ({
        transitionDuration: "4s",
        display : props.display,
        textAlign : 'center'
    })
  }));

export default function Contact(){

    const [styles_props, setStyles] = useState({
        display : "none",
        margin : "auto",
    })
    const classes = useStyles(styles_props);

    const [nom, setNom] = useState('')

    const [mail, setMail] = useState('')

    const [message, setMessage] = useState('')

    function sendEmail() {

        let obj = {
            name : nom,
            mail : mail,
            message : message,
        }

        setStyles({display : "block", margin : "0px 20px 20px 0px"})        
        
        emailjs.send('service_ws4hw5x', 'template_qhs6nyi', obj, 'user_1hzj4G5qtPnuzoWrSl48l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                
            })
            
        setNom('')
        setMail('')
        setMessage('')

      }
    
    return(
        <div class={classes.root}>
            <Titre 
                primary="Me contacter"
                secondary="Je me ferai un plaisir de vous répondre"
            />
            <div class={classes.main}>
                <div class={classes.ensemble}>
                    <Paper elevation={2}>
                        <div class={classes.fiche}>
                            <h2 class={classes.titre}>Formulaire</h2>
                            <div class={classes.formulaire}>
                                <TextField
                                    label="Votre nom"
                                    value={nom}
                                    placeholder="ex : François PREMIER"
                                    margin="dense"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    onChange={e => setNom(e.target.value)}
                                />
                                <TextField
                                    label="Votre adresse mail"
                                    placeholder="ex : francois.premier@gmail.com"
                                    value={mail}
                                    
                                    margin="dense"
                                    InputProps={{
                                        type : "email"
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => setMail(e.target.value)}
                                    fullWidth
                                />
                                <TextField 
                                    label="Votre message"
                                    placeholder="Laissez ici votre plus beau message !"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    multiline
                                    variant="outlined"
                                    margin="dense"
                                    rows={4}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon/>}
                                disabled={nom === '' || !mail.includes("@") || message === '' }
                                onClick={e => sendEmail()}
                            >
                                Envoyer votre message
                            </Button>
                        </div>
                    </Paper>
                </div>

                <div class={classes.envoye}>
                    <b>Votre message a bien été envoyé !</b>
                    <h1>À bientôt !</h1>
                </div>
                
                
            </div>

            <div class={classes.lien_contacts}>
                <a href="mailto:sylvain.frediani@gmail.com" ><img src="/images/mail.png" /> </a>
                <a href="https://linkedin.com/in/sylvain-frediani-a0b9951b7" > <img src="/images/linkedin.png" />  </a>
                <a href="https://github.com/Sylvain999" > <img src="/images/github.png" /> </a>
            </div>
        </div>
    )
}




