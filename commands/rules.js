const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "This displays the server rules!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You're not authorized to use this command!**")
        
        const RulesEmbed1 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 1__**')
        .setDescription('**1. Use English only.**')
        .setFooter('English is the primary language of this server, no using languages other than English.');

        const RulesEmbed2 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 2__**')
        .setDescription('**No bullying, harrassment, or hate speech.**')
        .setFooter('Discrimination, trolling, and harassment is not tolerated. Personal attacks on a user, will result in a mute without warning, and a ban if continued.');

        const RulesEmbed3 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 3__**')
        .setDescription('**Keep conversations and content in their respective channels. Do not spam.**')
        .setFooter('Every channel in this server has a description, please read it before sending a message. No spamming is allowed. Staff Mailbox in this server can only be used for moderation issues, or reporting a game bug.');

        const RulesEmbed4 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 4__**')
        .setDescription('**No self-promotions or advertisements.**')
        .setFooter('This server is not a sales platform or a hub for other servers. Advertising, whether through DMs, chat, or images is prohibited. In-direct advertising which does not include an invite link is also prohibited.');

        const RulesEmbed5 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 5__**')
        .setDescription('**No political or religious topics.**')
        .setFooter('No controversial content allowed.');

        const RulesEmbed6 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 6__**')
        .setDescription('**Do not @mention or DM staff.**')
        .setFooter('This includes begging for a role or in game currencies. If you wanna report a user DM the Staff Mailbox to open a support ticket.');

        const RulesEmbed7 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 7__**')
        .setDescription('**NSFW content is prohibited.**')
        .setFooter('Refrain from all NSFW discussions. Images or links to NSFW sites are not allowed in this server. All content sent on this server must be PG-13. This also includes your username and avatar. Violating this rule will result in an immediate ban from this server.');

        const RulesEmbed8 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 8__**')
        .setDescription('**Be Respectful and use common sense.**')
        .setFooter('Respect all members in the server. Refrain from flaming, trolling, or being disrespectful. Racial slurs and discrimination are strictly prohibited. Respecting a user’s privacy also falls under this. Information regarding a user’s real identity should not be posted without their permission.');

        const RulesEmbed9 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 9__**')
        .setDescription('**Staff have final say.**')
        .setFooter('Staff have the final say in all verdicts. Failure to listen to staff will result in punishment. Do not talk back to staff.');

        const RulesEmbed10 = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Rule 10__**')
        .setDescription('**Discord Terms of Service applies to this server.**')
        .addFeild('More details are available at [Discord Terms](https://discord.com/terms) & [Services](https://support.discord.com/hc/en-us/articles/360024871991-Discord-Partnership-Code-of-Conduct).');

        const InviteEmbed = new Discord.MessageEmbed()
        .setColor('#0a0a0a')
        .setDescription('**Invite link: https://discord.gg/w6v2fHg**');

        message.delete()
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