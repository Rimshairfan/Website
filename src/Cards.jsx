import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box, flexbox } from '@mui/system';

const useStyles = makeStyles({

  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '7rem '
  },
  root: {

    background: 'rgba(0,0,0,0.5)'
  }
});
export default function Cards() {
  const classes = useStyles();

  return (
    <>
<Box>
      <Card sx={{ maxWidth: 445 }} padding-left='10px'
      >
        <CardMedia

          component="img"
          height="245"
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
            Breakfast is the first meal of the day eaten after waking from the night's sleep, in the morning. The word in English refers to breaking the fasting period of the previous night.
          </Typography>
        </CardContent>

      </Card>
      <br></br>
      <div align='center'   

   >
        <Card sx={{ maxWidth: 445 }} margin=' 0 auto'
          float=' none'
          margin-left='10px'
        >
          <CardMedia

            component="img"
            height="245"
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
              Lunch, the most informal and unassuming of meals, defies easy definition. A relatively late entry into the cycle of dining, it is replete with socioeconomic forms and meanings.
            </Typography>
          </CardContent>

        </Card>
      </div>
      <br></br>
      <div align='right'>
        <Card sx={{ maxWidth: 445 }}

        >
          <CardMedia

            component="img"
            height="245"
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
      </div>
      </Box>
    </>





  );
}