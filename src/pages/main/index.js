import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/box-icon.png';

export default class Main extends Component {
    state = {
        newBox: '',
    };

    handleSubmit = async e => {
        console.log('entrando no submit');
        e.preventDefault();

        const response = await api.post('/boxes', {
            title: this.state.newBox
        });
        
        console.log(response.data);
        this.props.history.push(`/box/${response.data._id}`);
        console.log(this.props);
    }

    handleInputChange = (e) => {
        
        this.setState({ newBox: e.target.value})
    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input 
                      placeholder="Criar um box"
                      value={this.state.newBox}
                      onChange={this.handleInputChange}

                     />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}