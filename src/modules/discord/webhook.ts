import { EmbedBuilder, WebhookClient } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

const webhook = (site: string, thumbnail: string, email: string) => {
  const webhookClient = new WebhookClient({
    url: String(process.env.WEBHOOK_URL),
  });

  const embed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(`${site} Successful Entry`)
    .setThumbnail(thumbnail)
    .addFields({
      name: "Raffle Link",
      value: `test`,
      inline: true,
    })
    .addFields({ name: "Email", value: email })
    .addFields({ name: "Size", value: "N/A" })
    .addFields({ name: "Extra Info", value: "Remember to check your emails" })
    .setTimestamp()
    .setFooter({
      text: "PyramidAIO",
      iconURL: "https://i.imgur.com/cE2Ms9p.jpg",
    });

  webhookClient.send({
    content: "Successful entry",
    username: "Pyramid Raffles",
    avatarURL: "https://i.imgur.com/cE2Ms9p.jpg",
    embeds: [embed],
  });
};

export default webhook;
