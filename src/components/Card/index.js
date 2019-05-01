import React from 'react'

import {
    MainContainer,
    CardContainer,
    DescriptionCard,
    ButtonContainer,
    ButtonSubscribe,
    TextButton,
    CardTitle,
} from './style'

const Card = props => {
    return(
        <MainContainer>
            <CardContainer img={props.img}>
                    <ButtonContainer>
                        <ButtonSubscribe>
                            <TextButton>Assine</TextButton>
                        </ButtonSubscribe>
                    </ButtonContainer>
                <CardTitle>{props.cardTitle}</CardTitle>
            </CardContainer>
            <DescriptionCard className="description-card">{props.descriptionCard}</DescriptionCard>
            <DescriptionCard weight="300">{props.dayOff}</DescriptionCard>
        </MainContainer>
    )
}

export default Card