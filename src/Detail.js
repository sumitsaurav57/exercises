import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import bodyPartImage from './images/body-part.png';
import TargetImage from './images/target.png';
import EquipmentImage from './images/equipment.png';
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartImage,
      name:bodyPart
    },
    {
      icon: TargetImage,
      name:target
    },
    {
      icon: EquipmentImage,
      name:bodyPart
    }
  ]
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h4'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong,{name} {' '} bup is one of the best 
          exercises to target your abs. It will help you improve your
          mood and gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button>
              <img src={item.icon} />
            </Button>
            <Typography variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}

      </Stack>
    </Stack>
  )
}

export default Detail