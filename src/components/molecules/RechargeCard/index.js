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
            {props.cardValue > 10 &&
                <CardTitle>R${props.cardValue}</CardTitle>   
            }
            {props.cardValue < 10 &&
                <CardTitle>{props.cardValue}GB</CardTitle>
            }
            {props.bonus &&
                <CardSubtitle>E ganhe R${props.bonus} de bônus</CardSubtitle>
            }
            {!props.bonus &&
                <CardSubtitle>Redes sociais ilimitadas</CardSubtitle>
            }
            <ButtonContainer>{props.textButton}</ButtonContainer>
        </CardContainer>
    )
}

export default RechargeCard