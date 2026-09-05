import { existsSync } from "node:fs";
    import { execFileSync } from "node:child_process";

    const bundledServer = new URL("./aaradhyy-healthcare/server.js", import.meta.url);
    if (!existsSync(bundledServer)) {
    console.log("Extracting Aaradhyy Healthcare production package...");
    execFileSync("tar", ["-xzf", "aaradhyy-healthcare-production.tar.gz"], {
      cwd: new URL(".", import.meta.url),
      stdio: "inherit",
    });
    }

    await import("./aaradhyy-healthcare/server.js");
    