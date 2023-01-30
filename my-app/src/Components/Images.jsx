import React, { useState } from 'react'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { Dialog, Box, styled } from '@mui/material'
import { saveAs } from 'file-saver'

const DialogImg = styled('img')(({ theme }) => ({
  width: '80%',
  margin: '50px 0px 30px 0px',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  }
}))
const DownlodeBtn = styled('button')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '4px 8px',
    fontSize: '12px',
    position: 'absolute',
    right: '17px',
    top: '10px',
  }
}))
const Icon = styled(VerticalAlignBottomIcon)(({ theme }) => ({
  fontSize: '19px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '17px',
  }
}))

const Images = ({ data }) => {
  const [open, setOpen] = useState(false);
  const openDilog = () => {
    setOpen(true)
  }
  const closeDilog = () => {
    setOpen(false)
  }

  const downloadImage = () => {
    saveAs(data.urls.small) // Put your image url here.
  };
  const FlexItem = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {

    }
  }))

  return (
    <>
      <FlexItem className='flexbox_item' onClick={() => openDilog()}>
        <img src={data.urls.small} style={{ width: '100%' }} alt={data.alt_description} />
      </FlexItem>
      <Dialog fullWidth open={open} onClose={closeDilog}>
        <DownlodeBtn className='downlodeBtn' onClick={downloadImage} ><Icon />Download</DownlodeBtn>
        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
          <DialogImg src={data.urls.small} alt={data.alt_description} />
        </Box>
      </Dialog>
    </>
  )
}

export default Images


/* <a href={data.urls.small}>
</a> */



