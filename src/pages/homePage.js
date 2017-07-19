import React from 'react'
import InjectSheet from 'react-jss'
import Landing from '../components/landingComponent'
import WhoAmI from '../components/whoAmIComponent'
import WhatICode from '../components/whatICodeComponent'
import Showcase from '../components/showcaseComponent'

const HomePage = () => {
  return (
    <div>
      <Landing />
      <WhoAmI />
      <WhatICode />
      <Showcase />
    </div>
  )
}

export default InjectSheet()(HomePage)
