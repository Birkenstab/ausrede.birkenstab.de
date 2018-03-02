#!/bin/bash

VERSION=$(node -e "console.log(JSON.parse(require('fs').readFileSync('package.json', 'utf-8')).version)")

echo "Building version ${VERSION}"

docker build -t birkenstab/ausrede.birkenstab.de:${VERSION} -t birkenstab/ausrede.birkenstab.de:latest .
