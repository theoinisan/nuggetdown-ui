import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

import MODULES_DEFINITIONS from "./modules";

const buildConfig = {
  external: [
    "react",
    "react-dom",
    "styled-components",
    "prop-types",
    "moment",
    "react-youtube"
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**", // only transpile our source code
      plugins: ["external-helpers"]
    }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"],
        "node_modules/prop-types/index.js": ["object"]
      }
    })
  ]
};

export default MODULES_DEFINITIONS.map(module => {
  return Object.assign({}, module, buildConfig);
});
