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
                <Grid item xs={6}>g
                    <Card variant="outlined">
                        <CardContent>
                            <form className={classes.form} noValidate autoComplete="off">
                                <TextField required id="filled-required" label="Name:" variant="outlined" />
                                <TextField required id="standard-basic" label="CNIC #" variant="filled"/>
                                <TextField required id="standard-basic" label="Mobile #" variant="filled"/>
                                <TextField required id="standard-basic" label="Telephone #" variant="filled"/>
                                <TextField required id="standard-basic" label="Date of Birth:" variant="filled"/>
                                <TextField required id="standard-basic" label="CNIC Expiry Date:" variant="filled"/>
                                <TextField required id="standard-basic" label="Gender:" variant="filled"/>
                                <TextField required id="filled-textarea"label="Current Address"
                                  placeholder="Placeholder"
                                  multiline variant="filled" />
                                <TextField required id="filled-textarea"label="Permanent Address"
                                  placeholder="Placeholder"
                                  multiline variant="filled" />
                                <TextField required id="standard-basic" label="Nationality" variant="filled"/>
                                <TextField required id="standard-basic" label="City:" variant="filled"/>
                                <TextField required id="standard-basic" label="Tehsil:" variant="filled"/>
                                <TextField required id="standard-basic" label="District:" variant="filled"/>
                                <TextField required id="standard-basic" label="Province:" variant="filled"/>
                                <TextField id="standard-basic" label="NTN # (if any)" variant="filled"/>
                                <TextField id="standard-basic" label="E-mail: (if any)" variant="filled"/>
                                <TextField id="standard-basic" label="Qualification:" variant="filled"/>
                                <TextField required id="standard-basic" label="Exclusivity:" variant="filled"/>
                                <TextField required id="standard-basic" label="Father's Name:" variant="filled"/>
                                <TextField required id="standard-basic" label="Mother's Name:" variant="filled"/>
                                <TextField required id="standard-basic" label="NOK Name:" variant="filled"/>
                                <TextField required id="standard-basic" label="NOK CNIC #" variant="filled"/>
                                <TextField required id="standard-basic" label="NOK Relationship:" variant="filled"/>
                                <TextField required id="standard-basic" label="NOK Contact #" variant="filled"/>
                                <TextField required id="standard-basic" label="NOK Address:" variant="filled"/>
                                <TextField id="standard-basic" label="Bank Name:" variant="filled"/>
                                <TextField id="standard-basic" label="Branch:" variant="filled"/>
                                <TextField id="standard-basic" label="Account Title:" variant="filled"/>
                                <TextField id="standard-basic" label="Account #" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Type:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Name:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Owner Name:" variant="filled"/>
                                <TextField required id="filled-textarea"label="Business Address"
                                  placeholder="Placeholder"
                                  multiline variant="filled" />
                                <TextField required id="standard-basic" label="Business City:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Tehsil:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business District:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Province:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Contact #" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Latitude:" variant="filled"/>
                                <TextField required id="standard-basic" label="Business Longitude:" variant="filled"/>
                                <TextField required id="standard-basic" label="Avg Monthly Income:" variant="filled"/>
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