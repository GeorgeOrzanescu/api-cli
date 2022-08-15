import { CommandGlobalFlags } from "../GlobalFlags/CommandGlobalFlags";
import fetch from "node-fetch";

export default class GetUser extends CommandGlobalFlags {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    id: this.commonFlags.id_user,
  };
  public async run(): Promise<void> {
    const { flags } = await this.parse(GetUser);
    const response = fetch(`http://localhost:3000/users/${flags.id}`);
    const usersData = await (await response).json();

    this.log(usersData);
  }
}
