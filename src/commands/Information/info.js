const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input')
        .addSubcommand(subcommand =>
            subcommand
                .setName("user")
                .setDescription("Gets information on mentioned user")
                .addUserOption(option => option.setName("target").setDescription("The user mentioned")))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription("Member Count")),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user) {
                await interaction.reply(`Username: **${user.username}**\nID: **${user.id}**`);
            } else {
                await interaction.reply(`Username: **${interaction.user.username}**\nYour ID: **${interaction.user.id}**`);
            }
        } else if (interaction.options.getSubcommand() === "server") {
            await interaction.reply(`${interaction.guild.name}\n**${interaction.guild.memberCount}** Total Members`);
        } else {
            await interaction.reply("**Command Undefined, no sub command was used.**")
        }
	},
};