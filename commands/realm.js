const Discord = require('discord.js');

module.exports = {
    name: 'realm',
    descroption: "Lists all the Cordinates for the Realm",
    execute(message, args){
        const RealmsEmbed = new Discord.MessageEmbed()
        .setColor('#553d2a')
        .setDescription('Test');

        message.channel.send(RealmsEmbed);
    }
}