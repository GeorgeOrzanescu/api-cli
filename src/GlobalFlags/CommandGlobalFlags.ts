import { Command, Flags } from "@oclif/core";

export abstract class CommandGlobalFlags extends Command {
  static commonFlags = {
    id_user: Flags.string({
      char: "i",
      description: "Id of the user",
      required: true,
    }),
  };
}
