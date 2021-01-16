const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = 'g.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Gemini is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Gamer')

    // guildMember.role.add(welcomeRole);
    guildMember.guild.channels.cache.get('474431129613762571').send(`**Welcome to the Project GEMiИi discord server, <@${guildMember.user.id}>!**`)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command === 'creator'){
        client.commands.get('creator').execute(message, args);
    } else if (command === 'say'){
        client.commands.get('say').execute(message, args);
    } else if (command === 'rules'){
        client.commands.get('rules').execute(message, args);
    } else if (command === 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command === 'mcrules'){
        client.commands.get('mcrules').execute(message, args);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'clanrules'){
        client.commands.get('clanrules').execute(message, args);
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'realm'){
        client.commands.get('realm').execute(message, args);
    } else if (command === 'poll'){
        client.commands.get('poll').execute(message, args);
    }
})

client.login(process.env.token);