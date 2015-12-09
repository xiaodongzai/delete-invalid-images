# grunt-delete-invalid-images

> delete invalud images in project

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-delete-invalid-images --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-delete-invalid-images');
```

## The "delete_invalid_images" task

### Overview
In your project's Gruntfile, add a section named `delete_invalid_images` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  delete_invalid_images: {
   custom: {
        options: {
          cwd: 'test/'
          //,srcFileType: [],
          //destFileType: []
        }
   }
  },
});
```

### Options

#### options.cwd
Type: `String`
Default value: `'./'`

#### options.srcFileType
Type: `Array`
Default value: `['.jpg','.png','.jepg','.svg','.gif']`

files type Arrary that will be checked if they are invalid or not.


#### options.destFileType
Type: `Array`
Default value: `['.html','.htm','.js','.css']`

files type Arrary that will be seached if they contained the above files's filename.

### Usage Examples

#### Custom Options

```js
grunt.initConfig({
  delete_invalid_images: {
    custom: {
        options: {
          cwd: 'test/'
          //srcFileType: [], 
          //destFileType: []
        }
      }
  },
});
```

## Release History
 * 2015-12-09   v0.1.0~v0.1.2   first publish
----

