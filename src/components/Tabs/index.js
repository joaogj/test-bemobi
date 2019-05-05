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
            amount: 5,
            bonus: 0,
            gb_amount: 0,
            data1: [],
            data2: [],
            arr: [] 
        }
    }

    getValues = (data) => {
        axios.get(data)
            .then(response => {
                // handle success
                console.log(response.data[0]);
                // this.setState({
                //     arr: response.data
                // })
                // console.log("arr " + this.state.arr)
                if(data === "https://tidal-hearing.glitch.me/recarga")
                {
                    console.log("é recarga")

                   for(let i = 0; i < response.data.lenght; i++)
                   {
                       console.log(response.data[i])
                       console.log("fjkasjfsafj")
                       this.setState({
                           amount: response.data[i].amount
                       })
                   }
                   console.log(this.state.amount)
                }
                else if(data === "https://tidal-hearing.glitch.me/dados")
                {
                    console.log("é dados")

                   for(let i = 0; i < response.data.lenght; i++)
                   {
                        console.log("dadoooooos")
                       console.log(response.data[i].amount)
                       this.setState({
                           gb_amount: response.data[i].gb_amount
                       })
                   }
                   console.log(this.state.gb_amount)
                }
            })
    }

    render () {
        return (
            <StyledTabs selectedTabClassName="selectedTab">
                <div>
                    {this.props.renderTabsPanel.map((item, key) =>{
                        return (
                            <TabPanel key={key}>
                            {this.getValues(item.api)}
                                <CardsContainer>
                                {item.api === "https://tidal-hearing.glitch.me/recarga" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={this.state.amount}></RechargeCard>
                                        )
                                    })
                                }
                                {item.api === "https://tidal-hearing.glitch.me/dados" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={this.state.gb_amount}></RechargeCard>
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