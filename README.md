# 2420_assign2

## Setting up droplets w/ load balancer and firewall
Setting up the droplets won't be covered here, because it's covered in good detail in these videos:

full droplet setup:
https://vimeo.com/758870226/f75da348fc?embedded=true&source=video_title&owner=17609105

load balancer & firewall setup:
https://vimeo.com/775412708/4a219b37e7

You're ready to move to the next step as soon as you have a setup similar to this on Digital Ocean (you should have ssh for regular users set up and blocked for root by this point):

![DO project page with two droplets and a load balancer visible](images/DoSetup.PNG)

## Installing web server (Caddy)
Installing Caddy can be done fairly easily by following the tutorial present on the Caddyserver website (https://caddyserver.com/docs/install).

In each droplet, run the following commands:
```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

## Writing the web app
Now we're going to switch over to a WSL to write the web application we're going to be using for this project.

I always start by creating empty shells of files that I will populate with data later. The main things we need are:

* A `Caddyfile` file (which we'll use to configure Caddy)
* An `html` directory containing an `index.html` file (for the basic html we'll be showing)
* An `src` directory containing an `index.js` file (for the basic code we'll be running)

![Directory containing project files](ProjectFiles.PNG)

After that, initialize the directory with npm, and run the command `npm i fastify` to install fastify(the nodeJS server utility we'll be using)

![Fastify installation process](FastifySetup.PNG)

## Setting up .js and .html files