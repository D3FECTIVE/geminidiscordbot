const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "This displays the server rules!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You're not authorized to use this command!")
        
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Server Rules!__**')
        .setDescription('**1. Use English only.**\n\n\n**2. No bullying, harrassment, or hate speech.**\n\n\n**3. Do not spam.**\n\n\n**4. No self-promotions or advertisements outside of #promotions channel.**\n\n\n**5. No political or religious topics.**\n\n\n**6. Do not @mention or DM staff without a good reason.**\n\n\n**7. Spoilers are prohibited.**\n\n**8. Be Respectful and use common sense.**\n\n\n**9. Staff have final say.**\n\n\n**10. Discord ToS apply to this server. ** https://discordapp.com/tos \n\n\n To gain access to this server, accept that you have read the rules above by reacting to this post with the checkmark by clicking it.');

        message.channel.send(RulesEmbed)
        
    }
}