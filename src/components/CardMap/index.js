import React from 'react'
import Card from '../Card'

import {
    MainContainer,
} from './style'

const CardMap = (props) => {
    return (
        <MainContainer>
            {
                props.cardRender.map((item, key) =>{
                    return (
                        <Card 
                            img={item.img} 
                            cardTitle={item.cardTitle}
                            descriptionCard={item.descriptionCard}
                            dayOff={item.dayOff} 
                            key={key} 
                        />
                    )
                })
            }
        </MainContainer>
    )
}

export default CardMap