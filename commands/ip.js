const Discord = require("discord.js");

module.exports.run = async (bot, message, args)=>{
  let ipEmbed = new Discord.RichEmbed()
  .setTitle("**Serverio IP**")
  .addField("``89.40.2.59:30121``", "SuncityRP")
  .setColor("#f54242");
  message.channel.send(ipEmbed);
}

module.exports.help = {
  name: "ip"
}
