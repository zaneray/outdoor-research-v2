module.exports = function(grunt) {

  // use "just-in-time" plugin loader to load npm tasks
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    less : {
      development : {
        options : {
          paths : ["less"],
          compress: false,
          // LESS source maps
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: false,
          sourceMapFileInline: false

        },
        
       files : [{
          expand : true,            // Enable dynamic expansion.
          cwd : 'less/',             // Src matches are relative to this path.
          src : ['outdoor-research.less'],         // Actual pattern(s) to match.
          dest : 'css/', // Destination path prefix.
          ext : '.css'              // Dest filepaths will have this extension.
        }]
      },
      press : {
        options : {
          paths : ["less"],
          compress: false,
          // LESS source maps
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: false,
          sourceMapFileInline: false

        },
       
       files : [{
          expand : true,            // Enable dynamic expansion.
          cwd : 'less/',             // Src matches are relative to this path.
          src : ['outdoor-research.css'],         // Actual pattern(s) to match.
          dest : '/css/', // Destination path prefix.
          ext : '.css'        // Dest filepaths will have this extension.
        }]
      }
    },

     rename: {
        moveThis: {
            src: '../themes/osprey-press/style-press.css',
            dest: '../themes/osprey-press/style.css'
        }
    },

    postcss: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('autoprefixer')({browsers: '> 1%'}) // add vendor prefixes
          ]
        },
        multiple_files: {
          expand: true,
          flatten: true,
        src: 'css/outdoor-research.css', // -> src/css/file1.css, src/css/file2.css
        dest: 'css/' // -> dest/css/file1.css, dest/css/file2.css
      }
    },

    // If any of these files change, touch off another build.
    watch : {           
      "set2less" : {
        files : ['less/**/*.less'],
        tasks : ['less:development','postcss'],
        options : {
          livereload : true
        }
      }
    }    
  });

  // NOTE: grunt.loadNpmTasks() not needed since we are using a JIT (just-in-time) loader for grunt plugins

  // special build options   
  grunt.option('force', true);  // Don't fail on JShint warnings for now.

  //grunt.registerTask('development', ['less:development','postcss','concat','watch']); 
  //grunt.registerTask('default', ['less:development','cmq','postcss','concat','uglify']); //add uglify for production files
  grunt.registerTask('default', ['less:development','rename','postcss','watch']); 
  grunt.registerTask('press', ['less:press','rename','postcss','watch']); 


};