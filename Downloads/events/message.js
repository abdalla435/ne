const fs = require("fs")
const db = require("quick.db");
const Discord = require('discord.js');
const ms = require("ms");
const Timeout = new Set();

module.exports = async (client, message) => {

    if (message.author.bot) return;

    const prefix = '+';

    if (!message.guild) return;


    if(message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        return message.channel.send("This works.");
    };


    if (!message.content.startsWith(prefix)) return;


    if (!message.member) message.member = await message.guild.fetchMember (message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) {
      if (command.timeout) {
      if (Timeout.has(`${message.guild.id}${command.name}`)) {
        return message.reply(
          `Please wait ${ms(command.timeout)}!`
        );
      } else {
        command.run(client, message, args);

        Timeout.add(`${message.guild.id}${command.name}`);
        setTimeout(() => {
          Timeout.delete(`${message.guild.id}${command.name}`);
        }, command.timeout);
      }
    } else {
      command.run(client, message, args);
    }
    
       } 
  }
