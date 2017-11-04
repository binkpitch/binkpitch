import React from 'react'

import { storiesOf } from '@storybook/react'

import '../../node_modules/grommet-css'

import HomePage from '../pages/homePage'
import Landing from '../components/landingComponent'
import WhoAmI from '../components/whoAmIComponent'
import WhatICode from '../components/whatICodeComponent'
import Showcase from '../components/showcaseComponent'
import ContactMe from '../components/contactMeComponent'

storiesOf('Page', module)
  .add('Home', () => <HomePage />)

storiesOf('Component', module)
  .add('Landing', () => <Landing />)
  .add('WhoAmI', () => <WhoAmI />)
  .add('WhatICode', () => <WhatICode />)
  .add('Showcase', () => <Showcase />)
  .add('ContactMe', () => <ContactMe />)
