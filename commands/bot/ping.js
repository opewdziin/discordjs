const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "Fique ligado na latência da aplicação",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        interaction.reply("🏓 Pong! **" + client.ws.ping + "**ms")
    }
}