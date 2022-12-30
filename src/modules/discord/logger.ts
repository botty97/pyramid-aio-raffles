import * as dotenv from "dotenv";
import { Client, GatewayIntentBits, WebhookClient } from "discord.js";

const client: any = new Client({ intents: [GatewayIntentBits.Guilds] });
dotenv.config();

client.on("ready", (c: any) => {
  console.log(`Logged in as ${c.user.tag}!`);
  const channel: any = client.channels.cache.get("1007035118361264303");

  channel.send("Hello");
});

client.login(process.env.TOKEN);
