#!/bin/bash

# Mise à jour du système
sudo apt update
sudo apt upgrade -y

# Installation de Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Installation des outils globaux
sudo npm install -g pm2 serve

# Création du dossier d'application
sudo mkdir -p /home/deploy/app
sudo chown -R $USER:$USER /home/deploy/app
chmod 755 /home/deploy/app

# Création du dossier uploads
mkdir -p /home/deploy/app/backend/uploads
chmod 755 /home/deploy/app/backend/uploads

# Vérification des installations
echo "Node.js version:"
node -v
echo "npm version:"
npm -v
echo "PM2 version:"
pm2 -v
echo "serve version:"
serve -v

echo "Installation terminée !" 