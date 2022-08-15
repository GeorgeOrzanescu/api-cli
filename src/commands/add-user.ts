import { Command } from "@oclif/core";
import fetch from "node-fetch";
import { NewUserPrompt } from "../Prompts/NewUserPrompt";

export default class AddUser extends Command {
  static description = "add a new user";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const inputData = await NewUserPrompt();
    console.dir(JSON.stringify(inputData));
    const response = await fetch("http://localhost:3000/newUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });

    const APIResponse = await response.json();
    this.log(APIResponse);
  }
}
