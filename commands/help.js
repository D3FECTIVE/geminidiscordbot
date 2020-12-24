const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message,args){
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#03122c')
        .setTitle('Commands List')
        .setDescription('**Announcements**```g.say EXAMPLETEXT```\n**Discord Server Invite**```g.invite```\n');

        message.channel.send(HelpEmbed);
    }
}