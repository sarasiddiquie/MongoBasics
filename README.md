# Installation

To run this application on your system, follow these steps:

## 1. Install Node.js

If you don't have Node.js installed on your machine, you can download the official version from [Node.js website](https://nodejs.org/en/download) and then install it.

## 2. Install Required Libraries and Framework

This JavaScript example uses the axios library for making HTTP POST requests to the Webhook.site endpoint. Make sure to install the required dependencies, including `mongodb` and `axios`, using npm or yarn. Open your terminal and run the following command:

```bash
npm install mongodb axios

```

## 3.Running the Application
To execute the JavaScript file, open your terminal and navigate to the project directory. Then, run the following command:

```bash
node file.js
```

## 4. Update Webhook URL
The application uses a Webhook URL for sending requests. Please visit webhook.site and create a webhook. Once you have a webhook URL, update the webhookUrl variable in the file.js with the URL you obtained.

```bash
const webhookUrl = 'YOUR_WEBHOOK_URL_HERE'
```

By following these steps, you'll have the application set up and ready to run on your system.

