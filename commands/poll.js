const Discord = require("discord.js")

module.exports = {
    name: 'poll',
    description: "Makes a poll!",
    async execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")

        let argresult = args.slice(1).join(" ")
        let mChannel = message.mentions.channels.first()

        message.delete()
        let PollEmbed = new Discord.MessageEmbed()
        .setColor('#00d0ff')
        .setTitle(argresult)
        .setDescription('@here')
        let msgEmbed = await mChannel.send(PollEmbed);
        await msgEmbed.react('707644906260398190')
        await msgEmbed.react('707644956151513179')

    }
}