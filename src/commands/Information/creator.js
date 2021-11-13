const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('creator')
		.setDescription('This tells DevAlex that he is great!'),
	async execute(interaction) {
		await interaction.reply('**Senpai @DevAlex Created Me.**');
	},
};