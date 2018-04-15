module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    strictMath: true
                },
                files: {
                    "public/main.css": "public/main.less", // destination file and source file
                    "public/test.css": "public/test.less", // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['public/main.less', 'public/test.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};