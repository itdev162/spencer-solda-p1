import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Grid from './components/Grid'
import './App.css';
import PetsIcon from '@mui/icons-material/Pets';
import ElderlyIcon from '@mui/icons-material/Elderly';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';


const theme = createTheme({
palette: {
  primary: {
    main: "#2e1667",
  },
  secondary: {
    main: "#c7d8ed",
  },
},
typography: {
  fontFamily: [
    'Roboto'
  ],
  h4: {
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '2rem',
  },
  h5: {
    fontWeight: 100,
    lineHeight: '2rem',
  },
},
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function App() {
  const classes = styles(); 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar/>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<PetsIcon style={{fill: "#4360A6", height:"100", width:"100"}}/>}  title="" btnTitle="Adopt an Animal" />
          <Grid icon={<EventIcon style={{fill: "#D05B2D", height:"100", width:"100"}}/>}  title="" btnTitle="Events"/>
          <Grid icon={<ElderlyIcon style={{fill: "#449A76", height:"100", width:"100"}}/>} title="" btnTitle="Animal Therapy for Seniors"/>
          
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<LocationOnIcon style={{fill: "#5EA780", height:"100", width:"100"}}/>}  title="" btnTitle="Our Locations"/>
          <Grid icon={<PhoneEnabledIcon style={{fill: "#E69426", height:"100", width:"100"}}/>}  title="" btnTitle="Call Us"/>
          <Grid icon={<LanguageIcon style={{fill: "#2EA09D", height:"100", width:"100"}}/>} title="" btnTitle="Social Media Links"/>
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;
