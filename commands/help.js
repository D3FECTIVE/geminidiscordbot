const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message,args){
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#03122c')
        .setTitle('Commands List')
        .setDescription('Many of the commands listed below are limited to staff members, or special server roles only granted to few.\n\n\n***__Public Commands__***\n\n**Discord Server Invite**```g.invite```\n\n\n***__Staff Commands__***\n\n**Announcements**```g.say EXAMPLETEXT```\n**Rules**```g.rules```\n**Realm Rules**```g.mcrules```\n**Clan Rules**```g.clanrules```\n');

        message.channel.send(HelpEmbed);
    }
}