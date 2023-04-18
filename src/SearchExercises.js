import React, { useEffect, useState } from 'react';
import { Box, Stack, Button, Typography, TextField } from '@mui/material'
import { fetchData, exercisesOptions } from './utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState(' ');
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData();
  }, [])
  const handleSearch = async() => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
        exercisesOptions);
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch(' ');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt="37px" justifyContent='center' p="20">
      <Typography fontWeight="700"
        sx={{
          fontSize:{lg:'44px',xs:'30px'}
        }}
        mb="50px" textAlign="center"
      >
        Awesone Exercises for you <br />
        you should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight:'700',
              border:'none',
              borderRadius:'40px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius:'40px'
          }}
          height='76px'
          value={search}
          onChange={(e) =>  setSearch(e.target.value.toLowerCase())}
          placeholder='search exercises'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '14px' },
            height: '56px',
            fontSize: { lg: '20px', xs: '14px' },
            position: 'absolute',
            right:'0px'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{position:'relative',width:'100%',p:'20px'}}
      >
        <HorizontalScrollbar data={bodyParts}
          bodyPart={bodyPart } setBodyPart={setBodyPart} />
      </Box>
   </Stack>
  )
}

export default SearchExercises