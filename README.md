[URL Shortener Serverless.postman_collection.json](https://github.com/user-attachments/files/16312131/URL.Shortener.Serverless.postman_collection.json)# URL Shortener Serverless

## Stacks
```
node v20.10.0
serverless framework v3.39.0
```

## Installation
- Install Node Version Manager (NVM)
```
https://github.com/nvm-sh/nvm#install--update-script
```
- Install Node using NVM
```
nvm install 20.10.0
```
- Install Serverless Framework using
```
npm install -g serverless@3.39.0
```

## Install Dependencies from package.json
```
npm install
```


## Run the Application
```
npm run local
```

## Postman Collection
- Check file postman.json then import to your postman


## Screenshots
- List URLS (GET)
<img width="1319" alt="Screenshot 2024-07-19 at 8 46 53 PM" src="https://github.com/user-attachments/assets/72fb2b65-5b3e-40cc-ae3a-d53dec463022">

- Generate URL (POST) - shortened_url is longer currently because the backend is running in localhost. It will shortened once we have domain. e.g. http://bit.ly/{url.id}
<img width="1296" alt="Screenshot 2024-07-19 at 8 47 00 PM" src="https://github.com/user-attachments/assets/3050f198-aa2e-4be1-b896-cc6a953f49bf">

- Redirect to Show URL by passing ID in the Request URL 
- <img width="1308" alt="Screenshot 2024-07-19 at 8 49 39 PM" src="https://github.com/user-attachments/assets/6c8d5999-f515-4e64-a6e3-78a39595931b">

