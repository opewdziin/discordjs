const Discord = require("discord.js")
const dbMongoose = require("../../functions/database/model/client.js");

module.exports = {
    name: "configuração",
    description: "Minhas configurações disponíveis",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "alterar-status",
            description: "Informe o que ficará nos meu perfil",
            type: 1,
            options: [
                {
                    name: "status",
                    description: "Informe o que ficará nos meu perfil",
                    type: Discord.ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        },
        {
            name: "alterar-nome",
            description: "Informe o nome para fazer a alteração",
            type: 1,
            options: [
                {
                    name: "nome",
                    description: "Informe o nome para fazer a alteração",
                    type: Discord.ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        },
        {
            name: "alterar-avatar",
            description: "Informe a imagem para fazer a alteração",
            type: 1,
            options: [
                {
                    name: "avatar",
                    description: "Informe a imagem para fazer a alteração",
                    type: Discord.ApplicationCommandOptionType.Attachment,
                    required: true
                }
            ]
        }
    ],

    run: async (client, interaction) => {
        interaction.reply("")
    }
}