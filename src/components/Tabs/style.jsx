import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import bg from '../../img/bg-credits-img.png';

export const StyledTabs = styled(Tabs)`
    /* background-image: url(${bg}); */
    height: 424px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 15px;
`

export const StyledTabList = styled(TabList)`
    /* background-image: url(${bg}); */
    width: 100%;
    height: 44px;
    /* background: #4F4F4F; */
    /* border: 1px solid #f2f2f2; */
    box-sizing: border-box;
    display: flex;
    position: absolute;
    padding: 0;
    margin-top: 0;
`
export const StyledTab = styled(Tab)`
    width: 50%;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    &.selectedTab {
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
    background: linear-gradient(90deg, #333333 4.8%, rgba(51, 51, 51, 0) 70.13%), url(${props => props.bg ? props.bg : props.bg});
    height: 100%;
`
export const TabContent = styled.div`
    background: linear-gradient(90deg, #333333 4.8%, rgba(51, 51, 51, 0) 70.13%), url(${props => props.bg ? props.bg : props.bg});
    height: 424px;
`
export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 235px;
    justify-content: space-around;
    width: 100%;
`

StyledTabList.tabsRole = 'TabList'
StyledTab.tabsRole = 'Tab'
StyledTabPanel.tabsRole = 'TabPanel'
StyledTabs.tabsRole = 'Tabs'