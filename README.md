# PrevisaoTempo_Docker

vagrant ssh 

<p>Comando do docker mysql é apenas para testar </p>
<p> sudo docker run  --name mysql -e  MYSQL_ROOT_PASSWORD=fatec   -p 3306:3306 -d  mysql </p>
<p>sudo docker ps -a</p>
<p>ip a</p>
# apartir de agora os codigos para lançar o projeto dentro do docker
<p>git clone https://github.com/dsslleagion/PrevisaoTempo_Docker.git</p>
<p>ls</p>
<p>cd PrevisaoTempo_Docker/</p>
<p>ls</p>
<p>sudo docker build -t clima .</p>
<p>sudo docker run -d --name clima -p 80:80 clima</p>
<p>ip a</p>
<p>sudo docker logs clima</p>

