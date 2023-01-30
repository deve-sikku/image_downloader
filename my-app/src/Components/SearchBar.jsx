import React from 'react';
import { styled } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { ImageContext } from '../App';

const Fromdiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '50%',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
    display: 'flex',
    padding: '2px 0px'
  }
}))
const FromInput = styled('input')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginTop: '4px',
    fontSize: '13px',
    borderRadius: '10px',
    paddingLeft: '10px'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '6px',
    fontSize: '14px',
    borderRadius: '10px',
    paddingLeft: '10px',
  },
}))
const Button = styled('button')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    paddingRight: '10px'
  }
}))

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { fetchdata } = useContext(ImageContext);

  const inputHandler = (e) => {
    setSearch(e.target.value)
  }

  const btnHandler = () => {
    fetchdata(`search/photos?page=1&query=${search}&client_id=eIDpLnypramsKBxtn7VCY7yLTJHte9_3V_fisLxjnAo`)
    setSearch('')
  }

  return (
    <>
      <Fromdiv className='form'>
        <FromInput type="text" value={search} onChange={inputHandler} className='input' placeholder='Search Image...' />
        <Button className='button' onClick={btnHandler}><i className="bi bi-search"></i></Button>
      </Fromdiv>
    </>
  )
}

export default SearchBar
