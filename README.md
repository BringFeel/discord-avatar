
<div align="center">
  <h1>discord-avatar</h1>
  <p>
    <a href="https://nodei.co/npm/discord-avatar
/"><img src="https://nodei.co/npm/discord-avatar.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# ENGLISH
A simple utility to display a member's avatar in an embedded message.

* By default it supports 5 languages, more can be added.
* Supported languages: English, Spanish, Portuguese, Russian, Chinese.
* The color of the embed can be changed in future updates.

Supports only discord.js@^13.6.0 (master).

# Installation
* `npm install discord-avatar`

# Usage
__Basic Bot Example__

```js
// Import the discord.js-avatgar package.
const avatarEmbed = require('discord-avatar');

// Call the avatarEmbed method, only the first argument is required.
// * language: Language in which the embedded message will be sent.
avatarEmbed(message, language = 'english');
// And voila now you have an avatar command with embeds!
```
# Preview
![Demo](https://cdn.discordapp.com/attachments/925901646914011199/961769121438105620/unknown.png)

# SPANISH
Una sencilla utilidad para mostrar el avatar de un miembro en un mensaje embebecido.

* Por defecto se soporta 5 idiomas, se pueden agregar más.
* Idiomas soportados: Inglés, Español, Portugués, Ruso y Chino
* El color del embed se podrá cambiar en futuras actualizaciones.

Solo admite discord.js@^13.6.0 (master).

# Instalación
* `npm install discord-avatar`

# Uso
__Ejemplo de bot básico__

```js
// Importar el paquete discord.js-avatar.
const avatarEmbed = require('discord-avatar');

// Llama al método avatarEmbed, se requiere solo el primer argumento.
// * language: Idioma en el que se enviará el mensaje embebecido.
avatarEmbed(message, language = 'spanish');
// Y listo ahora tienes un comando de avatar con embeds!
```
# Vista previa
![Demo](https://cdn.discordapp.com/attachments/925901646914011199/961769121438105620/unknown.png)
