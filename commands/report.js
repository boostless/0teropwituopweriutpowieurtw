const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  console.log("fired");
     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Nerandu tokio vardo");//cia iesko ar yra toks vardas
      if(rUser == message.author) return message.channel.send("Negali saves pereportinti");
      let reason = args.join(" ").slice(22);


      let reportEmbed = new Discord.RichEmbed()
      .setDescription("❌Reportas❌")
      .setColor("#fc2003")
      .addField("Nusiženges ", `${rUser} su ID: ${rUser.id}`)
      .addField("Kas Reportino", `${message.author} su ID: ${message.author.id}`)
      .addField("Kokiam chaneli", message.channel)
      .addField("Kada pareportino", message.createdAt)
      .addField("Priežastis", reason);
      message.delete();//istrina zinute

      //issiuncia zinute i reports chaneli
      let reportschanel = message.guild.channels.find(`name`, "❌reportai❌");
      if(!reportschanel) return message.channel.send("Neradau chanelio");
      //istrina zinute
      message.delete().catch(O_o=>{});
      reportschanel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
