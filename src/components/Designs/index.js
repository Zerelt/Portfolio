import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import {
  DesignsContainer,
  HeadlineContainer,
  HeadlineSm,
  HeadlineLgContainer,
  HeadlineLg,
  HeadlineHighlight,
  Carousel,
  CarouselHalf,
  CarouselItem,
  CarouselTitle,
  CarouselTouch,
  CarouselItemTouch
} from './styles'

const carouselContent = [
  {
    'title': 'View All',
    'destination': ''
  },
  {
    'title': 'Case Studies',
    'destination': ''
  },
  {
    'title': 'User Experience',
    'destination': ''
  },
  {
    'title': 'Designs',
    'destination': ''
  }
]

const Designs = ({ designsRef, defaultTheme, height, designTextTop }) => {
  return(
    <DesignsContainer ref={designsRef} defaultTheme={defaultTheme} height={height}>
      <HeadlineContainer>
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
      </HeadlineContainer>
      
      <Carousel 
        height={height}
        designTextTop={designTextTop}>
        <CarouselHalf>
          {
            carouselContent.map((item, id)=>(
              <CarouselItem 
                className='carouselItem'
                key={id}
                href={item.destination}
                defaultTheme={defaultTheme}>
                <CarouselTitle defaultTheme={defaultTheme}>
                  {item.title}
                </CarouselTitle>
              </CarouselItem>
            ))
          }
        </CarouselHalf>
        <CarouselHalf>
          {
            carouselContent.map((item, id)=>(
              <CarouselItem 
                className='carouselItem'
                key={id}
                href={item.destination}
                defaultTheme={defaultTheme}>
                <CarouselTitle defaultTheme={defaultTheme}>
                  {item.title}
                </CarouselTitle>
              </CarouselItem>
            ))
          }
        </CarouselHalf>
      </Carousel>

      <CarouselTouch 
        height={height}
        designTextTop={designTextTop}>
        {
          carouselContent.map((item, id)=>(
            <CarouselItemTouch 
              className='carouselItem'
              key={id}
              href={item.destination}
              defaultTheme={defaultTheme}>
              <CarouselTitle defaultTheme={defaultTheme}>
                {item.title}
              </CarouselTitle>
            </CarouselItemTouch>
          ))
        }
      </CarouselTouch>

    </DesignsContainer>
  )
}

Designs.propTypes = {
  designsRef: PropTypes.func,
  defaultTheme: PropTypes.bool,
  height: PropTypes.number,
  designTextTop: PropTypes.number
}

export default hot(module)(Designs)