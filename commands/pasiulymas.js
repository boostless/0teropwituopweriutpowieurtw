const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
   let kokiamString = "";
     if(message.channel.id != "699342517040185405") return message.delete();
     if(args.length < 1) return message.reply("Pvz: *pasiulymas neskubus/skubus discord/serveris hudas manau sitas hudas atrodytu geriau").then(m => m.delete(10000));
     if(args[0].length < 1) return message.reply("Nenurodei tipo").then(m => m.delete(5000));
     if(args[1].length < 1) return message.reply("Neirasei savo pasiūlymas").then(m => m.delete(5000));

     let pasirinkimas = args[0]
     let kokiam = args[1];
     let pasirinkPas = args[2];
     let kodel = args.join(" ").slice(args[0].length + args[1].length + args[2].length + 3);
     let pasiulymuchanel = message.guild.channels.find(`name`, "💡┋idėjos-pasiūlymai");
     if(kokiam == "discord" || kokiam == "Discord" || kokiam == "d" || kokiam == "D"){
       kokiamString = "Discord";
     }else{
       kokiamString = "Serveris";
     }

     if(pasirinkimas == "neskubus" || pasirinkimas == "Neskubus" || pasirinkimas == "n" || pasirinkimas == "N"){
       let nPasiulymasEmbed = new Discord.RichEmbed()
       .setTitle("⌛Pasiūlymas⌛")
       .setColor("#53db04")
       .addField("Pasiūlymas ", pasirinkPas)
       .addField("Kas pasiūlę", `${message.author}`)
       .addField("Kam būtų naudinga", kodel)
       .setDescription(kokiamString);
        message.delete();
       pasiulymuchanel.send(nPasiulymasEmbed);
     }
     if(pasirinkimas == "skubus" || pasirinkimas == "Skubus" || pasirinkimas == "s" || pasirinkimas == "S"){
       let sPasiulymasEmbed = new Discord.RichEmbed()
       .setTitle("⌛Pasiūlymas⌛")
       .setColor("#db3304")
       .addField("Pasiūlymas ", pasirinkPas)
       .addField("Kas pasiūlę", `${message.author}`)
       .addField("Kam būtų naudinga", kodel)
       .setDescription(kokiamString);
        message.delete();
       pasiulymuchanel.send(sPasiulymasEmbed);
     }

}

module.exports.help = {
  name: "pasiulymas"
}
