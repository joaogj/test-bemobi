import React from 'react'
import SubscribeButton from '../../atoms/SubscribeButton'

import {
    MainContainer,
    CardContainer,
    DescriptionCard,
    ButtonContainer,
    CardTitle,
} from './style'

const Card = props => {
    return(
        <MainContainer>
            <CardContainer img={props.img}>
                    <ButtonContainer>
                        <SubscribeButton textButton="Assine" />
                    </ButtonContainer>
                <CardTitle>{props.cardTitle}</CardTitle>
            </CardContainer>
            <DescriptionCard className="description-card">{props.descriptionCard}</DescriptionCard>
            <DescriptionCard weight="300">{props.dayOff}</DescriptionCard>
        </MainContainer>
    )
}

export default Card