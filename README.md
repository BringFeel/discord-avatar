<div align="center">
  
![](https://github.com/BringFeel/discord-avatar/blob/main/discord-avatar-logo.png "Discord Avatar Logo")
  
  <b>ENG</b> This is an updated version of discord.js v13 and improved from [discord.js-avatar](https://www.npmjs.com/package/discord.js-avatar)
  
  <b>ES</b> Esta es una versión actualizada a discord.js v13 y mejorada de [discord.js-avatar](https://www.npmjs.com/package/discord.js-avatar)
  
  <p>
    <a href="https://nodei.co/npm/discord-avatar
/"><img src="https://nodei.co/npm/discord-avatar.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
  
  [![Downloads](https://img.shields.io/github/downloads/BringFeel/discord-avatar/total?style=for-the-badge)](https://github.com/BringFeel/discord-avatar/releases/latest)
  [![Stars](https://img.shields.io/github/stars/BringFeel/discord-avatar?style=for-the-badge)](https://github.com/BringFeel/discord-avatar/stargazers)
  [![Release](https://img.shields.io/github/v/release/BringFeel/discord-avatar?style=for-the-badge)](https://github.com/BringFeel/discord-avatar/releases/latest)
  [![Discord](https://img.shields.io/discord/952035654831845457?color=%237289DA&style=for-the-badge)](https://discord.bringfeel.com.ar)
  [![NpmDownloads](https://img.shields.io/npm/dt/discord-avatar?color=FF0000&style=for-the-badge)](https://www.npmjs.com/package/discord-avatar)</br>
</div>

# ENGLISH
A simple utility to display a member's avatar in an embedded message.

* By default it supports 5 languages, more can be added.
* Supported languages: English, Spanish, Portuguese, Russian, Chinese, German.
* The color of the embed is assigned by the color of the role

  If you want to change it go to ```node_modules/discord-avatar/index.js``` and change
  
  ```js
  .setColor(message.guild.me.displayHexColor)
   ↓
  .setColor("Your Color")
  ```
  Colors: [htmlcolorcodes.com](https://htmlcolorcodes.com)

Supports only discord.js@^13.6.0 (master).

# Installation
* `npm install discord-avatar`

# Usage
__Basic Bot Example__

```js
// Import the discord-avatar package.
const avatarEmbed = require('discord-avatar');

// Call the avatarEmbed method, only the first argument is required.
// * language: Language in which the embedded message will be sent.
avatarEmbed(message, language = 'english');
// And voila now you have an avatar command with embeds!
```
```js
// Import the discord-avatar package.
const avatarEmbed = require('discord-avatar');

module.exports = {
    name: 'avatar',

    execute(message) {
// Call the avatarEmbed method, only the first argument is required.
// * language: Language in which the embedded message will be sent.
        avatarEmbed(message, language = 'english');
    }
};
```
# Preview
![Demo](https://cdn.discordapp.com/attachments/925901646914011199/961769121438105620/unknown.png)

# SPANISH
Una sencilla utilidad para mostrar el avatar de un miembro en un mensaje embebecido.

* Por defecto se soporta 5 idiomas, se pueden agregar más.
* Idiomas soportados: Inglés, Español, Portugués, Ruso, Chino y Alemán
* El color del embed se asigna mediante el color del rol

  Si desea cambiarlo vaya a ```node_modules/discord-avatar/index.js``` y cambie
  
  ```js
  .setColor(message.guild.me.displayHexColor)
   ↓
  .setColor("Tu Color")
  ```
  Colores: [htmlcolorcodes.com](https://htmlcolorcodes.com)

Solo admite discord.js@^13.6.0 (master).

# Instalación
* `npm install discord-avatar`

# Uso
__Ejemplo de bot básico__

```js
// Importar el paquete discord-avatar.
const avatarEmbed = require('discord-avatar');

// Llama al método avatarEmbed, se requiere solo el primer argumento.
// * language: Idioma en el que se enviará el mensaje embebecido.
avatarEmbed(message, language = 'spanish');
// Y listo ahora tienes un comando de avatar con embeds!
```
```js
// Importar el paquete discord-avatar.
const avatarEmbed = require('discord-avatar');

module.exports = {
    name: 'avatar',

    execute(message) {
// Llama al método avatarEmbed, se requiere solo el primer argumento.
// * language: Idioma en el que se enviará el mensaje embebecido.
        avatarEmbed(message, language = 'spanish');
    }
};
```
# Vista previa
![Demo](https://cdn.discordapp.com/attachments/925901646914011199/961769121438105620/unknown.png)
