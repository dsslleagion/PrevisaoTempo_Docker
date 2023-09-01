# PrevisaoTempo_Docker

vagrant ssh
sudo docker run  --name mysql -e  MYSQL_ROOT_PASSWORD=fatec   -p 3306:3306 -d  mysql
sudo docker ps -a
ip a
docker
git clone https://github.com/dsslleagion/PrevisaoTempo_Docker.git
ls
cd PrevisaoTempo_Docker/
ls
sudo docker build -t clima .
sudo docker run -d --name clima -p 80:80 clima
ip a
sudo docker logs clima
history
