import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

export const StyledTabs = styled(Tabs)`
    height: 424px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 15px;
`

export const StyledTabList = styled(TabList)`
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    display: flex;
    position: absolute;
    padding: 0;
    margin-top: 0;
`
export const StyledTab = styled(Tab)`
    font-family: 'Titillium Web';
    width: 50%;
    font-size: 14px;
    border: 1px solid #fff;
    display: flex;
    font-weight: normal;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F2F2F2;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &.selectedTab {
        font-weight: bold;
        &:before {
            content: "";
            position: absolute;
            top: 1px;
            background-color: #fff;
            height: 3px;
            width: 50%;
        }
    }
`
export const StyledTabPanel = styled(TabPanel)`
    padding: 32px 18px;
`
export const TabContent = styled.div`
    background: linear-gradient(90deg, #333333 4.8%, rgba(51, 51, 51, 0) 70.13%), url(${props => props.bg ? props.bg : props.bg});
    height: 424px;
    display: flex;
    align-items: flex-start;
`
export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 235px;
    justify-content: space-around;
    width: 100%;
`
export const PageTitle = styled.h1`
    font-family: 'Titillium Web';
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 36px;
    line-height: 37px;
    font-weight: normal;
    text-transform: uppercase;
    width: 50%;
    color: #fff;
    margin: 0;
`
export const PageSubtitle = styled.h2`
    font-family: 'Titillium Web';
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    font-weight: bold;
    line-height: 14px;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
`

export const LogoContainer = styled.div`
    display: flex;
    margin-bottom: 36px;
    height: auto;
    width: auto;

    .logo-name {
        width: 81px;
        height: 26px;
    }
    .logo {
        height: 35px;
    }
`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 15px;
`
export const TitleContainer = styled.div`

` 

StyledTabList.tabsRole = 'TabList'
StyledTab.tabsRole = 'Tab'
StyledTabPanel.tabsRole = 'TabPanel'
StyledTabs.tabsRole = 'Tabs'