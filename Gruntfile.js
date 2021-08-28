require("dotenv").config();

const screepsOptions = {
  email: process.env.API_USER,
  branch: process.env.SCRIPT_BRANCH,
};

if (process.env.SERVER_HOST == null) {
  screepsOptions.token = process.env.API_PASSWORD;
} else {
  screepsOptions.server = {
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT ?? 21025),
    http: true,
  };
  screepsOptions.password = process.env.API_PASSWORD;
}

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: ["dist/"],
    ts: {
      build: {
        src: ["src/**/*.ts"],
      },
      tsconfig: true,
    },
    screeps: {
      options: screepsOptions,
      dist: {
        src: ["dist/*.js"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-screeps");

  grunt.registerTask("default", ["clean", "ts:build", "screeps:dist"]);
  grunt.registerTask("build", ["clean", "ts:build"]);
  grunt.registerTask("upload", ["screeps:dist"]);
};
