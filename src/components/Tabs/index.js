import React from 'react'
import {Tabs, TabPanel } from 'react-tabs';
import bg from '../../img/bg-credits-img.png';
import bg2 from '../../img/bg-data-img.png';
import logo from '../../img/hapz-thunder.png';
import hapz from '../../img/hapz-logo.png';
import RechargeCard from '../RechargeCard';
import axios from 'axios'

import {
    StyledTabs,
    LogoContainer,
    PageTitle,
    TitleContainer,
    PageSubtitle,
    HeaderContainer,
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
            amount: {},
            bonus: {},
            gb_amount: {},
        }
    }

    componentDidMount(){
        axios.get("https://tidal-hearing.glitch.me/recarga")
            .then(response => {
                for(let i = 0; i < response.data.length; i++)
                {
                    this.setState({
                        amount: { ...this.state.amount, [i]: response.data[i].amount},
                        bonus: {...this.state.bonus, [i]: response.data[i].bonus_amount}
                    });
                }
            })
        axios.get("https://tidal-hearing.glitch.me/dados")
            .then(response =>{
                for(let i = 0; i < response.data.length; i++)
                {
                    this.setState({
                        gb_amount: { ...this.state.gb_amount, [i]: response.data[i].gb_amount}
                    });
                }
            })
    }

    render () {
        console.log(this.state.amount);
        return (
            <StyledTabs selectedTabClassName="selectedTab">
                <div>
                    {this.props.renderTabsPanel.map((item, key) =>{
                        return (
                            <TabPanel key={key}>
                                <TabContent bg={item.bg}>
                                    <HeaderContainer>
                                        <LogoContainer>
                                            <img className="logo" src={logo} />
                                            <img className="logo-name" src={hapz} />
                                        </LogoContainer>
                                        <TitleContainer>
                                            <PageSubtitle>Você está sem saldo</PageSubtitle>
                                            <PageTitle>Recarregue Agora</PageTitle>
                                        </TitleContainer>
                                    </HeaderContainer>
                                </TabContent>
                                <CardsContainer className="aqui-otario">
                                {item.api === "https://tidal-hearing.glitch.me/recarga" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={this.state.amount[key]} bonus={this.state.bonus[key]}></RechargeCard>
                                        )
                                    })
                                }
                                {item.api === "https://tidal-hearing.glitch.me/dados" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={this.state.gb_amount[key]}></RechargeCard>
                                        )
                                    })
                                }
                                </CardsContainer>
                            </TabPanel>
                        )
                    })
                    }
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