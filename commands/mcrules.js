const Discord = require('discord.js');

module.exports = {
    name: 'mcrules',
    description: "This displays the minecraft realm rules!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")


        const MCRulesEmbed = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Realm Rules!__**')
        .setDescription('*These Rules are subject to change at any certian point in time.*\n\n**No Unautherized Access**\nThis includes\n-No entering another players home without permission\n-No accessing another players chest without permission\n-No killing other players live stock without permission\n-No harvesting another players crops without permission\nWhoever the victim is for this rule has the right to press charges or dismiss them.\n\n\n**No Cheating**\n-No Modding\n-No Hacking\n-No Duplication Glitching\n\n\n**No Murder**\n-Unless both players agree to a PVP\n\n\n**No Griefing**\n-This applies to all forms of griefing\n\n\n**Sleep**\n-The Universal Minecraft rule is if someone types zzz in chat you sleep\n-If you are unable to access a bed leave and rejoin\n\n\n**All Nether Portals must be linked correctly**\n\n\n**Realm Rules and Kingdom Rules are completely seperate things**\n-Depending on the Nation you have entered the rules will be different in every place.\n-Realm Rules are required to be followed everywhere.\n\n\n**Once you have established your home send the cordinates to DevAlex to be logged onto the world map, you also have to name your place.**\n\n\n*These Rules are made to be fair to every player. There will be no tolerance for anyone who violates these rules.*\n\n```This realm is a privately owned and operated server, therefore the rules will be heavily moderated. If you are caught once doing something that violates the rules then you will receive a warning. But upon your second violation then you will be subject to a ban without notice. If you believe it was not a justified ban then you can appeal this ban. You will be given a set court date where you will receive a trial from a jury of your peers. If found guilty you will remain banned, but if found not guilty you will be let back into the realm with a parole officer. Realm Moderators will be watching you at any point in time to make sure you wont violate any rules.```');

        message.delete()
        message.channel.send(MCRulesEmbed)
        
    }
}