import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'
import Hero from 'grommet/components/Hero'
import Anchor from 'grommet/components/Anchor'
import PlatformAndroid from 'grommet/components/icons/base/PlatformAndroid'
import PlatformApple from 'grommet/components/icons/base/PlatformApple'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'
import Cloud from 'grommet/components/icons/base/Cloud'

const renderPicNow = () => {
  return (
    <Hero background={<Image src={require('../assets/picnow.png')}
      fit='cover'
      align={{left: true}}
      full />}
      size='large'
      >
      <Box direction='row' justify='center' align='center'>
        <Box basis='1/2' align='end' pad='medium' />
        <Box basis='1/2' align='start' pad='medium' style={{backgroundColor: 'rgba(222, 222, 222, 0.5)'}}>
          <Heading uppercase margin='none'>
            PicNow
          </Heading>
          <Heading tag='h2' margin='none'>
            A mobile application build to solve the pain of taking photo ID for graduation.
          </Heading>
          <Box direction='row' responsive={false} margin={{top: 'medium'}}>
            <Anchor
              rel='noopener noreferrer'
              target='_blank'
              icon={<PlatformAndroid />}
              label='Google Play'
              href='https://play.google.com/store/apps/details?id=me.picnow&hl=en'
              />
            <Box margin={{left: 'medium'}}>
              <Anchor
                rel='noopener noreferrer'
                target='_blank'
                icon={<PlatformApple />}
                label='App Store'
                href='https://itunes.apple.com/us/app/picnow/id1200696255?mt=8'
                />
            </Box>
          </Box>
        </Box>
      </Box>
    </Hero>

  )
}

const renderReactor = () => {
  return (
    <Hero style={{backgroundColor: 'rgba(222, 222, 222, 0.5)', marginTop: '10vh'}}>
      <Box direction='row' justify='center' align='center'>
        <Box basis='1/2' align='end' pad='medium'>
          <Image size='small' src={require('../assets/reactor.ico')} />
        </Box>
        <Box basis='1/2' align='start' pad='medium'>
          <Heading margin='none'>
            Reactor
          </Heading>
          <Heading tag='h2' margin='none'>
            A React boilerplate with Redux.
          </Heading>
          <Box direction='row' responsive={false} margin={{top: 'medium'}}>
            <Anchor
              rel='noopener noreferrer'
              target='_blank'
              icon={<Cloud />}
              label='GitHub Pages'
              href='https://binkpitch.github.io/reactor/'
              />
            <Box margin={{left: 'medium'}}>
              <Anchor
                rel='noopener noreferrer'
                target='_blank'
                icon={<SocialGithub />}
                label='GitHub'
                href='https://github.com/binkpitch/reactor' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Hero>
  )
}

const showcase = () => {
  return (
    <div className='showcase'>
      <Box margin='large'>
        <Box margin={{vertical: 'large'}} alignSelf='start'>
          <Heading tag='h2'>
              Showcase
          </Heading>
        </Box>
        { renderPicNow() }
        { renderReactor() }
      </Box>
    </div>
  )
}

export default showcase
