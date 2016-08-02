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

### Installation

first clone the repository
```sh
$ git clone https://github.com/Maat5/rokk3rlabs-frontend-test.git
```

enter to cloned folder
``` sh
 cd rokk3rlabs-frontend-test
```

if wanna see last version, change to develop branch:
``` sh
git checkout develop
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
