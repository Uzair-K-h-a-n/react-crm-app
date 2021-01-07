import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>({
    root: {
      minWidth: 275,
      flexGrow: 1,
      margin: 'auto',
     
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));


const Registration = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
            <Grid container>
                <Grid item xs={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <form className={classes.form} noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Standard" />
                                <TextField id="standard-basic" label="Standard" />
                                <TextField id="standard-basic" label="Standard" />
                                <TextField id="standard-basic" label="Standard" />
                                <TextField id="standard-basic" label="Standard" />
                                <TextField id="standard-basic" label="Standard" />
                                <TextField id="standard-basic" label="Standard" />
                            </form>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary">Submit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
    );
}

export default Registration;