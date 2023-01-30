const { EmbedBuilder, WebhookClient } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const webhookClient = new WebhookClient({
  url: process.env.WEBHOOK_URL,
});

const embed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Naked Successful Checkout")
  .setThumbnail("https://i.imgur.com/9ZybmnL.png")
  .addFields({
    name: "Raffle Link",
    value: `test`,
    inline: true,
  })
  .addFields({ name: "Email", value: `test@email.com` })
  .addFields({ name: "Size", value: "N/A" })
  .addFields({ name: "Extra Info", value: "Remember to check your emails" })
  .setTimestamp()
  .setFooter({
    text: "PyramidAIO",
    iconURL: "https://i.imgur.com/cE2Ms9p.jpg",
  });

webhookClient.send({
  content: "Successful entry",
  username: "PyramidRaffles",
  avatarURL: "https://i.imgur.com/cE2Ms9p.jpg",
  embeds: [embed],
});
