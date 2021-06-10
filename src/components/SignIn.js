import React, {useState} from 'react';
import {login} from '../utils';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch',

        },
        '& > *': {
            margin: theme.spacing(1),
        },

    },
}));


const SignIn = (props) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const classes = useStyles();

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className="login-data">
                <label>
                    <TextField value={username}
                        className="textfield-1" required id="standard-required"
                        label="Enter your login" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    <TextField
                        value={password} id="standard-password-input" label="Password" type="password"
                        autoComplete="current-password" required onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <Button onClick={() => handleLogin()} type="submit" className="button-pad"
                        variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </form>
    );
};

export default SignIn;


