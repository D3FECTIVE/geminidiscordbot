const Discord = require('discord.js');

module.exports = {
    name: 'realm',
    descroption: "Lists all the Cordinates for the Realm",
    execute(message, args){
        if (message.member.roles.cache.has('768625337952501785')){

            const RealmsEmbed = new Discord.MessageEmbed()
                .setColor('#00d0ff')
                .setTitle('Realm Cordinates')
                .setDescription('**Main Landmarks**\n```Strong Hold | -1900 ~ -100```\n\n\n**Player Homes**\n```The Rice Farm | -555 ~ -527\n```\n\n\n**Kingdoms**\n```Elysium | -804 ~ -465\n```\n\n***Last Updated: 01-07-21***');

            message.channel.send(RealmsEmbed);

        } else {
            message.channel.send('You are not an authorized member of the Project GEMINI Realm!');
        }
    }
}