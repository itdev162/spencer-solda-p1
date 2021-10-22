import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import animallogo from '../animallogo.png'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        '@media (max-width:780px)': { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        '@media (max-width:780px)': { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#216cae"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})


export default function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={animallogo} className={classes.logo}/> 
                <img src={animallogo} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Mammals
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Fish
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Birds
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Reptiles 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Amphibians 
                </Typography>
                <CustomBtn txt="Support"/>
            </Toolbar>
    )
}
