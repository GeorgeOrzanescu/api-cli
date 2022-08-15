import { Command } from "@oclif/core";

export default class GetUsers extends Command {
  static description = "get all registered users";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const response = fetch("http://localhost:3000/users");
    const usersData = await (await response).json();

    this.log(usersData);
  }
}
