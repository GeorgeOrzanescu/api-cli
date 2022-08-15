import { expect, test } from "@oclif/test";

describe("get-user", () => {
  test
    .stdout()
    .command(["get-user"])
    .it("get an user with specified id as flag", (ctx) => {
      expect(ctx.stdout).to.contain("userFound");
    });
});
