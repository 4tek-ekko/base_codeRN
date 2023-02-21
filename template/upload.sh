#!/bin/bash
GREEN='\033[1;32m'
YELLOW='\033[1;33m'
RED='\033[1;31m'
NC='\033[0m' # No Color

if [ ! -f .env] then
    export $(grep -v '^#' .env | xargs)
fi