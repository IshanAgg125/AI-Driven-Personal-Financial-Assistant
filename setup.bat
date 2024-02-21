@echo off

REM Check Node.js and npm installation by attempting to retrieve their versions
node -v
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js to continue.
    exit /b
)

npm -v
if %errorlevel% neq 0 (
    echo npm is not installed. Please install npm to continue.
    exit /b
)

REM Clone your project repository (optional)
REM git clone <your-repository-url>
REM cd <your-project-directory>

REM Install necessary packages
npm install

REM Start the application
npm start

echo Setup completed and application started.
pause
