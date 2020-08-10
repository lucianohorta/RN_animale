import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Alert, ImageBackground, ActivityIndicator, TextInput, FlatList, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {Searchbar, Categorias, BannerTitle, BannerSubTitle, BannerBtn, ShopNowText, IconBagContainer, IconBag, MainContent, HeadersHome, H2, VerTudoBtn, VerTudoBtnText, HotTrends, Jaquetas, ScrollViewContent, ShopNowContainer_Thumb, ShopNowText_Thumb, NewInFooter} from './assets/css/style.js';
import Constants from "expo-constants";
// import axios from 'axios';
// import { FlatList } from 'react-native-gesture-handler';


// Fonts:
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
const getFonts = () => Font.loadAsync({
  'Didot': require('./assets/fonts/Didot-Bold.ttf'),
  'Futura-Medium': require('./assets/fonts/Futura-Medium.ttf'),
  'Futura-Book': require('./assets/fonts/Futura-Book.ttf'),
});

const width = Dimensions.get('screen').width;
const height= Dimensions.get('screen').height;

const localJson = require('./data/products.json');


function InicioScreen() {

  const ProductThumb = ({image,title,price,parcelas,onPress}) => {
    return <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{flexDirection: 'column', paddingRight: 10, marginTop: 30}}>

          <Image style={{ height: 360, width: 270, resizeMode: 'contain'}} source={{uri: image}}/>

          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{fontFamily:'Futura-Book', fontSize:13, width:220, paddingVertical:2}}>
              {title}
            </Text>
            <Text style={{fontFamily: 'Futura-Book', fontSize: 13, fontWeight: 'bold', paddingVertical:2}}>
              {price}
            </Text>
            {/* TO DO: EXIBIR PARCELAS DINAMICAMENTE (já exibe no console mas nao renderiza): */}
            <Text style={{fontFamily: 'Futura-Book', fontSize: 12, paddingVertical:2}}>   
              {/* {parcelas} */}
              5x de R$ 105,80
            </Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </>
  } 

  return (
    
    <View style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>

          {/* HEADER BANNER */}
          <ImageBackground source={require('./assets/img/editorial_pic.png')}  style={{width: width, height: height }}>
            
              <IconBagContainer>
                <IconBag source={require('./assets/img/icon_bag.png')} />
              </IconBagContainer>

              <BannerTitle>PREVIEW</BannerTitle>

              <BannerSubTitle>NEW WAVE</BannerSubTitle>

              <BannerBtn>
                <ShopNowText>SHOP NOW</ShopNowText>
              </BannerBtn>

          </ImageBackground>


          {/* NEW IN - SESSAO 2: */}
          <MainContent>

            <HeadersHome>
              <H2> NEW IN </H2>
              
              <VerTudoBtn>
                <VerTudoBtnText>Ver tudo</VerTudoBtnText>
              </VerTudoBtn>
            </HeadersHome>

            <ScrollViewContent>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
              >
                <ImageBackground source={require('./assets/img/hottrends.png')}  style={{width: width/2, height: 280, margin: 5}}> 
                  <HotTrends>HOT TRENDS</HotTrends>
                  <ShopNowContainer_Thumb>
                    <ShopNowText_Thumb>SHOP NOW</ShopNowText_Thumb>
                  </ShopNowContainer_Thumb>
                </ImageBackground>
                <ImageBackground source={require('./assets/img/jaquetas.png')}  style={{width: width/2, height: 280, margin: 5}}>
                  <HotTrends>JAQUETAS</HotTrends>
                  <ShopNowContainer_Thumb>
                    <ShopNowText_Thumb>SHOP NOW</ShopNowText_Thumb>
                  </ShopNowContainer_Thumb>
                </ImageBackground>
              
                    
              </ScrollView>
            </ScrollViewContent>

            <NewInFooter>
              <ImageBackground source={require('./assets/img/preview.png')}  style={{width: width, height: height }}>

              <BannerBtn>
                <ShopNowText>SHOP NOW</ShopNowText>
              </BannerBtn>

              </ImageBackground>
            </NewInFooter>


          {/* VISTOS RECENTEMENTE - SESSAO 3: */}
            <HeadersHome>
              <H2> VISTOS RECENTEMENTE </H2>
              
              <VerTudoBtn>
                <VerTudoBtnText>Limpar</VerTudoBtnText>
              </VerTudoBtn>
            </HeadersHome>

            <ScrollViewContent>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // scrollEventThrottle={200}
              >
                <ImageBackground source={require('./assets/img/vistos1.png')}  style={{width: width/2, height: 280, margin: 5}} /> 
                <ImageBackground source={require('./assets/img/vistos2.png')}  style={{width: width/2, height: 280, margin: 5}} />
                <ImageBackground source={require('./assets/img/vistos1.png')}  style={{width: width/2, height: 280, margin: 5}} /> 
                <ImageBackground source={require('./assets/img/vistos2.png')}  style={{width: width/2, height: 280, margin: 5}} />

              </ScrollView>
            </ScrollViewContent>
            

            <NewInFooter>
              <ImageBackground source={require('./assets/img/preview.png')}  style={{width: width, height: height }}>
                <BannerBtn>
                  <ShopNowText>SHOP NOW</ShopNowText>
                </BannerBtn>
              </ImageBackground>
            </NewInFooter>



            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start',  }}>
              {
                  localJson.slice(0,10).map((item, index)=> {
                      return <ProductThumb 
                        key={index}
                        image={item.items[0].images[0].imageUrl} 
                        title={item.productName} 
                        price={`R$ ${item.items[0].sellers[0].commertialOffer.Price}`}
                        //parcelas={item.items[0].sellers[0].commertialOffer.Installments[5].map(parcela => {parcela.Value} )}
                        onPress={()=>{
                          this.props.navigation.navigate('Product', item)
                          this.setViewedProduct(item)
                        }}
                      />
                  })
              }
              </View>
            </ScrollView>

            <View>
              <TouchableOpacity 
                  // TODO -> WEBVIEW ABRINDO NO LUGAR DO LINK:
                  onPress={ () => Linking.openURL('https://www.animale.com.br/nossas-lojas')}
                  style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 20, paddingVertical: 20, borderColor: 'lightgrey', borderTopWidth: 1}}>
                <Image source={ require('./assets/img/icon_location.png')}  style={{width: 25, height: 25, }} />
                <Text style={{fontFamily: 'Futura-Book', fontSize: 13, paddingVertical:6, paddingLeft:12}}> Encontre uma loja </Text> 
                <Image source={ require('./assets/img/arrow.png')}  style={{width: 18, height: 18, position: 'absolute', right: 20, marginTop: 6}} />
              </TouchableOpacity>
              <TouchableOpacity 
                  // TODO -> WEBVIEW ABRINDO NO LUGAR DO LINK:
                  onPress={ () => Linking.openURL('https://www.animale.com.br/vendedor-online')}
                  style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 20, paddingVertical: 20, borderColor: 'lightgrey', borderTopWidth: 1}}>
                <Image source={ require('./assets/img/icon_chat.png')}  style={{width: 25, height: 25, }} />
                <Text style={{fontFamily: 'Futura-Book', fontSize: 13, paddingVertical:6, paddingBottom: 2, paddingLeft:12}}> Fale com um vendedor </Text> 
                <Image source={ require('./assets/img/arrow.png')}  style={{width: 18, height: 18, position: 'absolute', right: 20, marginTop: 6}} />
              </TouchableOpacity>
            </View>


          </MainContent>
        
      </ScrollView>
    </View>

  );
}

function MenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
      
    {/* BUSCAR DINAMICO: */}
        {/* <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this.searchData(text)}
            // onFocus={implementar!}
            value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder="Busque por produtos..." />
        
        { this.state.isHidden ?  
          <FlatList
              hide={false}
            data={this.state.data}
            keyExtractor={ (item, index) => index.toString() }
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={({ item }) => <Text style={styles.row}
            onPress={this.GetFlatListItem.bind(this, item.productName)} >{item.productName}</Text>}
            style={{ marginTop: 10 }} />
        : null } */}

    <Text style={{fontFamily: 'Futura-Medium', fontSize: 14, letterSpacing: 1.5, marginTop: 20, flex: 1, justifyContent: 'flex-start', alignContent: 'center'}}> MENU </Text>

    <IconBagContainer style={{top: 14}} >
      <IconBag source={require('./assets/img/icon_bag_black.png')} />
    </IconBagContainer>

    {/* BUSCAR 'ESTATICO': */}
        <Searchbar>
          <TextInput 
            style={{flex: 1, backgroundColor: '#dedede', padding: 10, paddingLeft: 60, color: '#969696', fontSize: 12, marginTop: 10}}
            //onChangeText={(text) => this.searchData(text)}
            //value={this.state.text}
            underlineColorAndroid='transparent'
            placeholder="Busque por produtos..." />
          <Image source={require('./assets/img/icon_search.png')}  style={{width: 30, height: 25, margin: 5, position: 'absolute', left: 10, top: 12}} />
        </Searchbar>



        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{position: 'absolute',left: 0,right: 0, top: 120, marginLeft: 20}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/malha.png')}  style={{width: 70, height: 70, margin: 5,}} />
              <Text style={{fontSize: 13}}>Malha</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/jaqueta.png')}  style={{width: 70, height: 70, margin: 5}} />
              <Text style={{fontSize: 13}}>Jaquetas</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/tricot.png')}  style={{width: 70, height: 70, margin: 5}} />
              <Text style={{fontSize: 13}}>Tricot</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/blusas.png')}  style={{width: 70, height: 70, margin: 5}} />
              <Text style={{fontSize: 13}}>Blusas</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/shorts.png')}  style={{width: 70, height: 70, margin: 5}} />
              <Text style={{fontSize: 13}}>Shorts</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/malha.png')}  style={{width: 70, height: 70, margin: 5,}} />
              <Text style={{fontSize: 13}}>Malha</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/jaqueta.png')}  style={{width: 70, height: 70, margin: 5}} />
              <Text style={{fontSize: 13}}>Jaquetas</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('./assets/img/tricot.png')}  style={{width: 70, height: 70, margin: 5}} />
              <Text style={{fontSize: 13}}>Tricot</Text>
            </View>
        </ScrollView>


        <ScrollView style={{marginLeft: 20, marginTop: 200}}>
          <Categorias source={require('./assets/img/colecao.png')}  style={{width: 418, height: 160, resizeMode: 'contain', marginLeft: -20, marginBottom: -30, marginRight: 10}} />
          <Categorias source={require('./assets/img/novidades.png')}  style={{width: 418, height: 160, resizeMode: 'contain', marginLeft: -20, marginBottom: -30, marginRight: 10}} />
          <Categorias source={require('./assets/img/acessorios.png')}  style={{width: 418, height: 160, resizeMode: 'contain', marginLeft: -20, marginBottom: -30, marginRight: 10}} />
          <Categorias source={require('./assets/img/intimates.png')}  style={{width: 418, height: 160, resizeMode: 'contain', marginLeft: -20, marginBottom: -30, marginRight: 10}} />
          <Categorias source={require('./assets/img/sale.png')}  style={{width: 418, height: 160, resizeMode: 'contain', marginLeft: -20, marginBottom: -30, marginRight: 10}} />
        </ScrollView>

    </View>
  );
}

function MyListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My List screen!!!</Text>
    </View>
  );
}

function ContaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ContaScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  icon: {
    width: 26,
    height: 26,
  },
  label: {
    fontSize: 12
  },
  scrollView: {
    backgroundColor: 'white',
  },
 });



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      produto: [],
      fontsLoaded: false,
      // SEARCHBAR:
      text: '',
      data: [],
      isLoading: true,
      isHidden: false
    }
    this.arrayholder = [];
  }

  updateFontsLoadedState = () => {
    this.setState({ fontsLoaded: true });
  }
  


  componentDidMount() {
    // fetch('https://raw.githubusercontent.com/lucianohorta/jsontest/master/products.json')
    //   .then(resposta => resposta.json())
    //   .then(json => 
    //     this.setState({produtos: json}));
        // usando localJson pra importar json localmente no lugar disso /\

    //console.log(localJson[1].items[0].sellers[0].commertialOffer.Installments[5].NumberOfInstallments +'x de R$'+localJson[1].items[0].sellers[0].commertialOffer.Installments[5].Value )
    //console.log(localJson[1].items[0].sellers[0].commertialOffer.Installments[5]);

    // SEARCHBAR:
    return fetch('https://raw.githubusercontent.com/lucianohorta/jsontest/master/products.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  GetFlatListItem(productName) {
    Alert.alert(productName);
  }
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.productName.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });

    this.setState({
      data: newData,
      text: text,
      isHidden: true
      })
  }
  itemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  // SEARCHBAR /\

  render() {
    const { fontsLoaded } = this.state;

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

      if (!fontsLoaded) {
          return <AppLoading
                    startAsync={getFonts}
                    onFinish={this.updateFontsLoadedState}
                  />
      } else {
          return (
            <NavigationContainer>
                <SafeAreaView style={styles.container}>

              {/* SEARCHBAR: */}
                {/* <TextInput 
                  style={styles.textInput}
                  onChangeText={(text) => this.searchData(text)}
                  // onFocus={onSignupPress()}
                  value={this.state.text}
                  underlineColorAndroid='transparent'
                  placeholder="Busque por produtos..." />
              
              { this.state.isHidden ?  
                <FlatList
                    hide={false}
                  data={this.state.data}
                  keyExtractor={ (item, index) => index.toString() }
                  ItemSeparatorComponent={this.itemSeparator}
                  renderItem={({ item }) => <Text style={styles.row}
                  onPress={this.GetFlatListItem.bind(this, item.productName)} >{item.productName}</Text>}
                  style={{ marginTop: 10 }} />
              : null } */}

                <Tab.Navigator
                    initialRouteName="Início"
                  >
                    <Tab.Screen 
                        name= "início"
                        component={InicioScreen} 
                        options={{
                          tabBarLabel: ({ tintColor }) => (
                            <Text style={[styles.label, {color: tintColor}]}> início </Text>
                          ),
                          tabBarIcon: ({focused}) => (
                            <Image
                              source={ focused ? require('./assets/img/icon_home.png') : require('./assets/img/icon_home_grey.png') }
                              style={{
                                width: 25,
                                height: 25, 
                              }}
                            />
                          ),
                        }}
                    />
                    <Tab.Screen 
                        name="menu" 
                        component={MenuScreen} options={{
                          tabBarLabel: ({ tintColor }) => (
                            <Text style={[styles.label, {color: tintColor}]}> menu </Text>
                          ),
                        tabBarIcon: ({focused}) => (
                          <Image
                            source={ focused ? require('./assets/img/icon_menu.png') : require('./assets/img/icon_menu_grey.png') }
                            style={{
                              width: 25,
                              height: 25,
                            }}
                          />
                        ),
                      }}
                    />
                    <Tab.Screen 
                        name="my list" 
                        component={MyListScreen} options={{
                          tabBarLabel: ({ tintColor }) => (
                            <Text style={[styles.label, {color: tintColor}]}> my list </Text>
                          ),
                          tabBarIcon: ({focused}) => (
                            <Image
                              source={ focused ? require('./assets/img/icon_saved.png') : require('./assets/img/icon_saved_grey.png') }
                              style={{
                                width: 25,
                                height: 25,
                              }}
                            />
                          ),
                      }}
                    />
                    <Tab.Screen 
                        name="conta" 
                        component={ContaScreen} options={{
                          tabBarLabel: ({ tintColor }) => (
                            <Text style={[styles.label, {color: tintColor}]}> conta </Text>
                          ),
                          tabBarIcon: ({focused}) => (
                            <Image
                              source={ focused ? require('./assets/img/icon_account.png') : require('./assets/img/icon_account_grey.png') }
                              style={{
                                width: 25,
                                height: 25,
                              }}
                            />
                          ),
                      }}
                    />
                  </Tab.Navigator>

                </SafeAreaView>
            </NavigationContainer>
          );
      }
  }
}

export default App;