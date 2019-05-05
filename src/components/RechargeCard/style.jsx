import styled from 'styled-components'

export const CardContainer = styled.div`
    max-width: 159px;
    width: 46%;
    height: 114px;
    background-color: #F2F2F2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ButtonContainer = styled.div`
    font-family: 'Titillium Web';
    background-color: #F2994A;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 8px 8px;
    width: 100%;
    height: 34px;
    text-transform: uppercase;
` 
export const CardTitle = styled.h2`
    font-family: 'Titillium Web';
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #2E7CE6;
    margin: 0;
`
export const CardSubtitle = styled.span`
    font-family: 'Titillium Web';
    font-size: 10px;
    color: #828282;
    text-align: center;

`