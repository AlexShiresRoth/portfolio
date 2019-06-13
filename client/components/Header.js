import React, { Component } from 'react';
import '../css/main.css';

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }


    render(){

        return(
            <section className="section__header">
                <div className="section__header--overlay"></div>
                    <div className="section__header--logo">
                        <img src={require('../../images/logotwo.png')} alt="asr logo"></img>
                    </div>
                    <div className="section__header--title-and-desc">
                        <h1>Alex Shires Roth</h1>
                        <hr></hr>
                        <p>Full Stack Developer/Game Developer</p>
                    </div>
            </section>
        )
    }
}