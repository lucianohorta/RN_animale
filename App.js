import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, ActivityIndicator, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import Constants from "expo-constants";
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

// Fonts:
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


const getFonts = () => Font.loadAsync({
  'Didot': require('./assets/fonts/Didot-Bold.ttf'),
  'Futura-Medium': require('./assets/fonts/Futura-Medium.ttf'),
  'Futura-Book': require('./assets/fonts/Futura-Book.ttf'),
});

const width = Dimensions.get('screen').width;
const height= Dimensions.get('screen').height;



const BannerTitle = styled.Text`
  font-family: 'Didot-Bold';
  font-size: 28px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 255px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center; 
  letter-spacing: 6.67px;
`;

const BannerSubTitle = styled.Text`
  font-family: 'Didot-Bold';
  font-size: 40px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  letter-spacing: 2.81px;
`;

const BannerBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 20px;
  border: 1px solid #FFF;
  width: 190px;
  height: 12px
`;

const ShopNowText = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 16px;
  color: #FFFFFF;
`;

const IconBagContainer = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 30px;
`;

const IconBag = styled.Image`
  width: 24px;
  height: 24px;
`;

const MainContent = styled.View`
  margin-bottom: 20px
`;

const HeadersHome = styled.Text`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 20px
`;

const H2 = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.08px;
`;

const VerTudoBtn = styled.TouchableOpacity`
  display: flex;
`;

const VerTudoBtnText = styled.Text`
  font-family: 'Futura-Book';
  font-size: 16px;
  color: #000000;
`;

const HotTrends = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 20px;
  letter-spacing: 1.4px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 125px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center; 
`;

const Jaquetas = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 20px;
  letter-spacing: 1.4px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 125px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center; 
`;

const ScrollViewContent = styled.View`
  margin-left: 20px;
`;

const ShopNowContainer_Thumb = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 75px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 14px;
  border: 1px solid #FFF;
  width: 140px;
  height: 12px
`;

const ShopNowText_Thumb = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 16px;
  color: #FFFFFF;
`;

const NewInFooter = styled.View`
  margin-top: 60px;
`;

function InicioScreen() {
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
    fetch('https://raw.githubusercontent.com/lucianohorta/jsontest/master/products.json')
      .then(resposta => resposta.json())

      .then(json => 
        this.setState({produtos: json}));

        // console.log(json)
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



                  <View style={{ flex: 1, paddingTop: 20 }}>
                      <FlatList
                        data={this.state.produtos} 
                        renderItem={   ({item}) =>   
                          <Text> {item.productName} - 
                          {item.items[0].nameComplete} - 
                          {/* {item.items[0].sellers[0].commertialOffer.Installments[0].Value}  */}
                          </Text>                    
                        }
                        keyExtractor={item => String(item.id)}
                      />
                  </View>


                </SafeAreaView>
            </NavigationContainer>
          );
      }
  }
}

export default App;
