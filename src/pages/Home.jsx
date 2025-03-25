import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import relatedDoctors from '../components/relatedDoctors'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors/>
        <Banner/>
        <relatedDoctors/>
    </div>
  )
}

export default Home