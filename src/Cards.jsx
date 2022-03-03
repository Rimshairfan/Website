import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({

  title:{
    fontFamily:'Nunito',
    fontWeight:'bold',
    fontSize:'7rem '
  },
  root:{

    background:'rgba(0,0,0,0.5)'
  }
});
export default function Cards() {
  const classes = useStyles();

  return (
    
    <Card sx={{ maxWidth: 445}}   className='classes.root'>
      <CardMedia
        component="img"
        height="245"
        image={require('./Image/breakfast.jpg')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1" className={classes.title} >
          BreakFast
        </Typography>
        <Typography variant="body2" color="text.secondary">
           are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
    </Card>





  );
}