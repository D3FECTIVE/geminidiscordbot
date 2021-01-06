const Discord = require('discord.js');

module.exports = {
    name: 'clanrules',
    description: "This displays the clan rules!",
    execute(message, args){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You're not authorized to use this command!")
        
        const RulesEmbed = new Discord.MessageEmbed()
        .setColor('#2cff00')
        .setTitle('**__Clan Rules!__**')
        .setDescription('***These rules are subject to change at any certain point in time***\n\n**Article 1**\nYou have the right of free speech in the chat\n*-a* Foul language or profanity is not tolerated punishable by demotion or banishment\n*-b* Bad attitude is not allowed the consequences include a warning followed by demotion then kicked\n*-c* Bullying will result in an immediate ban from the clan no exceptions made\n\n**Article 2**\nYou must earn your rank\n*-a* Co Leader is a trusted role only few receive; you must be an active player and participate in all clan related tournaments to receive such a role; Required to have the Elder role before getting Co Leader, must also use both attacks in war\n*-b* Elder is a more intermediate role given to members that show dedication to the clan; you must donate 500 troops to receive this role\n\n**Article 3**\nActive players only\n*-a* Once your account is no longer seen online you have a 1 month period before you are kicked from the clan on claims of inactivity\n*-b* With exception for founding members, will be allowed to be inactive\n*-c* If you are active an were kicked on these claims please contact a high rank so we understand what went wrong\n\n**Article 4**\nWar Regulations\n*-a* You have the ability to not participate in war if you chose to; joining war is completely volunteer, just set your war activity to green and when a war announcement clan mail comes say I want in to verify that you want to participate in the upcoming war\n*-b* If you volunteer for war you have a responsibility to prepare and strengthen your war base to make sure it is 100% effective\n*-c* If you volunteer for war you have a responsibility to use both your attacks to guarantee victory for the clan failure to use both attacks will result in not being able to participate in the next war for Elders, and a demotion for Coleaders\n*-d* If all the enemies bases are 3 stared then anyone whe still hasnt used both attacks get a pass since theres nothing left to attack\n\n**Article 5**\nInviting Players\n*-a* Elders and Co Leaders may invite new players to the clan\n*-b* The Player must have a minimum of 1000 trophies in their home village to be allowed in\n*-c* Certain special cases may be allowed if you present it to the Clans Leader\n*-d* When the clan is at war we will not be accepting any new members; this is to prevent clan spying, if any new members are accepted during wartime they will be immediately kicked\n\n***Last Updated: 01-05-21***');

        message.channel.send(RulesEmbed)
        
    }
}