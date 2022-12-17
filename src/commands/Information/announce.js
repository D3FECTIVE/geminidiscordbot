const { SlashCommandBuilder } = require('@discordjs/builders');
const { isApplicationCommandDMInteraction } = require('discord-api-types/utils/v9');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announce')
        .setDescription('Allows staff to make announcements through the bot.')
        .addSubcommand(subcommand =>
            subcommand
                .setName("channel")
                .setDescription("Announces the message in the specified channel")
                .addChannelOption(option => option.setName("channel").setDescription("Specified channel name."))),
    async execute(interaction, message, args) {
        let argresult;

        if(!interaction.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) {
            await interaction.reply("**You're not authorized to use this command!**")
        } else if (interaction.options.getSubcommand() === "channel") {
            const channel = interaction.options.getChannel("channel");

            let mChannel = channel.mentions.channels
            argresult = args.slice(1).join(" ")

            return mChannel.send(argresult)
        } else {
            return message.channel.send()
        }
    },
};