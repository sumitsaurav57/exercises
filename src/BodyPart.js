import React from 'react'
import { Stack, Typography } from '@mui/material'
import img from './images/Dumbbells_.png'
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
      <Stack
          type="button"
          alignItems='center'
          justifyContent="center"
          className="bodyPart-card"
          sx={{
              borderTop: bodyPart === item ? '4px solid #ff2625' : ' ',
              backgroundColor: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '280px',
              cursor: 'pointer',
              gap: '47px'
          }}
          onClick={() => {
              setBodyPart(item);
              window.scrollTo({top:1800,left:100,behavior:'smooth'})
          }}
      >
          <img src={ img} alt="envelope" style={{width:"60px",height:'60px'}} />
          <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>{item}</Typography>
        </Stack>
  )
}

export default BodyPart