const Discord = require("discord.js");

module.exports.run = async (bot, message, args)=>{
  let ipEmbed = new Discord.RichEmbed()
  .setTitle("**Serverio IP**")
  .addField("``88.214.57.152:30574``", "SalsaRP")
  .setColor("#f54242");
  message.channel.send(ipEmbed);
}

module.exports.help = {
  name: "ip"
}
