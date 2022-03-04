import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box, flexbox } from '@mui/system';
import { Container, Grid } from '@mui/material';
const useStyles = makeStyles((theme) =>({
root:{
  width:'100vw',
  height:'100vh',
}

}));
export default function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
    <Grid container spacing={1}>

   <grid item sm={3}>
      <Card sx={{ maxWidth: 290 }}
      >
        <CardMedia

          component="img"
          height="227"
          image={require('./Image/breakfast.jpg')}
        />
        <CardContent>
          <Typography gutterBottom

            variant="h5"
            component="h3"
            fontFamily='Nunito'
            fontWeight='bold'
            fontSize='2rem' >
            BreakFast
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Breakfast is the first meal of the day eaten after waking from the night's sleep, in the morning. The word in English refers to breaking .
          </Typography>
        </CardContent>

      </Card>
      </grid>
    
   <Grid item sm={3}>
        <Card sx={{ maxWidth: 445 }} 
          
        >
          <CardMedia

            component="img"
            height="229"
            image={require('./Image/lunch.jpg')}
          />
          <CardContent >
            <Typography gutterBottom
              variant="h5"
              component="h3"
              fontFamily='Nunito'
              fontWeight='bold'
              fontSize='2rem' >
              Lunch
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lunch, the most informal and unassuming of meals, defies easy definition. A relatively late entry into the cycle of dining.
            </Typography>
          </CardContent>

        </Card>
        </Grid>
      <br></br>
      <Grid item sm={3}>
        <Card sx={{ maxWidth: 445 }}

        >
          <CardMedia

            component="img"
             height="229"
            image={require('./Image/dinner.jpg')}
          />
          <CardContent>
            <Typography gutterBottom
              variant="h5"
              component="h3"
              fontFamily='Nunito'
              fontWeight='bold'
              fontSize='2rem' >
              Dinner
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dinner usually refers to what is in many Western cultures the largest and most formal meal of the day, which some Westerners eat in the midday.
            </Typography>
          </CardContent>

        </Card>
        </Grid>
      
      </Grid>
      </Container>





  );
}