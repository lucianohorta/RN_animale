import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, ActivityIndicator, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {BannerTitle, BannerSubTitle, BannerBtn, ShopNowText, IconBagContainer, IconBag, MainContent, HeadersHome, H2, VerTudoBtn, VerTudoBtnText, HotTrends, Jaquetas, ScrollViewContent, ShopNowContainer_Thumb, ShopNowText_Thumb, NewInFooter} from './assets/css/style.js';
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

  const Product = ({title,image,price,onPress}) => {
    return <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{flexDirection: 'column', paddingRight: 10, marginTop: 30}}>

          <Image style={{ height: 360, width: 270, resizeMode: 'contain'}} source={{uri: image, }}/>

          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{color:'grey',fontFamily:'Futura Bk BT',fontSize:13,width:220,paddingVertical:4}}>
              {title}
            </Text>
            <Text style={{fontFamily: 'Futura Bk BT', fontWeight: 'bold'}}>
              {price}
            </Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </>
  } 

  return (
    
    <View style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        
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
                scrollEventThrottle={200}
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
                localJson.slice(0,10).map((item)=> {
                    return <Product 
                    title={item.productName} 
                    image={item.items[0].images[0].imageUrl} 
                    price={`R$ ${item.items[0].sellers[0].commertialOffer.Price}`}
                    onPress={()=>{
                        this.props.navigation.navigate('Product', item)
                        this.setViewedProduct(item)
                    }}
                    />
                })
            }
            </View>
            </ScrollView>



          </MainContent>
        
      </ScrollView>
    </View>

  );
}

function MenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu screen!</Text>
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

  constructor(){
    super()
    this.state = { 
      produto: [],
      fontsLoaded: false,
    }
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
  }

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