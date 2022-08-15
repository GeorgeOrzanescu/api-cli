import * as inquirer from "inquirer";

export function NewUserPrompt() {
  const responses = inquirer.prompt([
    {
      message: "Name of new user:",
      name: "name",
      validate: (input: string) => {
        if (input.trim().length < 2) {
          return "Name must be atleast 2 char long";
        }
        return true;
      },
    },
    {
      message: "Surname of new user:",
      name: "surname",
      validate: (input: string) => {
        if (input.trim().length < 2) {
          return "Surname must be atleast 2 char long";
        }
        return true;
      },
    },
  ]);

  return responses;
}
