import React, { Component } from 'react';
import './BurgerStyle.css';

export default class Header extends Component {
    render() {
        return (
            <div class="navbar navbar-expand-lg background">
                <a class="navbar-brand" href="#"><img src="https://react-builder-burger.firebaseapp.com/static/media/burger-logo.b8503d26.png" style={{width: "50px"}}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                
                </ul>
                <div class="form-inline my-2 my-lg-0" >
                    <p class="my-2 my-sm-0 text-light" type="submit">Burger Builder</p>
                </div>
            </div>
            </div>
        );
    }
}