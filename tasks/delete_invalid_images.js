/*
 * grunt-delete-invalid-images
 * https://github.com/xiezd/delete-invalid-images
 *
 * Copyright (c) 2015 xiaodongzai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('delete_invalid_images', 'delete invalid images in project', function() {
    var options = this.options({
        cwd: './',
        srcFileType: ['.jpg','.png','.jepg','.svg','.gif'], //要删除的无效文件的类型
        destFileType: ['.html','.htm','.js','.css'] //从这些类型的文件中检索是否还有索引
    });
     
     if(!grunt.file.exists(options.cwd)){
       grunt.log.errorlns('The path ' + options.cwd + 'is not exist !');
     }

     var srcFilePathArray = [],
         destFilePathArray = [];

     options.srcFileType.forEach(function(v){
        srcFilePathArray.push(options.cwd + '**/*' + v);
     });

     options.destFileType.forEach(function(v){
        destFilePathArray.push(options.cwd + '**/*' + v);
     });    

     //读取待检索文件
     var destFiles = grunt.file.expand(destFilePathArray);
     var content = destFiles.map(function(f){
        return grunt.file.read(f);
     }).join('');
     
     
     //创建目录存放被删除的无效图片
     var invalidPath = './invalidFiles_bak/';
     grunt.file.mkdir(invalidPath);
     
     //获取所有的待处理文件 
     var srcFiles = grunt.file.expand(srcFilePathArray);
     grunt.log.oklns(srcFiles.length + ' files will be searched');
     srcFiles.forEach(function(f){
        var index = f.lastIndexOf('/');
        var fileName = f.substring(index+1);
        if(content.indexOf(fileName) === -1){
           grunt.log.oklns(f + 'is invalid');
           grunt.file.copy(f,invalidPath + fileName);
           grunt.file.delete(f);
        }  
     });
     grunt.log.oklns('All files hava been dealed');
  });

};
