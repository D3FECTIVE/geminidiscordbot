const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message,args){
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#03122c')
        .setTitle('Commands List')
        .setDescription('Many of the commands listed below are limited to staff members, or special server roles only granted to few.\n\n\n***__Public Commands__***\n\nDiscord Server Invite```g.invite```\n\n\n***__Realm Commands__***\n\nCordinates```g.realm```\n\n\n***__Staff Commands__***\n\nAnnouncements```g.say EXAMPLETEXT```\nPolls```g.poll EXAMPLETEXT```\nMute```g.mute @DISCORDUSER```\nUnmute```g.unmute @DISCORDUSER```\nTimeout Mute```g.mute @DISCORDUSER 10m\ns=Seconds m=Minutes y=Years```\n');

        message.channel.send(HelpEmbed);
    }
}