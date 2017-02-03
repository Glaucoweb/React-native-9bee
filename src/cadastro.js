import React, { Component } from 'react';
import {Text, Alert, View, Button, StyleSheet, TextInput, Image, TouchableHighlight} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import AppSessao from './sessao'

class Cadastro extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      login:'',
      email:'',
      senha: ''

    }
  }

  cadastrar = () => {
    fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: this.state.nome,
            login: this.state.login,
            email: this.state.email,
            password: this.state.senha,
        })}).then((responseData) => {
        if (responseData.status == 201) {
          (responseData.json()).then((response) => {

            AppSessao.setItem('usuario', JSON.stringify({
              nome: this.state.nome,
              login: this.state.login,
              email: this.state.email})
            );
            Actions.home();

          });
        }else {Alert.alert('Dados inválidos', responseData.status.toString())}

    }).catch((error) => {
        console.log(error);
    }).done();
  }


  render() {
      return (
        <View style={[styles.container]}>
          <Text style={[styles.label]}>Informe seus dados.</Text>
          <View style={[styles.form]}>
            <TextInput style={[styles.input]}
              placeholder="Nome Completo"
              onChangeText={(text) => this.setState({nome: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="login"
              onChangeText={(text) => this.setState({login: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="email"
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="senha"
              onChangeText={(text) => this.setState({senha: text})}
              secureTextEntry
            />
            <Button color={'#ffcc00'} title={'Cadastrar'} onPress={() => this.cadastrar()} />
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderColor: 'transparent',
  },
  logo: {
    width: 260,
    height: 260,
    backgroundColor: 'transparent',
    marginBottom: 10,
    alignItems: 'center',
  },
  form: {
    margin: 20,
  },
  label: {
    color:'#ffcc00',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center'
  }
})

export default Cadastro
