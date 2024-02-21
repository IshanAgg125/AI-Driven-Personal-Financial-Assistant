#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js could not be found. Please install Node.js to continue."
    exit
fi

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install npm to continue."
    exit
fi

# Clone your project repository (optional)
# git clone <your-repository-url>
# cd <your-project-directory>

# Install necessary packages
npm install

# Start the application
npm start

echo "Setup completed and application started."
