import { join, dirname } from "path";
import { fileURLToPath } from "url";

const PORT = 8080;

const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join(currentDir, "../");
const publicDirectory = join(root, "reg");

export default {
  port: PORT,
  publicDirectory,
  CONTENT_TYPE: {
    ".html": "text/html;",
    ".css": "text/css;",
    ".js": "text/javascript;",
  },
};
