# PrevisaoTempo_Docker

vagrant ssh
   23  sudo docker run  --name mysql -e  MYSQL_ROOT_PASSWORD=fatec   -p 3306:3306 -d  mysql
   24  sudo docker ps -a
   25  ip a
   26  docker
   27  git clone https://github.com/dsslleagion/PrevisaoTempo_Docker.git
   28  ls
   29  cd PrevisaoTempo_Docker/
   30  ls
   31  sudo docker build -t clima .
   32  sudo docker run -d --name clima -p 80:80 clima
   33  ip a
   34  sudo docker logs clima
   35  history