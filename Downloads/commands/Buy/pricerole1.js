const Discord = require("discord.js")
const db = require('quick.db')

module.exports = {
    name: "addt1",
    run: async (client, message, args) => {
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`You need the manage guild permission in order to use this command.`);
    let pricerole1 = args.join(` `)
      if(!pricerole1) {
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
  .setDescription("ضيف السعر")
  .setColor("9e1c36")
  
  

return message.channel.send(embed)

}
message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setColor("9e1c36").setDescription(`تم اضافت سعر الرول بعد الضريبه${pricerole1}`))
          console.log(`Done ${pricerole1}`)
  db.set(`pricerole1_${message.guild.id}`, pricerole1);

}
  
}
  