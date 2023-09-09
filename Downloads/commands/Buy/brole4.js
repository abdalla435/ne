const Discord = require("discord.js")
const db = require('quick.db')

module.exports = {
    name: "addr4",
    run: async (client, message, args) => {
 if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`You need the manage guild permission in order to use this command.`);
    let role = args.join(` `)
let gRole1 = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == role);
    if(!gRole1) return message.reply("**Couldn't find that role.**");
  
if(!role) message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setDescription("i can't find this role").setColor("9e1c36"))
message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setColor("9e1c36").setDescription(`Done has been set ${gRole1} as a role.`))
          console.log(`Done ${gRole1.id}`)
  db.set(`role4_${message.guild.id}`, gRole1);
}
  
}
  