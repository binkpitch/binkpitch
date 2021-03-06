import React from 'react'
import wrapElement from '../components/wrapElementHOC'
import Landing from '../components/landingComponent'
import WhoAmI from '../components/whoAmIComponent'
import WhatICode from '../components/whatICodeComponent'
import Showcase from '../components/showcaseComponent'
import ContactMe from '../components/contactMeComponent'
import Achievement from '../components/achievementComponent'

const HomePage = () => {
  return (
    <div>
      {wrapElement('landing')(<Landing />)}
      {wrapElement('whoAmI')(<WhoAmI />)}
      {wrapElement('whatICode')(<WhatICode />)}
      {wrapElement('showcase')(<Showcase />)}
      {wrapElement('achievement')(<Achievement />)}
      {wrapElement('contactMe')(<ContactMe />)}
    </div>
  )
}

export default HomePage
