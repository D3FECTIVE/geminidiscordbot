const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "This displays the server rules!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")
        
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rules 1__**')
        .setDescription('**1. Use English only.**\n\n\n**2. No bullying, harrassment, or hate speech.**\n\n\n**3. Do not spam.**\n\n\n**4. No self-promotions or advertisements.**\n\n\n**5. No political or religious topics.**\n\n\n**6. Do not @mention or DM staff without a good reason.**\n\n\n**7. NSFW content is prohibited.**\n\n\n**8. Be Respectful and use common sense.**\n\n\n**9. Staff have final say.**\n\n\n**10. Discord ToS applies to this server. ** https://discordapp.com/tos')
        .setFooter('Testing');

        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rules 2__**')
        .setDescription('**No bullying, harrassment, or hate speech');

        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#0a0a0a')
        .setDescription('**Invite link: https://discord.gg/w6v2fHg**');

        message.delete()
        message.channel.send(RulesEmbed)
        message.channel.send(HelpEmbed);
    }
}