import React from 'react'

import {
    CardContainer,
    CardTitle,
    CardSubtitle,
    ButtonContainer,

} from './style'


const RechargeCard = (props) => {
    return (
        <CardContainer>
            <CardTitle>{props.cardValue}</CardTitle>
            <CardSubtitle>{props.bonus}</CardSubtitle>
            <ButtonContainer>Contratar</ButtonContainer>
        </CardContainer>
    )
}

export default RechargeCard