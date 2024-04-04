To deploy a ReactJS application on an EC2 instance, follow these commands👇:

1)SSH into your EC2 instance:

 • ssh -i "C:\Users\eshwa\Downloads\reactjs2.pem" ubuntu@ec2-ip-address.ap-south-1.compute.amazonaws.com
  
2)Update the package list:

  • sudo apt update

3)Upgrade installed packages:

  • sudo apt upgrade

4)Install Node.js:

  • sudo apt install nodejs

5)Check Node.js version:

  • node --version

6)Install npm (Node.js package manager):

  • sudo apt install npm

7)Check npm version:

  • npm --version

8)Clone your project repository:

  • git clone your-repository-url

9)Navigate to your project directory:

  • cd your-project-path

10)Create a .env file:

  • touch .env

11)Open the .env file for editing:

  • vim .env

12)Add environment variables to the .env file:

    DOMAIN="http://localhost:3000"
    PORT=3000
    STATIC_DIR="./client"
    PUBLISHABLE_KEY="your-stripe-publishable-key"
    SECRET_KEY="your-stripe-secret-key"

    • Save and exit the .env file.

13)Verify the contents of the .env file:

  • cat .env

14)Install project dependencies:

  • npm install

15)Start the ReactJS application:

  • npm start

16)Access your application using the EC2 instance public IP address:

  • http://ec2-public-ip:3000










