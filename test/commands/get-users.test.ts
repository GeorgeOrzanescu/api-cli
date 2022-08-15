import { expect, test } from "@oclif/test";

describe("get-users", () => {
  test
    .stdout()
    .command(["get-users"])
    .it("get users", (ctx) => {
      expect(ctx.stdout).to.contain("users");
    });
});
