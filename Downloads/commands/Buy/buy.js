const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
    name: "buy",
    run: async (client, message, args) => {
let owner = db.get(`owner_${message.guild.id}`)
let logchannel = db.get(`logschannel2_${message.guild.id}`)
 let role1 = db.get(`role1_${message.guild.id}`);
 let role2 = db.get(`role2_${message.guild.id}`);
 let role3 = db.get(`role3_${message.guild.id}`);
 let role4 = db.get(`role4_${message.guild.id}`);
 let role5 = db.get(`role5_${message.guild.id}`);
 let role6 = db.get(`role6_${message.guild.id}`);
 let role7 = db.get(`role7_${message.guild.id}`);
 let pricerole1 = db.get(`pricerole1_${message.guild.id}`);
 let pricerole2 = db.get(`pricerole2_${message.guild.id}`);
 let pricerole3 = db.get(`pricerole3_${message.guild.id}`);
 let pricerole4 = db.get(`pricerole4_${message.guild.id}`);
 let pricerole5 = db.get(`pricerole5_${message.guild.id}`);
 let pricerole6 = db.get(`pricerole6_${message.guild.id}`);
 let pricerole7 = db.get(`pricerole7_${message.guild.id}`);       
 let price2role1 = db.get(`price2role1_${message.guild.id}`);
 let price2role2 = db.get(`price2role2_${message.guild.id}`);
 let price2role3 = db.get(`price2role3_${message.guild.id}`);
 let price2role4 = db.get(`price2role4_${message.guild.id}`);
 let price2role5 = db.get(`price2role5_${message.guild.id}`);
 let price2role6 = db.get(`price2role6_${message.guild.id}`);
 let price2role7 = db.get(`price2role7_${message.guild.id}`);       
 const embed = new Discord.MessageEmbed()
      .setAuthor(
        "**برجاء كتابة رقم الرتبة التى تريد شراؤها من 1 ل 7**",
        message.author.displayAvatarURL({
          dynamic: true
        })
      )
      .setDescription(
        `>>>  **[1] <@&${role1.id}> | Price  : ${price2role1} Credits \n\n [2] <@&${role2.id}> | Price  : ${price2role2} Credits \n\n [3] <@&${role3.id}> | Price  : ${price2role3} Credits \n\n [4] <@&${role4.id}> | Price  : ${price2role4} Credits \n\n [5] <@&${role5.id}> | Price  : ${price2role5} Credits \n\n [6] <@&${role6.id}>  | Price  : ${price2role6} Credits  \n\n [7] <@&${role7.id}>  | Price  : ${price2role7} Credits \n\n [0] Cancel**`
      )
      .setFooter(`Requested by ${message.author.tag}`);


    message.channel.send(embed).then(m => {
      message.channel
        .awaitMessages(msg => msg.author.id === message.author.id, {
          max: 1,
          time: 1000 * 100 * 2,
          errors: ["time"]
        })
        .then(c => {
          if (c.first().content === "1") {
if(message.member.roles.cache.find(r=>r.name == role1.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

            message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole1 || "Use : addt1 [السعر مع الضريبه]"}\` ** `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role1);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role1.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role1.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role1.id}>
credits : \`${price2role1}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)

                  })
                  .catch(e => {});
              });
          
          }
   if (c.first().content === "2") {
if(message.member.roles.cache.find(r=>r.name == role2.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

             message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole2 || "Use : addt2 [السعر مع الضريبه]"}\` ** `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role2);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role2.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role2.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role2.id}>
credits : \`${price2role2}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)
                  })
                  .catch(e => {});
              });
          
          }
  if (c.first().content === "3") {
if(message.member.roles.cache.find(r=>r.name == role3.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

             message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole3 || "Use : addt3 [السعر مع الضريبه]"}\`**  `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role3);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role3.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role3.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role3.id}>
credits : \`${price2role3}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)
                  })
                  .catch(e => {});
              });
          
          }
  if (c.first().content === "4") {
if(message.member.roles.cache.find(r=>r.name == role4.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

             message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole4 || "Use : addt4 [السعر مع الضريبه]"}\` ** `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role4);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role4.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role4.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role4.id}>
credits : \`${price2role4}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)
                  })
                  .catch(e => {});
              });
          
          }
  if (c.first().content === "5") {
if(message.member.roles.cache.find(r=>r.name == role5.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

           message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole5 || "Use : addt5 [السعر مع الضريبه]"}\`**  `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role5);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role5.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role5.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role5.id}>
credits : \`${price2role5}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)
                  })
                  .catch(e => {});
              });
          
          }
  if (c.first().content === "6") {
if(message.member.roles.cache.find(r=>r.name == role6.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

           message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole6 || "Use : addt6 [السعر مع الضريبه]"}\` ** `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role6);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role6.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role6.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role6.id}>
credits : \`${price2role6}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)
                  })
                  .catch(e => {});
              });
          
          }
 if (c.first().content === "7") {
if(message.member.roles.cache.find(r=>r.name == role7.name)) return message.reply("انت تمتلك الرتبة مسبقًا")

             message.channel
              .send(
                `**يرجى نسخ الامر التالى وتحويل المبلغ المطلوب
لديك 1 دقايق للتحويل  للحصول على الرتبة  
C ${owner.id}  \`${pricerole7 || "Use : addt7 [السعر مع الضريبه]"}\`**  `
              )

              .then(msgs => {
       m.delete();
                  const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner.id}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price2role7);
                msgs.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 60000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    message.delete();
                    message.reply(`**${role7.name} <a:success:1028551525640982568> تم اعطاك الرول بنجاح**`);
 var role = message.guild.roles.cache.find( r=>r.name == role7.name);
                    message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setAuthor('شخص اشتري رول جديد')
.setDescription(`
ID : \`${message.author.id}\`
Name : \`${message.author.username}\`
Role :  <@&${role7.id}>
credits : \`${price2role7}\`
transfar ID : \`${owner.id}\`
transfar Username : \`${owner.tag}\`
`)
.setColor("#f3ae10")
client.channels.cache.get(logchannel).send(embed)
                  })
                  .catch(e => {});
              });
          
          }         
          if (c.first().content == "0") {
            c.first().delete();
            m.delete();
            message.channel.send("**تم الغاء الامر بنجاح**");
          }
        });
    });
  }
};
