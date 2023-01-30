import React from 'react'
import { useContext } from 'react';
import { ImageContext } from '../App'
import Images from './Images';
import Loding from './Loding';
import { styled } from '@mui/material'


const FlexContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}))
const MainContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    margin: '5% 1% 0% 1%',

  }
}))

const Image = () => {
  const { response, loding } = useContext(ImageContext);
  return (
    <>
      <MainContainer className='main_container'>
        <FlexContainer className='flexbox_container'>
          {
            loding ? <Loding /> : response.map((data, key) => <Images key={key} data={data} />)
          }
        </FlexContainer>
      </MainContainer>

    </>
  )
}

export default Image
