### RokkerLabs frontend test
___

### First Steps:


* [node.js] - evented I/O
```sh
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - sudo apt-get install -y nodejs

sudo apt-get install -y build-essential
```

* [bower] - package manager for the web

```sh
npm install bower -g
```

```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

```


### Installation

first clone the repository
```sh
$ git clone https://github.com/Maat5/rokk3rlabs-frontend-test.git
```
enter to cloned folder
``` sh
 cd rokk3rlabs-frontend-test
```

Next Install npm modules

```sh
$ npm install
```

Then install bower components

```sh
$ bower install
```

---

## Run
```sh
$  gulp
```


   [node.js]: <http://nodejs.org>
   [Npm]: <https://www.npmjs.com/>
   [bower]: <https://bower.io/>
