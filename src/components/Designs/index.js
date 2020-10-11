import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import { Decoration, DecorationRotated } from 'assets/theme/decoration'
import AmurLeopardPreview from 'assets/images/AmurLeopardPreview.jpg'
import SonyRedesignPreview from 'assets/images/SonyRedesignPreview.jpg'

/* eslint-disable */
// import resume file so it can be viewed on the web
// these are viewed as separate pages on the /Pdfs url. - Temporary 
// solution until i decide on (or make) an image viewer
import SonyRedesign from 'assets/DesignFiles/SonyRedesign-1080px.pdf'
import AmurLeopard from 'assets/DesignFiles/AmurLeopard-1080px.pdf'
/* eslint-enable */

import {
  DesignsContainer,
  HeadlineContainer,
  HeadlineSm,
  HeadlineLgContainer,
  HeadlineLg,
  HeadlineHighlight,
  DesignProjects,
  DesignProjectItem,
  PreviewContainer,
  Preview,
  DecorationContainer,
  DesignProjectTitle,
  DesignProjectDescription,
  DesignProjectLive
} from './styles'


const designProjects = [
  {
    "title": "Sony website",
    "description": "Reimagining the product page for Sony’s industry leading noise cancelling headphones - the Sony WH-1000XM4.",
    "image": SonyRedesignPreview,
    "live": SonyRedesign
  },
  {
    "title": "Amur leopard",
    "description": "Full website design for a campaign to raise awareness about the most critically endangered big cat in the world.",
    "image": AmurLeopardPreview,
    "live": AmurLeopard
  }
]

const Designs = ({ designsRef, defaultTheme, height, designTextTop, designProjectOneTop, designProjectTwoTop }) => {

  const designProjectTopArray = [designProjectOneTop, designProjectTwoTop]

  return(
    <DesignsContainer ref={designsRef} defaultTheme={defaultTheme} height={height}>
      <HeadlineContainer>
        <div>
          <HeadlineSm
            height={height}
            designTextTop={designTextTop}>
            <span />
            Not just a coder
          </HeadlineSm>
          <HeadlineLgContainer
            height={height}
            designTextTop={designTextTop}>
            <span />
            <HeadlineLg>
              but also a <br />
              <HeadlineHighlight>
                certified <br className='lineBreak' /> UX designer
              </HeadlineHighlight>
            </HeadlineLg>
          </HeadlineLgContainer>
        </div>
      </HeadlineContainer>

      <DesignProjects defaultTheme={defaultTheme}>
        {
          designProjects.map((designProject,id)=>{
            const designProjectVisible = designProjectTopArray[id]<=height*0.7
            return(
              <DesignProjectItem
                designProjectVisible={designProjectVisible}
                key={`design-${id}`} defaultTheme={defaultTheme}>
                <PreviewContainer>
                  <Preview src={designProject.image} className={`preview-${id}`} />
                  <DecorationContainer className={`decoration-${id}`}>
                    <Decoration />
                  </DecorationContainer>
                  <DecorationContainer className={`decorationRotated-${id}`}>
                    <DecorationRotated />
                  </DecorationContainer>
                </PreviewContainer>
                <DesignProjectTitle 
                  className={`designProjectTitle-${id}`}>
                  {designProject.title}
                </DesignProjectTitle>
                <DesignProjectDescription 
                  className={`designProjectDescription-${id}`}>
                  {designProject.description}
                </DesignProjectDescription>
                <DesignProjectLive 
                  className={`designProjectLive-${id}`}
                  href={designProject.live} 
                  target="_blank" rel="noopener noreferrer">
                  See Full Design
                </DesignProjectLive>
              </DesignProjectItem>
            )
          })
        }
      </DesignProjects>

    </DesignsContainer>
  )
}

Designs.propTypes = {
  designsRef: PropTypes.func,
  defaultTheme: PropTypes.bool,
  height: PropTypes.number,
  designTextTop: PropTypes.number,
  designProjectOneTop: PropTypes.number,
  designProjectTwoTop: PropTypes.number
}

export default hot(module)(Designs)