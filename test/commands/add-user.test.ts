import { expect, test } from "@oclif/test";

describe("add-user", () => {
  test
    .stdout()
    .command(["add-user"])
    .it("adds a user ", (ctx) => {
      expect(ctx.stdout).to.contain("message");
    });
});
