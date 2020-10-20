const Discord = require("discord.js");

module.exports.run = async (bot, message, args)=>{
  let ipEmbed = new Discord.RichEmbed()
  .setTitle("**Serverio IP**")
  .addField("``185.150.25.92:30292``", "SuncityRP")
  .setColor("#f54242");
  message.channel.send(ipEmbed);
}

module.exports.help = {
  name: "ip"
}
