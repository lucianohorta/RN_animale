import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const width = Dimensions.get('screen').width;
export const height= Dimensions.get('screen').height;


export const BannerTitle = styled.Text`
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

export const BannerSubTitle = styled.Text`
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

export const BannerBtn = styled.TouchableOpacity`
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

export const ShopNowText = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 16px;
  color: #FFFFFF;
`;

export const IconBagContainer = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 30px;
`;

export const IconBag = styled.Image`
  width: 24px;
  height: 24px;
`;

export const MainContent = styled.View`
  margin-bottom: 0px
`;

export const HeadersHome = styled.Text`
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

export const H2 = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.08px;
`;

export const VerTudoBtn = styled.TouchableOpacity`
  display: flex;
`;

export const VerTudoBtnText = styled.Text`
  font-family: 'Futura-Book';
  font-size: 16px;
  color: #000000;
`;

export const HotTrends = styled.Text`
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

export const Jaquetas = styled.Text`
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

export const ScrollViewContent = styled.View`
  margin-left: 20px;
`;

export const ShopNowContainer_Thumb = styled.TouchableOpacity`
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

export const ShopNowText_Thumb = styled.Text`
  font-family: 'Futura-Medium';
  font-size: 16px;
  color: #FFFFFF;
`;

export const NewInFooter = styled.View`
  margin-top: 60px;
`;

export const Searchbar = styled.View`
  flex-direction: row;
  padding-bottom: 10px; 
  margin-left: 20px; 
  margin-right: 20px; 
  margin-top: 20px; 
  position: absolute;
  top: 30;
  width: 90%
`;

export const Categorias = styled.Image`
  width: 90%;
`;