const Botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const fetch = require("./node-fetch");


fs.readdir("./commands", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
      console.log("Neradau komandu");
      return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} užkrautas!`);
    bot.commands.set(props.help.name, props);
  });

});

function SetPlayerDisp(){
  
    fetch("http://89.40.2.59:30121/dynamic.json")
        .then(x => x.json())
        .then(json =>  bot.user.setActivity(`SunCity.lt  ${json.clients}/${json.sv_maxclients}`, {type: "PLAYING"}))
        .catch(bot.user.setActivity(`Serveris išjungtas`, {type: "PLAYING"}))
}


bot.on("ready", async () => {
  console.log(`${bot.user.username}`);
  //Cia paraso ka botas veikia tai dabar rasys Watching Patruliuoj
  var interval = setInterval (function () {
        SetPlayerDisp();
      }, 1 * 10000); 
});


//auto role add
bot.on("guildMemberAdd", member => {
  console.log("Žmogus vardu " + member.user.username + " katik prisijunge!")

  let role = member.guild.roles.find(role => role.name === "❌Neaktyvuotas❌");

  member.addRole(role)
});





bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: Botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if(prefix == cmd.slice(0,1)){
    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(bot,message,args);
  };﻿
  //ping


  if (cmd == `${prefix}ping`)
  {
    message.channel.send("Pong!");
  };


});

bot.login(process.env.TOKEN);//Replace process.env.TOKEN with "<yourbots token>"
