module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("daterange-picker.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      dist: {
        src: ["src/daterange-picker.js"],
        dest: "dist/javascript/daterange-picker.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Lint definitions
    jshint: {
      files: ["dist/daterange-picker.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ["dist/daterange-picker.js"],
        dest: "dist/daterange-picker.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CoffeeScript compilation
    coffee: {
      compile: {
        files: {
          "src/daterange-picker.js": "src/daterange-picker.coffee"
        }
      }
    },

    compass: {
      server: {
        options:{
          sassDir: ["styles"],
          cssDir: ["dist/styles"],
          noLineComments: true
        }
      }
    },

    clean: {
      dist: ["dist"]
    },

    watch: {
      coffee: {
        files: ['src/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee']
      },
      compass: {
        files: ['styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");

  grunt.registerTask("default", ["jshint", "concat", "uglify"]);
  grunt.registerTask("travis", ["jshint"]);
};
