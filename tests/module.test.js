import test from "ava";
import fs from "fs/promises";
import { getIndentation } from "../src/module.js";

test("simple replace", async (t) => {
    console.log("ready");
    const content = await fs.readFile(
        new URL("./example.yaml", import.meta.url),
        "utf-8"
    );
    t.deepEqual(getIndentation(content), [
        [0, "root:"],
        [1, "- every"],
        [1, "- every"],
        [1, "- every"],
        [0, "master:"],
        [1, "- other:"],
        [2, "- raw"],
        [2, "- raw"],
        [2, "- raw"],
        [0, ""],
    ]);
});
