import styled from 'styled-components'
import saraiva from '../../../img/saraiva-img.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 163px;
    width: 45%;
    height: 160px;
    margin-bottom: 26px;
`

export const CardContainer = styled.div`
    max-width: 163px;
    width: 100%;
    height: 124px;
    opacity: 0.9;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%), url(${props => props.img ? props.img : saraiva});
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
    margin: 14px 8px;
`

export const CardTitle = styled.span`
    font-family: 'Titillium Web';
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
    margin-bottom: 10px;
`
export const DescriptionCard = styled.span`
    font-family: 'Roboto', sans serif;
    font-size: 13px;
    color: #000;
    margin-left: 10px;
    font-weight: ${props => props.weight ? props.weight : '600'};
    
    &.description-card {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
    }
`