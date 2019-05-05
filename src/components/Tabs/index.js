import React from 'react'
import {Tabs, TabPanel } from 'react-tabs';
import bg from '../../img/bg-credits-img.png';
import bg2 from '../../img/bg-data-img.png';
import RechargeCard from '../RechargeCard';
import axios from 'axios'

import {
    StyledTabs,
    StyledTabList,
    StyledTab,
    StyledTabPanel,
    TabContent,
    CardsContainer,
} from './style'

class HapzTabs extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            bonus: 0,
            gb_amount: 0,
            data1: [],
            data2: [],
            arr: [] 
        }
    }

    componentDidMount () {
        axios.get("https://tidal-hearing.glitch.me/recarga")
            .then(response => {
                // handle success
                console.log(response);
                this.setState({
                    data1: response.data
                })
            })
        axios.get("https://tidal-hearing.glitch.me/dados")
            .then(data => {
                console.log(data)
                this.setState({
                        data2: data.data
                })
            })
    }

    concatObj(data1, data2, arr) {
        arr = data1.concat(data2)
        console.log(arr)

        for(let i = 0; i < arr.lenght; i++){
            if(i <= arr[1])
            {
                
            }
        }
    }

    render () {
        return (
            <StyledTabs selectedTabClassName="selectedTab">
                <div>
                    {this.props.renderTabsPanel.map((item, key) =>{
                        return (
                            <TabPanel key={key}>
                            {this.concatObj(this.state.data1, this.state.data2, this.state.arr)}
                                <CardsContainer>
                                    {item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={item.cardValue}></RechargeCard>
                                        )
                                    })
                                    }
                                </CardsContainer>
                                <TabContent bg={item.bg}></TabContent>
                            </TabPanel>
                        )
                    })
                    }
                    {/* <TabPanel>
                        <CardsContainer>
                            <RechargeCard>Contratar</RechargeCard>
                            <RechargeCard>Contratar</RechargeCard>
                        </CardsContainer>
                        <TabContent bg={bg}></TabContent>
                    </TabPanel>
                    <TabPanel>
                        <TabContent bg={bg2}></TabContent>
                    </TabPanel> */}
                </div>
                <StyledTabList>
                    <StyledTab>Dados</StyledTab>
                    <StyledTab>Créditos</StyledTab>
                </StyledTabList>
            </StyledTabs>
        )
    }
}

export default HapzTabs