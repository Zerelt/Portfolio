import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
import OceanStars from 'assets/images/OceanStars.jpg'
import SonyRedesign from 'assets/images/SonyRedesign.jpg'
import AmurLeopard from 'assets/images/AmurLeopard.jpg'

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
  Preview
} from './styles'


const designProjects = [
  {
    "image": OceanStars,
    "alt": "Luxury yacht membership concept"
  },
  {
    "image": SonyRedesign,
    "alt": "Sony Redesign design concept"
  },
  {
    "image": AmurLeopard,
    "alt": "Amur Leopard charity website concept"
  }
]

const Designs = ({ designsRef, defaultTheme, height, designTextTop, designProjectOneTop, designProjectTwoTop, designProjectThreeTop }) => {

  const designProjectTopArray = [designProjectOneTop, designProjectTwoTop, designProjectThreeTop]

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
            const designProjectVisible = designProjectTopArray[id]<=height*.75
            return(
              <DesignProjectItem 
                designProjectVisible={designProjectVisible}
                key={`design-${id}`} defaultTheme={defaultTheme}>
                <PreviewContainer designProjectVisible={designProjectVisible}>
                  <Preview src={designProject.image} alt={designProject.alt} />
                </PreviewContainer>
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
  designProjectTwoTop: PropTypes.number,
  designProjectThreeTop: PropTypes.number
}

export default hot(module)(Designs)