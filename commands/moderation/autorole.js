const Discord = require("discord.js")
const dbMongoose = require("../../functions/database/model/client.js");

module.exports = {
    name: "cargo",
    description: "Funções de cargos automático para novos membros.",
    options: [
        {
            name: "automático",
            description: "Funções de cargos automático para novos membros.",
            type: 1,
            options: [
                {
                    name: "cargo",
                    description: "Informe o cargo que será automático",
                    type: Discord.ApplicationCommandOptionType.Role,
                    required: true
                }
            ]
        }
    ],

    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        const cargo = interaction.options.getRole('cargo');

        if (!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return interaction.reply("Apenas os administradores tem acesso a este comando.");

        interaction.reply({ content: `A função de cargos automáticos foi ativado para o cargo <@!${cargo}>`, ephemeral: true})
        await dbMongoose.findOneAndUpdate(
            { _id: interaction.user.id },
            { $set: { autorole: cargo }}
        );
    }
}