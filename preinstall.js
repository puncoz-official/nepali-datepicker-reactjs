"use strict"

import process from "node:process"

if (process.env.npm_execpath.indexOf("yarn") === -1) {
  console.error("You must use 'yarn' to install dependencies:")
  process.exit(1)
}
