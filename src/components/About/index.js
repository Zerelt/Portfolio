import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import {
  AboutContainer,
  AboutInfo,
  Words,
  Keywords
} from './styles'

const About = React.forwardRef((props,ref) => {
  const { aboutRef, defaultTheme, infoOneTop, height, setInfoOneRef } = props

  return (
    <AboutContainer ref={aboutRef}>
      <AboutInfo ref={setInfoOneRef} defaultTheme={defaultTheme} infoOneTop={infoOneTop} height={height}>
        <Words className='words-revealed-0'>Self </Words>
        <Words className='words-revealed-1'>taught </Words>
        <Words className='words-revealed-2'>front-end </Words>
        <Words className='words-revealed-3'>engineer </Words>
        <Words className='words-revealed-4'>with </Words>
        <Words className='words-revealed-5'>a </Words>
        <Words className='words-revealed-6'>passion </Words>
        <Words className='words-revealed-7'>for </Words>
        <Words className='words-revealed-8'>clean,</Words>{` `}

        <Words className='words-revealed-9'>
          <Keywords>
            intuitive <span className='keywords-underlined-0' />
          </Keywords>
        </Words>
        <Words className='words-revealed-10'>
          <Keywords>
            User <span className='keywords-underlined-1' />
          </Keywords>
        </Words>
        <Words className='words-revealed-11'>
          <Keywords>
            Interfaces<span className='keywords-underlined-2' />
          </Keywords>
        </Words>
        {` `}

        <Words className='words-revealed-12'>capable </Words>
        <Words className='words-revealed-13'>of </Words>
        <Words className='words-revealed-14'>creating</Words>{` `}
        
        <Words className='words-revealed-15'>
          <Keywords>
            rewarding <span className='keywords-underlined-3' />
          </Keywords>
        </Words>
        <Words className='words-revealed-16'>
          <Keywords>
            and <span className='keywords-underlined-4' />
          </Keywords>
        </Words>
        <Words className='words-revealed-17'>
          <Keywords>
            engaging <span className='keywords-underlined-5' />
          </Keywords>
        </Words>
        <Words className='words-revealed-18'>
          <Keywords>
            User <span className='keywords-underlined-6' />
          </Keywords>
        </Words>
        <Words className='words-revealed-19'>
          <Keywords>
            Experiences<span className='keywords-underlined-7' />
          </Keywords>
        </Words>

        <Words className='words-revealed-20'>.</Words>
      </AboutInfo>

      <AboutInfo defaultTheme={defaultTheme} infoOneTop={infoOneTop} height={height}>
        <Words className='words-revealed-21'>Modern </Words>
        <Words className='words-revealed-22'>
          <Keywords className='keywords'>
            Javascript, <span className='keywords-underlined-8' />
          </Keywords>
        </Words>
        <Words className='words-revealed-23'>
          <Keywords className='keywords'>
            React, <span className='keywords-underlined-9' />
          </Keywords>
        </Words>
        <Words className='words-revealed-24'>
          <Keywords className='keywords'>
            Sass,<span className='keywords-underlined-10' />
          </Keywords>
        </Words>
        <Words className='words-revealed-25'> styled </Words>
        <Words className='words-revealed-26'>components, </Words>
        <Words className='words-revealed-27'>
          <Keywords className='keywords'>
            React <span className='keywords-underlined-11' />
          </Keywords>
        </Words>
        <Words className='words-revealed-28'>
          <Keywords className='keywords'>
            Router, <span className='keywords-underlined-12' />
          </Keywords>
        </Words>
        <Words className='words-revealed-29'>
          <Keywords className='keywords'>
            Redux, <span className='keywords-underlined-13' />
          </Keywords>
        </Words>
        <Words className='words-revealed-30'>
          <Keywords className='keywords'>
            JSON<span className='keywords-underlined-14' />
          </Keywords>
        </Words>
        <Words className='words-revealed-31'> and </Words>
        <Words className='words-revealed-32'>
          <Keywords className='keywords'>
            Git<span className='keywords-underlined-15' />
          </Keywords>
        </Words>
        <Words className='words-revealed-33'> are </Words>
        <Words className='words-revealed-34'>what </Words>
        <Words className='words-revealed-35'>I </Words>
        <Words className='words-revealed-36'>use </Words>
        <Words className='words-revealed-37'>the </Words>
        <Words className='words-revealed-38'>most </Words>
        <Words className='words-revealed-39'>nowadays</Words>
        <Words className='words-revealed-40'>.</Words>
      </AboutInfo>
    </AboutContainer>
  )
})

About.propTypes = {
  aboutRef: PropTypes.func,
  defaultTheme: PropTypes.bool,
  infoOneTop: PropTypes.number,
  height: PropTypes.number,
  setInfoOneRef: PropTypes.func
}

export default hot(module)(About)