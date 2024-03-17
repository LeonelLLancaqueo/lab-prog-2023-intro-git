Instrucciones de uso:
1 - Clonar proyecto
    git clone https://github.com/LeonelLLancaqueo/lab-prog-2023-intro-git.git	

2 - Abrir 2 VSCode 
-  uno con la carpeta “paginaWeb “ 
- otro con la carpeta “react-native/app-refugios”

3 - Instalar dependencias utilizadas en el proyecto react-native:
	- npm install expo
    - npx expo install @react-navigation react-native-gesture-handler react-native-reanimated react-dom react-native-web                @expo/ metro-runtime react-native-screens react-native-safe-area-context react-native-paper axios

    En el archivo /src/components/url  Cambiar la IP 192.168.1.48 por la IP de su Wifi

4 - Instalar dependencias utilizadas en el proyecto paginiaWeb:    
    npm install ejs express mongodb mongoose nodemon

5 - Correr proyecto:
    En el proyecto paginaWeb ejecutar el siguiente comando por consola: 
        node app.js
    En el proyecto react-native ejecutar el siguiente comando por consola: 
        npx expo start
