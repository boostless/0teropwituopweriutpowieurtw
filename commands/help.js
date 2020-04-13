const Discord = require("discord.js");

module.exports.run = async (bot, message, args)=>{
  let helpembed = new Discord.RichEmbed()
  .setDescription("~Pagalba~")
  .setColor("#4f80ff")
  .addField("Pardavimo komandos", "*parduoti auto/moto Vardas Pavarde Kaina Modelis Tel.Numeris Modifikacijos")
  .addField("Serverio komandos", "*serverinfo \n *report @Vardas Priežastis");
  message.delete().catch(O_o=>{});
  message.author.send(helpembed);
}

module.exports.help = {
  name: "help"
}
