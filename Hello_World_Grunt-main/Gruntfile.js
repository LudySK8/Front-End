module.exports = function(grunt) {
    // Configuração do projeto
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
    });
  
    // Defina a tarefa 'hello'
    grunt.registerTask('hello', 'Log some stuff.', function() {
      grunt.log.writeln('Hello, World!');
    });
  
    // Tarefa padrão
    grunt.registerTask('default', ['hello']);
};  