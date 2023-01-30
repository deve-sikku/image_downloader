import React from 'react';
import SearchBar from './SearchBar';
import { styled } from '@mui/material';
import './style.css';


const BannerDiv = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height: '270px'
    }
}))
const MainHeading = styled('h1')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '40px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
        fontWeight: 500,
        textAlign: 'center'
    }
}))
const BannerPre = styled('p')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        fontWeight: 400
    }
}))

const Banner = () => {
    return (
        <>
            <BannerDiv className='Banner'>
                <MainHeading className='maiHeading'>Beautiful Free Stock Photos</MainHeading>
                <BannerPre className='bannerPre'>New images added daily</BannerPre>
                <SearchBar />
            </BannerDiv>
        </>
    )
}

export default Banner
