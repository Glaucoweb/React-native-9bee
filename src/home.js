import React, { Component } from 'react';
import {Text, Alert, View, Button, StyleSheet, TextInput, Image, TouchableHighlight} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import AppSessao from './sessao'

class home extends Component{
    constructor(props){
        super(props);
        this.state = {
          nome: '',
          email: '',
          login: ''
        }
    }

    componentDidMount = () => {
        AppSessao.getItem('usuario').then((data) =>{
          this.setState({
            nome: JSON.parse(data).nome,
            email: JSON.parse(data).email,
            login: JSON.parse(data).login
          });
        });
    }

  render() {
      return(
          <View style={[styles.container]}>
              <Text>Seja bem vindo!</Text>
              <Text>Nome: {this.state.nome}</Text>
              <Text>Email: {this.state.email}</Text>
              <Text>Login: {this.state.login}</Text>
          </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
  )

export default home
