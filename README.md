# RN_animale
Animale Mobile App


*Obs.: Não feito ainda:*<br/>
		- Componentização(separar páginas em arquivos/módulos, assim como os estilos);<br/>
		- Não usei o Axios (por enquanto utilizando o Fetch padrão do RN);<br/>
		- Mostrar os dados do JSON na Flatlist (dinamicamente) - Flatlist está comentado por enquanto mas já exibe no console alguns dados (falta inserir nos locais corretos)<br/>

<br/><br/>

**VERSÕES UTILIZADAS:** <br />
"expo": "~38.0.8",<br />
"react-native": "https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz",
<br /><br />

**COMO RODAR O PROJETO:**

npm i ou yarn

<br /><br />
**DEPENDÊNCIAS:**

- Bottom tab navigation: 
yarn add @react-navigation/bottom-tabs

- Instalar dependências:
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

- Styled Components:
yarn add styled-components

- Constants (topbar/notch safe area):
yarn add expo-constants

- Custom fonts (pro Expo):
https://docs.expo.io/guides/using-custom-fonts/

- Axios:
yarn add axios
*** import axios from 'axios';

