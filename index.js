const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const avatarEmbed = (message, language = 'english') => {

    if (!message && !message.channel)
        throw new Error(`The channel is inaccessible.`);

    const validLangs = [
        "english",
        "spanish",
        "portuguese",
        "russian",
        "chinese"
    ];

    if (!validLangs.includes(language))
        throw new Error(`Invalid language. [${language}]`);
        
    const currentLang = require(`./Languages/${language}.json`);

    let target = message.mentions.users.first();

    if (!target)
        target = message.author;

    let avatarURL = target.displayAvatarURL({
        size: 4096,
        dynamic: true
    });

    const embedTitle = currentLang.AVATAR_OF.replace('%user', target.username);
    const embedFooter = currentLang.ASKED_BY.replace('%user', message.author.tag);

    const Embed = new MessageEmbed()
        .setTitle(embedTitle)
        .setDescription(`[${currentLang.AVATAR_URL}](${avatarURL})`)
        .setColor('RANDOM')
        .setImage(avatarURL)
        .setFooter(embedFooter, `${message.author.displayAvatarURL({
            size: 4096,
            dynamic: true
        })}`);
        const link = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL(`${avatarURL}`)
                    .setLabel(`${currentLang.AVATAR_URL}`)
                    .setStyle('LINK'),
            );
        message.channel.send({ embeds: [Embed], components: [link] });

}

module.exports = avatarEmbed;