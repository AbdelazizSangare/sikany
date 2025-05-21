#!/bin/bash

echo "=== Vérification de l'environnement serveur ==="

# Vérification de Node.js
echo -n "Node.js: "
if command -v node &> /dev/null; then
    node -v
else
    echo "Non installé"
    exit 1
fi

# Vérification de npm
echo -n "npm: "
if command -v npm &> /dev/null; then
    npm -v
else
    echo "Non installé"
    exit 1
fi

# Vérification de PM2
echo -n "PM2: "
if command -v pm2 &> /dev/null; then
    pm2 -v
else
    echo "Non installé"
    exit 1
fi

# Vérification de serve
echo -n "serve: "
if command -v serve &> /dev/null; then
    serve -v
else
    echo "Non installé"
    exit 1
fi

# Vérification des dossiers
echo -n "Dossier /home/deploy/app: "
if [ -d "/home/deploy/app" ]; then
    echo "Existe"
    echo -n "Permissions: "
    ls -ld /home/deploy/app
else
    echo "N'existe pas"
    exit 1
fi

echo -n "Dossier uploads: "
if [ -d "/home/deploy/app/backend/uploads" ]; then
    echo "Existe"
    echo -n "Permissions: "
    ls -ld /home/deploy/app/backend/uploads
else
    echo "N'existe pas"
    exit 1
fi

# Vérification des ports
echo "=== Vérification des ports ==="
echo -n "Port 3000 (Frontend): "
if netstat -tuln | grep ":3000" &> /dev/null; then
    echo "En cours d'utilisation"
else
    echo "Disponible"
fi

echo -n "Port $BACKEND_PORT (Backend): "
if netstat -tuln | grep ":$BACKEND_PORT" &> /dev/null; then
    echo "En cours d'utilisation"
else
    echo "Disponible"
fi

# Vérification de la base de données
echo "=== Vérification de la base de données ==="
if command -v mysql &> /dev/null; then
    echo -n "Connexion à MySQL: "
    if mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASS" -e "SELECT 1" &> /dev/null; then
        echo "OK"
    else
        echo "Échec"
        exit 1
    fi
else
    echo "MySQL client non installé"
fi

echo "=== Vérification terminée ===" 