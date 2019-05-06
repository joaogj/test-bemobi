import React from 'react';
import {TabPanel} from 'react-tabs';
import {connect} from 'react-redux';
import {recarga, dados} from '../../actions/recarga'
import logo from '../../img/hapz-thunder.png';
import hapz from '../../img/hapz-logo.png';
import RechargeCard from '../RechargeCard';
import axios from 'axios';

import {
    StyledTabs,
    LogoContainer,
    PageTitle,
    TitleContainer,
    PageSubtitle,
    HeaderContainer,
    StyledTabList,
    StyledTab,
    TabContent,
    CardsContainer,
} from './style'


const mapDispatchToProps = dispatch => ({
    recarga: () => dispatch(recarga())
  })
  
  const mapStateToProps = state => ({
    amount: state.recargaReducer.amount,
    bonus: state.recargaReducer.bonus_amount,
    gb_amount: state.recargaReducer.gb_amount
   })
  

class HapzTabs extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            amount: {},
            bonus: {},
            gb_amount: {},
        }
    }

    render () {
        if (!this.props.amount)
            return <div>Loading...</div>;

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
                                            <PageTitle>Recarregue Agora</PageTitle>
                                        </TitleContainer>
                                    </HeaderContainer>
                                </TabContent>
                                <CardsContainer className="aqui-otario">
                                {item.api === "https://tidal-hearing.glitch.me/recarga" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={this.props.amount[key]} bonus={this.state.bonus[key]}></RechargeCard>
                                        )
                                    })
                                }
                                {item.api === "https://tidal-hearing.glitch.me/dados" &&
                                    item.renderRechargeCards.map((item, key) => {
                                        return (
                                            <RechargeCard key={key} cardValue={this.props.gb_amount[key]}></RechargeCard>
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

export default connect(mapStateToProps)(HapzTabs);