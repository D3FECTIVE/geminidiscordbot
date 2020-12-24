const Discord = require("discord.js")

module.exports = {
    name: 'say',
    description: "Makes an announcement!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You're not authorized to use this command!")

        let argresult;
        let mChannel = message.mentions.channels.first()

        message.delete()
        if(mChannel) {
            argresult = args.slice(1).join(" ")
            mChannel.send(argresult)
        } else {
            argresult = args.join(" ")
            message.channel.send(argresult)
        }
    }
}