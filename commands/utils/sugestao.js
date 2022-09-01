const Discord = require("discord.js")
const dbMongoose = require("../../functions/database/model/client.js");

module.exports = {
    name: "sugerir",
    description: "Envie uma sugestão para o nosso servidor.",
    reference: 'sugestion',
    options: [
        {
            name: "configurações",
            description: "Abra o painel de configuração.",
            type: 1
        },
        {
            name: "verificar",
            description: "Verifique uma sugestão enviada.",
            type: 1,
            options: [
                {
                    name: "id",
                    description: "Verifique uma sugestão enviada.",
                    type: Discord.ApplicationCommandOptionType.Integer,
                    required: true
                }
            ]
        },
        {
            name: "enviar",
            description: "Envie uma sugestão para o servidor.",
            type: 1,
            options: [
                {
                    name: "sugestão",
                    description: "Envie uma sugestão para o servidor.",
                    type: Discord.ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],

    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        const subcommand = args[0] && client.subcommand.get(this.reference)?.find(cmd => cmd.name.toLowerCase() === args[0].toLowerCase() || cmd.aliases.includes(args[0].toLowerCase));

        if (subcommand) return subcommand.run({ client, interaction });
        interaction.reply({ content: `${interaction.user}, para enviar uma sugestão use **/sugerir enviar <sua sugestão>**.`, ephemeral: true})
    }
}