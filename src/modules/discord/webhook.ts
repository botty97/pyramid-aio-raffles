const { EmbedBuilder, WebhookClient } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const webhookClient = new WebhookClient({
  url: process.env.WEBHOOK_URL,
});

const embed = new EmbedBuilder().setTitle("Some Title").setColor(0x00ffff);

webhookClient.send({
  content: "Webhook test",
  username: "some-username",
  avatarURL: "https://i.imgur.com/AfFp7pu.png",
  embeds: [embed],
});
