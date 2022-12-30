const exe = require("@angablue/exe");

const build = exe({
  entry: "./build/index.js",
  out: "./pyramidRaffles.exe",
  pkg: ["--public"], // Specify extra pkg arguments
  version: "5.8.0",
  target: "node16-win-x64",
  icon: "./icon/testingicologo.ico", // Application icons must be in .ico format
  properties: {
    FileDescription: "Pyramid Raffles",
    ProductName: "PyramidRaffles",
    LegalCopyright: "PyramidRaffles developed by PyramidAIO",
    OriginalFilename: "pyramidraffles.exe",
  },
});

build.then(() => console.log("Build completed!"));
