const Discord = require("discord.js")
const config = require("./config.json")
const dbMongoose = require("./functions/database/connect.js");

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages
    ]
});

module.exports = client

client.on('interactionCreate', (interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.reply(`Error`);

        interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
        cmd.run(client, interaction)
    }
})

client.on('ready', () => {
    dbMongoose.start();
    console.log(`🔥 ${client.user.username} está pegando fogo, venha e use o comando em mim 😈`)
})

client.slashCommands = new Discord.Collection()
require('./functions/handler.js')(client)
client.login(config.token)
