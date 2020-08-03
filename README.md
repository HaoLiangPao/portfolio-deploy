# Portfolio-Deployment Version

## Log in Command

```bash
# Login to user 'Hao' for 'Portfolio_Hao' EC2 instance
ssh -i ~/.ssh/portfolio_user_hao.pem hao@ec2-13-59-87-12.us-east-2.compute.amazonaws.com
```









## AWS Configuration

1. Connect to the AWS Linux Server via SSH

2. Create a user

```bash
# create a user 'hao'
sudo add user hao
#  login as a user 'hao'
sudo su - hao
```

3.  Add **.ssh** folder to the user


   ```bash
# initialize .ssh folder for SSH login service
mkdir .ssh
# change file permission: only the file owner can read/write or open the directory
chmod 700 .ssh
# Create 'authorized_keys' file for SSH public keys
touch authorized_keys
# change file permission: only the file owner can read/write the file
chmod 600 authorized_keys
   ```

4. Prepare the private-public key pair

```bash
# Change file permission: only the file owner can read the file
chmod 400 portfolio_user_hao.pem
# Generate a public key according to the private key
ssh-keygen -y
# Enter the file path
Enter file in which the key is (/Users/lianghao/.ssh/id_rsa): # /Users/lianghao/.ssh/portfolio_user_hao.pem
```

5. Configure the public key for the user and login as the user

```bash
# Add the public key generated to the 'authorized_keys' file
vim authorized_keys
# Done configuration 
# ------
# Login as the user
ssh -i ~/.ssh/
```





---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
