import styled from 'styled-components'
import saraiva from '../../img/saraiva-img.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 163px;
    width: 45%;
    height: 160px;
    margin-bottom: 26px;
    
    .description-card {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
    }
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
    margin: 14px 14px;
`

export const ButtonSubscribe = styled.div`
    background-color: #2F80ED;
    border-radius: 2px;
    max-width: 59px;
    width: 34%;
    min-width: 45px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextButton = styled.span`
    color: #fff;
    font-size: 10px;
    text-align: center;
    text-transform: uppercase;
`
export const CardTitle = styled.span`
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
`