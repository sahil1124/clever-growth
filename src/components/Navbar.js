import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{ background: '#cf0000' }} position="static">
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        CLEVER GROWTH
          </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                    <Button><WhatsAppIcon style={{ color: 'green' }} /></Button>
                    <Button><SearchIcon style={{ color: 'white' }} /></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
