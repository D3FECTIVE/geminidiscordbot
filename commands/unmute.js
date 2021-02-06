module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Gamer');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted Gamer');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`:speaker: **<@${memberTarget.user.id}> has been unmuted!**`);
        } else{
            message.channel.send('**The user specified could not be found!**');
        }
    }
}