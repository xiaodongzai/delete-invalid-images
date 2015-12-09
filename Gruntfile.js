/*
 * grunt-delete-invalid-images
 * https://github.com/xiezd/delete-invalid-images
 *
 * Copyright (c) 2015 xiaodongzai
 * Licensed under the MIT license.
 */

'use strict';

// var config = {
//   cwd: 'test', //源文件目录
//   dest: 'dest' //指定生成文件目录
// };

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    //删除会直接操作在源目录，被删除的图片在invalidFiles_bak文件中备份
    delete_invalid_images: {
      custom: {
        options: {
          cwd: 'test/'
          //srcFileType: [], //待处理的文件类型，默认['.jpg','.png','.jepg','.svg','.gif']
          //destFileType: [] //在这些类型的文件中进行检索是否还有引用，默认值为['.html','.htm','.js','.css']        
        }
      }
    },
    //copy，为后续cssmin,jsmin,imagemin做准备
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['**'],
          dest: 'dest/'
        }]
      },
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['delete_invalid_images','copy','nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
