import React from 'react'

import {
    ButtonContainer,
    TextButton,
} from './style'

const SubscribeButton = (props) => {
    return (
        <ButtonContainer>
            <TextButton>{props.textButton}</TextButton>
        </ButtonContainer>
    )
}

export default SubscribeButton