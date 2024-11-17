const gulp = require('gulp');

// Tarefa para imprimir "Hello, World!"
gulp.task('hello', function() {
    console.log('Hello, World!');
});

// Tarefa padrão do Gulp
gulp.task('default', gulp.series('hello'));