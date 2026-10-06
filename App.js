import React from 'react';
import {View, Text, Image, TextInput, Pressable, ScrollView, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar backgroundColor="purple" />
      <ScrollView>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Academia de Magia</Text>
          <Text>Bem vindo aluno!</Text>
        </View>

        <Image
          style={styles.imagem}
          source={{uri: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23'}}
        />

        <View style={styles.conteudo}>

          <Text style={styles.texto}>O que deseja aprender hoje?</Text>

          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
          />

          <Pressable style={styles.botao}>
            <Text>Feitiços</Text>
          </Pressable>

          <Pressable style={styles.botao}>
            <Text>Poções</Text>
          </Pressable>

          <Pressable style={styles.botao}>
            <Text>Aulas</Text>
          </Pressable>

        </View>
        <Text style={styles.rodape}>Academia de Magia</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#eee'
  },
  cabecalho: {
    backgroundColor: 'purple',
    padding: 20
  },
  titulo: {
    fontSize: 25,
    color: 'white'
  },
  imagem: {
    width: 300,
    height: 150,
    margin: 20
  },
  conteudo: {
    padding: 20
  },
  texto: {
    fontSize: 18,
    marginBottom: 15
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15
  },
  botao: {
    backgroundColor: '#aaa',
    padding: 15,
    marginBottom: 10
  },
  rodape: {
    textAlign: 'center',
    margin: 20
  }
});