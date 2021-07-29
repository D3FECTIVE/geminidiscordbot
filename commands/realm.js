const Discord = require('discord.js');

module.exports = {
    name: 'realm',
    descroption: "Lists all the Cordinates for the Realm",
    execute(message, args){
        if (message.member.roles.cache.has('768625337952501785')){

            const RealmsEmbed = new Discord.MessageEmbed()
                .setColor('#00d0ff')
                .setTitle('__Realm Cordinates!__')
                .setDescription('**SEED 6113077598386945255**\n\n**__Main Landmarks__**\n```Realm World Spawn | -6 ~ 201\nStrong Hold | -1900 ~ -100```\n\n**__Player Homes__**\n```The Rice Farm | -555 ~ -527\nCrackheads hurdle | -692 ~ -549\nTofu | -732 ~ -552\nThe Elysium Farm | -554 ~ -695\nSabia | -166 ~ 510\nVaporwave Sanctuary | -627 ~ -880\nThicky Nickys Strip Club | -1030 ~ -1837\nMEGA Inc. | -338 ~ -2061\nIndustrial Heaven | -300 ~ 3950\nVortex | -702 ~ -4\nDragon Land | -1816 ~ 916\n```\n\n**__Kingdoms__**\n```Elysium | -699 ~ -467\nDragon Kingdom | -1680 ~ 1360\n```\n\n***Last Updated: 01-07-21***');

            message.channel.send(RealmsEmbed);

        } else {
            message.channel.send('**You are not an authorized member of the Project GEMiИi World Minecraft Realm!**');
        }
    }
}