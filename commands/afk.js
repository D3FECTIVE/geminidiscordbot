const Discord = require('discord.js');

module.exports = {
    name: 'afk',
    descroption: "Lists all the AFK Cordinates for the Realm",
    execute(message, args){
        if (message.member.roles.cache.has('768625337952501785')){

            const AFKRealmEmbed = new Discord.MessageEmbed()
                .setColor('#00d0ff')
                .setTitle("__Alex's Farming Kingdom Cordinates!__")
                .setDescription("\n```AFK001 [Guardian Farm] Alex's Farming Kingdom Outpost Guardian | \nAFK002 [Witch Farm] Alex's Farming Kingdom Swamp Outpost | -2320 ~ -2496\n```\n\n***Last Updated: 07-28-21***");

            message.channel.send(AFKRealmEmbed);

        } else {
            message.channel.send('**You are not an authorized member of the Project GEMiИi World Minecraft Realm!**');
        }
    }
}