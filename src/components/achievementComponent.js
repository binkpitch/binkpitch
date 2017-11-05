import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'
import Paragraph from 'grommet/components/Paragraph'

const archievement = () => {
  return (
    <div className='archievement'>
      <Box margin={{top: 'large', horizontal: 'large'}}>
        <Box margin={{vertical: 'large'}} alignSelf='start'>
          <Heading tag='h2'>
            Archievement
          </Heading>
        </Box>

        <Accordion openMulti>
          <AccordionPanel heading='Hacktoberfest 2017'>
            <Paragraph>
              Finished Hacktoberfest 2017. Some of pull requests were merged to an open source project. (https://github.com/gitpoint/git-point/pull/553 and https://github.com/ gitpoint/git-point/pull/544).
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading='TechJam by KBTG'>
            <Paragraph>
              Attended TechJam by KBTG as a finalist (Top 51 teams from online round) on Code Track. On offline round, score total points above the average.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading='PWA Online Hackathon 2017'>
            <Paragraph>
              Attended PWA Online Hackathon 2017, writing a voting application using React. Source code at https://github.com/binkpitch/pwa-online-hackathon-2017.
            </Paragraph>
          </AccordionPanel>
        </Accordion>

      </Box>
    </div>
  )
}

export default archievement
