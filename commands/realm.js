const Discord = require('discord.js');

module.exports = {
    name: 'realm',
    descroption: "Lists all the Cordinates for the Realm",
    execute(message, args){
        if (message.member.roles.cache.has('768625337952501785')){

            const RealmsEmbed = new Discord.MessageEmbed()
                .setColor('#03122c')
                .setTitle('**Realm Cordinates**')
                .setDescription('Test');

            message.channel.send(RealmsEmbed);

        } else {
            message.channel.send('You are not an authorized member of the Project GEMINI Realm!');
        }
    }
}