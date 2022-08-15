import { Command } from "@oclif/core";
import fetch from "node-fetch";

export default class GetUsers extends Command {
  static description = "get all registered users";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const response = await fetch("http://localhost:3000/users");
    const usersData = await response.json();

    this.log(JSON.stringify(usersData, null, "\t"));
  }
}
