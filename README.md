# 2420_assign2
Mitchel Webb
A01279081

## Setting Up Droplets, Load Balancer, and Firewall

Setting up the droplets won't be covered here, because it's covered in good detail in these videos:

full droplet setup:
https://vimeo.com/758870226/f75da348fc?embedded=true&source=video_title&owner=17609105

load balancer & firewall setup:
https://vimeo.com/775412708/4a219b37e7

You're ready to move to the next step as soon as you have a setup similar to this on Digital Ocean (you should have ssh for regular users set up and blocked for root by this point):

![DO project page with two droplets and a load balancer visible](images/DoSetup.PNG)

## Installations

### Caddy

We're going to start with installing Caddy on each of our droplets (https://caddyserver.com/docs/install)

In each droplet, run the following commands:
```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### Volta, Node.JS

After this, we're going to need to install NodeJS with Volta on each of our droplets (https://docs.volta.sh/guide/getting-started, https://codebycorey.com/blog/managing-nodejs-with-volta)

In each droplet, run the following commands:
```
curl https://get.volta.sh | bash
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```
From here you can use Volta to install Node.JS with the command:
```
volta install node
```

## Setting Up Project Files

This next step takes us out of the droplets, and into our WSL. If you haven't before, you can install Volta and Node on your WSL same as you did with the droplets in the previous step

Now we're going to create project files. We're going to set up the following in the base project directory. You can leave the files blank for right now

* `html` directory
    * `index.html` file
* `src` directory
    * `index.js` file
* `Caddyfile` file
* `hello_web.service` file

By the end of this project, your project folder will look similar to this(ignoring the `images` directory):

![Directory containing project files](ProjectFiles.PNG)

### Initializing npm and Installing Fastify

We'll be using Fastify to run our server application in this project

To start, cd into your `src` directory and initialize npm using the following command:
```
npm init
```
This will initialize npm in the directory, which will allow us to then install Fastify in the same directory using:
```
npm i fastify
```

![Fastify installation process](FastifySetup.PNG)

### Populating .js and .html Files

Now we're going to use vim to add code to our index.html and index.js files.

#### index.html

This file is quite simple. Basically just a notifier to show the page is loading properly

![basic index.html example](IndexHTML.PNG)

#### index.js

The index.js file contains some basic code to run a server using Fastify

![basic index.js example](IndexJS.PNG)

#### note -You'll see that in both files, there's an X used to denote server/droplet. We're going to make copies of these files to go in each droplet later, and this x can be replaced with the relevant droplet number to properly identify it