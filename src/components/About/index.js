import { hot } from 'react-hot-loader'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  AboutContainer,
  AboutInfo,
  Words,
  Keywords,
  TechListOverlay,
  TechListInner,
  TechListCategory,
  TechListTitle,
  TechList,
  CloseButtonWrapper,
  CloseButton
} from './styles'

const techListData = [
  { "title": "Code",
    "data": "Javascript, CSS3, SASS, HTML5, GIT, React, Redux, React Router, Styled Components, Cypress, Jest,  Vue, jQuery, NodeJs, MongoDB, Webpack, Material UI, Bootstrap" },
  { "title": "Design",
    "data": "Adobe XD, Adobe Illustrator, Adobe Photoshop, Figma" },
  { "title": "Project management",
    "data": "Clubhouse, Slack" }
]

const About = React.forwardRef((props,ref) => {
  const { aboutRef, defaultTheme, infoOneTop, height, setInfoOneRef } = props

  const [showTechList, setShowTechList] = useState(false)

  const checkKeyPress = (event) => {
    if(event.key==='Escape') {
      setShowTechList(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('keydown', checkKeyPress)
    return () => {
      window.removeEventListener('keydown', checkKeyPress)
    }
  },[])

  return (
    <AboutContainer ref={aboutRef}>
      <AboutInfo ref={setInfoOneRef} defaultTheme={defaultTheme} infoOneTop={infoOneTop} height={height}>
        <Words className='words-revealed-0'>Front-end </Words>
        <Words className='words-revealed-1'>engineer </Words>
        <Words className='words-revealed-2'>with </Words>
        <Words className='words-revealed-3'>a </Words>
        <Words className='words-revealed-4'>passion </Words>
        <Words className='words-revealed-5'>for </Words>
        <Words className='words-revealed-6'>clean,</Words>{` `}

        <Words className='words-revealed-7'>
          <Keywords>
            intuitive <span className='keywords-underlined-0' />
          </Keywords>
        </Words>
        <Words className='words-revealed-8'>
          <Keywords>
            User <span className='keywords-underlined-1' />
          </Keywords>
        </Words>
        <Words className='words-revealed-9'>
          <Keywords>
            Interfaces<span className='keywords-underlined-2' />
          </Keywords>
        </Words>
        {` `}

        <Words className='words-revealed-10'>capable </Words>
        <Words className='words-revealed-11'>of </Words>
        <Words className='words-revealed-12'>building </Words>
        <Words className='words-revealed-13'>user-centric </Words>
        <Words className='words-revealed-14'>websites </Words>
        <Words className='words-revealed-15'>or </Words>
        <Words className='words-revealed-16'>apps </Words>
        <Words className='words-revealed-17'>and </Words>
        <Words className='words-revealed-18'>of </Words>
        
        <Words className='words-revealed-19'>creating</Words>{` `}

        <Words className='words-revealed-20'>
          <Keywords>
            rewarding <span className='keywords-underlined-3' />
          </Keywords>
        </Words>
        <Words className='words-revealed-21'>
          <Keywords>
            and <span className='keywords-underlined-4' />
          </Keywords>
        </Words>
        <Words className='words-revealed-22'>
          <Keywords>
            engaging <span className='keywords-underlined-5' />
          </Keywords>
        </Words>
        <Words className='words-revealed-23'>
          <Keywords>
            User <span className='keywords-underlined-6' />
          </Keywords>
        </Words>
        <Words className='words-revealed-24'>
          <Keywords>
            Experiences<span className='keywords-underlined-7' />
          </Keywords>
        </Words>

        <Words className='words-revealed-25'>.</Words>
      </AboutInfo>

      <AboutInfo defaultTheme={defaultTheme} infoOneTop={infoOneTop} height={height}>
        <Words className='words-revealed-26'>Modern </Words>
        <Words className='words-revealed-27'>
          <Keywords className='keywords'>
            Javascript, <span className='keywords-underlined-8' />
          </Keywords>
        </Words>
        <Words className='words-revealed-28'>
          <Keywords className='keywords'>
            React, <span className='keywords-underlined-9' />
          </Keywords>
        </Words>
        <Words className='words-revealed-29'>
          <Keywords className='keywords'>
            Sass,<span className='keywords-underlined-10' />
          </Keywords>
        </Words>
        <Words className='words-revealed-30'> styled </Words>
        <Words className='words-revealed-31'>components, </Words>
        <Words className='words-revealed-32'>
          <Keywords className='keywords'>
            React <span className='keywords-underlined-11' />
          </Keywords>
        </Words>
        <Words className='words-revealed-33'>
          <Keywords className='keywords'>
            Router, <span className='keywords-underlined-12' />
          </Keywords>
        </Words>
        <Words className='words-revealed-34'>
          <Keywords className='keywords'>
            Redux, <span className='keywords-underlined-13' />
          </Keywords>
        </Words>
        <Words className='words-revealed-35'>
          <Keywords className='keywords'>
            JSON<span className='keywords-underlined-14' />
          </Keywords>
        </Words>
        <Words className='words-revealed-36'> and </Words>
        <Words className='words-revealed-37'>
          <Keywords className='keywords'>
            Git<span className='keywords-underlined-15' />
          </Keywords>
        </Words>
        <Words className='words-revealed-38'> are </Words>
        <Words className='words-revealed-39'>what </Words>
        <Words className='words-revealed-40'>I </Words>
        <Words className='words-revealed-41'>use </Words>
        <Words className='words-revealed-42'>the </Words>
        <Words className='words-revealed-43'>most </Words>
        <Words className='words-revealed-44'>nowadays</Words>
        <Words className='words-revealed-45'>. </Words>
        <Words className='words-revealed-46'>For </Words>
        <Words className='words-revealed-47'>the </Words>
        <Words className='words-revealed-48'>complete </Words>
        <Words className='words-revealed-49'>list </Words>
        <Words className='words-revealed-50'>of </Words>
        <Words className='words-revealed-51'>tech </Words>
        <Words className='words-revealed-52'>and </Words>
        <Words className='words-revealed-53'>tools </Words>
        <Words className='words-revealed-54'>I </Words>
        <Words className='words-revealed-55'>can </Words>
        <Words className='words-revealed-56'>use, </Words>
        <Words className='words-revealed-57'>please </Words>
        <Words className='words-revealed-58' onClick={()=>setShowTechList(true)}>
          <Keywords className='keywords'>
            click <span className='keywords-underlined-16' />
          </Keywords>
        </Words>
        <Words className='words-revealed-59' onClick={()=>setShowTechList(true)}>
          <Keywords className='keywords'>
            here<span className='keywords-underlined-17' />
          </Keywords>
        </Words>
        <Words className='words-revealed-60'>.</Words>
      </AboutInfo>

      <TechListOverlay defaultTheme={defaultTheme} showTechList={showTechList}>
        <TechListInner as='div'>
          {techListData.map((category,id)=>{
            return(
              <TechListCategory key={`techCategory_${id}`} showTechList={showTechList}>
                <TechListTitle defaultTheme={defaultTheme}>
                  {category.title}:
                </TechListTitle>
                <TechList defaultTheme={defaultTheme}>
                  {category.data}.
                </TechList>
              </TechListCategory>
            )
          })}
          <CloseButtonWrapper showTechList={showTechList}>
            <CloseButton onClick={()=>setShowTechList(false)}>
              Close
            </CloseButton>
          </CloseButtonWrapper>
        </TechListInner>
      </TechListOverlay>
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