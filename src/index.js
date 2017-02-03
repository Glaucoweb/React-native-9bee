import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux'

//telas
import Login from './login'
import Cadastro from './cadastro'
import Home from './home'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} initial={true} hideNavBar={true} title="Login"/>
    <Scene key="home" component={Home} hideNavBar={true} title="Home"/>
    <Scene key="cadastrar" component={Cadastro} hideNavBar={true} title="Cadastrar"/>
  </Scene>
);


class Index extends Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default Index