const Discord = require('discord.js');

module.exports = {
    name: 'rulesbanner',
    description: "This displays the server rules banner!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")

        const RulesBanner = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/489536008501854208/808192956346662932/welcome.png');

        message.delete()
        message.channel.send(RulesBanner);
    }
}