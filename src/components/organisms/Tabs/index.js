import React from 'react';
import {TabPanel} from 'react-tabs';
import logo from '../../../img/hapz-thunder.png';
import hapz from '../../../img/hapz-logo.png';
import RechargeCard from '../../molecules/RechargeCard';
import Title from '../../atoms/Title'
import axios from 'axios';

import {
    StyledTabs,
    LogoContainer,
    TitleContainer,
    PageSubtitle,
    HeaderContainer,
    StyledTabList,
    StyledTab,
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

    componentWillMount(){
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
        return (
            <StyledTabs selectedTabClassName="selectedTab">
                <div>
                    {this.props.renderTabsPanel.map((item, key) =>{
                        return (
                            <TabPanel key={key}>
                                <TabContent bg={item.bg}>
                                    <HeaderContainer>
                                        <LogoContainer>
                                            <img className="logo" src={logo} alt="" />
                                            <img className="logo-name" src={hapz} alt="" />
                                        </LogoContainer>
                                        <TitleContainer>
                                            <PageSubtitle>Você está sem saldo</PageSubtitle>
                                            <Title title="Recarregue Agora"/>
                                        </TitleContainer>
                                    </HeaderContainer>
                                </TabContent>
                                <CardsContainer>
                                {item.api === "https://tidal-hearing.glitch.me/recarga" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard 
                                                key={key} 
                                                cardValue={this.state.amount[key]} 
                                                bonus={this.state.bonus[key]}
                                                textButton={item.textButton}>
                                            </RechargeCard>
                                        )
                                    })
                                }
                                {item.api === "https://tidal-hearing.glitch.me/dados" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard 
                                                key={key} 
                                                cardValue={this.state.gb_amount[key]}
                                                textButton={item.textButton}>
                                            </RechargeCard>
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

export default HapzTabs;