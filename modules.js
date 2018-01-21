export default [
  {
    input: "lib/index.js",
    output: {
      name: "main",
      file: "index.js",
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
        "styled-components": "styled",
        moment: "moment",
        "react-youtube": "YouTube"
      }
    }
  }
];
