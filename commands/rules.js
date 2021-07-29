const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "This displays the server rules!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")
        
        const RulesBanner = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/489536008501854208/808192956346662932/welcome.png');

        const RulesEmbed1 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 1__**')
        .setDescription('**Use English only.**\n\nEnglish is the primary language of this server, no using languages other than English.');

        const RulesEmbed2 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 2__**')
        .setDescription('**No bullying, harrassment, or hate speech.**\n\nDiscrimination, trolling, and harassment is not tolerated. Personal attacks on a user, will result in a mute without warning, and a ban if continued.');

        const RulesEmbed3 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 3__**')
        .setDescription('**Keep conversations and content in their respective channels. Do not spam.**\n\nEvery channel in this server has a description, please read it before sending a message. No spamming is allowed. Staff Mailbox in this server can only be used for moderation issues, or reporting a game bug.');

        const RulesEmbed4 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 4__**')
        .setDescription('**No self-promotions or advertisements.**\n\nThis server is not a sales platform or a hub for other servers. Advertising, whether through DMs, chat, or images is prohibited. In-direct advertising which does not include an invite link is also prohibited. This does not include sharing videos.');

        const RulesEmbed5 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 5__**')
        .setDescription('**No political or religious topics.**\n\nNo controversial content allowed. If caught discussing such topics you will receive a mute, and a ban if continued. If you feel like anyone is breaking this rule then please create a support ticket by DM the Staff Mailbox bot. Please have screenshots and the users Discord tag ready.');

        const RulesEmbed6 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 6__**')
        .setDescription('**Do not @mention or DM staff.**\n\nThis includes begging for a role or in game currencies. If you wanna report a user, DM the Staff Mailbox to open a support ticket.');

        const RulesEmbed7 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 7__**')
        .setDescription('**NSFW content is prohibited.**\n\nRefrain from all NSFW discussions. Images or links to NSFW sites are not allowed in this server. All content sent on this server must be PG-13. This also includes your username and avatar. Violating this rule will result in an immediate ban from this server.');

        const RulesEmbed8 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 8__**')
        .setDescription('**Be Respectful and use common sense.**\n\nRespect all members in the server. Refrain from flaming, trolling, or being disrespectful. Racial slurs and discrimination are strictly prohibited. Respecting a user’s privacy also falls under this. Information regarding a user’s real identity should not be posted without their permission.');

        const RulesEmbed9 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 9__**')
        .setDescription('**Staff have final say.**\n\nStaff have the final say in all verdicts. Failure to listen to staff will result in punishment. Do not talk back to staff.');

        const RulesEmbed10 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 10__**')
        .setDescription('**Discord Terms of Service applies to this server.**\n\nMore details are available at [Discord Terms](https://discord.com/terms) & [Services](https://support.discord.com/hc/en-us/articles/360024871991-Discord-Partnership-Code-of-Conduct). You will be held accountable for any and all actions performed on your account.');

        const InviteEmbed = new Discord.MessageEmbed()
        .setColor('#0a0a0a')
        .setDescription('**Invite link: https://discord.gg/w6v2fHg**');

        message.delete()
        message.channel.send(RulesBanner)
        
        wait(5)

        message.channel.send(RulesEmbed1)
        message.channel.send(RulesEmbed2)
        message.channel.send(RulesEmbed3)
        message.channel.send(RulesEmbed4)
        message.channel.send(RulesEmbed5)
        message.channel.send(RulesEmbed6)
        message.channel.send(RulesEmbed7)
        message.channel.send(RulesEmbed8)
        message.channel.send(RulesEmbed9)
        message.channel.send(RulesEmbed10)
        message.channel.send(InviteEmbed);
    }
}