const Discord = require('discord.js');

module.exports = {
    name: 'mcrules',
    description: "This displays the minecraft realm rules!",
    execute(message, args){
        const MCRulesEmbed = new Discord.MessageEmbed()
        .setColor('#291a03')
        .setTitle('**__Realm Rules!__**')
        .setDescription('These Rules are subject to change at any certian point in time.\n\n\n**No Stealing**\n\n**No PVP/Murder**\n\n**No Griefing**\n\n**No building to close to anothers creation**\n\n**All Nether Portals must be spaced 1000 blocks away from each other**\n\n**Harmless pranks are allowed (egging)**\n\n\nThese Rules are made to be fair to every player, and anyone who violates the rules will be put on trial in a court of your peers.');

        message.channel.send(MCRulesEmbed)
        
    }
}