const Discord = require("discord.js");

module.exports.run = async (bot, message, args)=>{
  if(message.channel.id != "698192038553714758") return message.delete();

  if(args.length < 1) return message.reply("Pvz: *parduoti auto Vardenis Pavardenis X5 150k 12345678 Turbo, tamsinti langai").then(m => m.delete(8000));
  if(args[0].length < 1) return message.reply("Nenurodei tipo").then(m => m.delete(5000));
  if(args[1].length < 1) return message.reply("Neirasei savo vardo").then(m => m.delete(5000));
  if(args[2].length < 1) return message.reply("Neirasei savo pavardes").then(m => m.delete(5000));
  if(args[3].length < 1) return message.reply("Neirasei savo automobilio").then(m => m.delete(5000));
  if(args[4].length < 1) return message.reply("Nenurodei sumos").then(m => m.delete(5000));
  if(args[5].length != 7) return message.reply("Neirasei savo numerio").then(m => m.delete(5000));

  let turgausChan = message.guild.channels.find(`name`, "🚗transporto-turgus");
  let pasirinkimas = args[0]
  let savininkasV = args[1];
  let savininkasP = args[2];
  let masina = args[3];
  let kaina = args[4];
  let numeris = args[5];
  let mod = args.join(" ").slice(args[0].length + args[1].length + args[2].length + args[3].length + args[4].length + args[5].length + 5);


  let color = message.member.displayHexColor;
  if (color == '#000000') color = message.member.hoistRole.hexColor;

  if(pasirinkimas == "Auto" || pasirinkimas == "auto"){
    let autoEm = new Discord.RichEmbed()
    .setColor(color)
    .setTitle(`Parduodu`)
    .addField(`:detective:Savininkas:detective:`, `${savininkasV} ${savininkasP}`)
    .addField(`Discord`, `${message.author}`, true)
    .addField(":red_car:", `${masina}`, true)
    .addField(`:money_with_wings:Kaina:money_with_wings:`, `${kaina}`, true)
    .addField(":iphone:Telefono numeris:iphone:", `${numeris}`, true)
    .addField(`:gear:Modifikacijos:gear:`, `${mod}`, true)
    .setThumbnail(`https://i.imgur.com/NuPKbRD.png`)
    .setTimestamp()
    .setFooter("Autoplius");
    message.delete();

    turgausChan.send(autoEm);
  }else if (pasirinkimas == "Moto" || pasirinkimas == "moto"){
    let motoEm = new Discord.RichEmbed()
    .setColor(color)
    .setTitle(`Parduodu`)
    .addField(`:detective:Savininkas:detective:`, `${savininkasV} ${savininkasP}`)
    .addField(`Discord`, `${message.author}`, true)
    .addField(":motorcycle:", `${masina}`, true)
    .addField(`:money_with_wings:Kaina:money_with_wings:`, `${kaina}`, true)
    .addField(":iphone:Telefono numeris:iphone:", `${numeris}`, true)
    .addField(`:gear:Modifikacijos:gear:`, `${mod}`, true)
    .setThumbnail(`https://i.imgur.com/NuPKbRD.png`)
    .setTimestamp()
    .setFooter("Autoplius");
    message.delete();

    turgausChan.send(motoEm);
  }
}

module.exports.help = {
  name: "parduoti"
}
