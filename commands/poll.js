const Discord = require("discord.js")

module.exports = {
    name: 'poll',
    description: "Makes a poll!",
    async execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")

        let argresult;
        let mChannel = message.mentions.channels.first()

        message.delete()
        if(mChannel) {
            mChannel.send('@everyone');

            argresult = args.slice(1).join(" ")

            let PollEmbed = new Discord.MessageEmbed()
            .setColor('#32753e')
            .setDescription(argresult)

            let msgEmbed = await mChannel.send(PollEmbed);
            await msgEmbed.react('707644906260398190')
            await msgEmbed.react('707644956151513179')

        } else {

            message.channel.send('@everyone');

            argresult = args.join(" ")

            let PollEmbed = new Discord.MessageEmbed()
            .setColor('#32753e')
            .setDescription(argresult)

            let msgEmbed = await message.channel.send(PollEmbed);
            await msgEmbed.react('707644906260398190')
            await msgEmbed.react('707644956151513179')
        }
    }
}