import React, { Component } from 'react';
import './BurgerStyle.css';

export default class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
            if(stateValue == lettuce){
                this.setState({ count: this.state.count + 0.5 })
            }
            else if(stateValue == tomato){
                this.setState({ count: this.state.count + 0.7 })
            }
            else if(stateValue == cheese){
                this.setState({ count: this.state.count + 0.4 })
            }
            else {
                this.setState({ count: this.state.count + 1.3 })
            }
           
        }else{
            stateValue = stateValue - 1;
            if(stateValue == lettuce){
                this.setState({ count: this.state.count - 0.5 })
            }
            else if(stateValue == tomato){
                this.setState({ count: this.state.count - 0.7 })
            }
            else if(stateValue == cheese){
                this.setState({ count: this.state.count - 0.4 })
            }
            else {
                this.setState({ count: this.state.count - 1.3 })
            }
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;
        let burger = [];

        for (let i = 0; i <= lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }

        for (let i = 0; i <= tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }

        for (let i = 0; i <= cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }

        for (let i = 0; i <= meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    render(){
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Current Price: $ {this.state.count}</p>
                    <div className="ingrBtns">
                        <p>Lettuce</p>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')} disabled={this.state.count == 0}>Less</button>
                    </div>
                    <br />
                    <div className="ingrBtns">
                        <p>TOMATO</p>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')} disabled={this.state.count == 0}>Less</button>
                    </div>
                    <br />
                    <div className="ingrBtns">
                        <p>CHEESE</p>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')} disabled={this.state.count == 0}>Less</button>
                    </div>
                    <br />
                    <div className="ingrBtns">
                        <p>MEAT</p>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>More</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')} disabled={this.state.count == 0}>Less</button>
                    </div>
                    <br />
                </div>
            </>
        );
    }
}