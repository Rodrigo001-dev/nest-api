# estou chamando a imagem do postgres
FROM postgres

# aqui eu estou falando que o usuário postgres que é o padrão que está nessa
# imagem vai ser com o id 1000, fazendo ele ser o id 1000 eu torno ele
# equivalente ao usuário da máquina e eu conserto as permissões do volume que
# vai ser gerado, se eu não fizer isso a segunda vez que eu rodar um
# docker-compose up ele vai falar que eu não tenho permissão porque o postgres
# tem um id diferente por padrão
RUN usermod -u 1000 postgres
