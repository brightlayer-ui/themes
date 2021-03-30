import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    buttonContainer: {
        width: '100%',
        paddingTop: theme.spacing(1),
    },
});

class Reports extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Stepper activeStep={1} orientation="horizontal" alternativeLabel>
                    <Step>
                        <StepLabel>Select Date</StepLabel>
                        {/* <StepContent>
                            <TextField
                                id="date"
                                label="Select Event Date"
                                type="date"
                                defaultValue="2019-01-01"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className={classes.buttonContainer}>
                                <Button disabled={true} className={classes.button}>
                                    Back
                                </Button>
                                <Button variant="contained" color="primary">
                                    Done
                                </Button>
                            </div>
                        </StepContent>                  
                        */}
                    </Step>
                    <Step>
                        <StepLabel>Name Report</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Export Report</StepLabel>
                    </Step>
                </Stepper>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(Reports);
