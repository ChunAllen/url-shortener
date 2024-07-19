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
[Uploading URL Shortener Serverless.postma{
	"info": {
		"_postman_id": "e4fe30fc-06b8-44b8-a822-ca0bc153b20e",
		"name": "URL Shortener Serverless",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "1093548",
		"_collection_link": "https://cloudy-equinox-245719.postman.co/workspace/My-Workspace~6a9d60c9-4198-4719-8aff-64b289047f68/collection/1093548-e4fe30fc-06b8-44b8-a822-ca0bc153b20e?action=share&source=collection_link&creator=1093548"
	},
	"item": [
		{
			"name": "List URLs",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/local/list-urls",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"local",
						"list-urls"
					]
				}
			},
			"response": []
		},
		{
			"name": "Generate Short URL",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"original_url\": \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/local/generate-url",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"local",
						"generate-url"
					]
				}
			},
			"response": []
		},
		{
			"name": "Redirect",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/local/s/d8c9b14a-196f-4c2c-8544-4bacf4a936e2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"local",
						"s",
						"d8c9b14a-196f-4c2c-8544-4bacf4a936e2"
					]
				}
			},
			"response": []
		}
	]
}n_collection.json…]()

## Screenshots
- List URLS (GET)
<img width="1319" alt="Screenshot 2024-07-19 at 8 46 53 PM" src="https://github.com/user-attachments/assets/72fb2b65-5b3e-40cc-ae3a-d53dec463022">

- Generate URL (POST) - shortened_url is longer currently because the backend is running in localhost. It will shortened once we have domain. e.g. http://bit.ly/{url.id}
<img width="1296" alt="Screenshot 2024-07-19 at 8 47 00 PM" src="https://github.com/user-attachments/assets/3050f198-aa2e-4be1-b896-cc6a953f49bf">

- Redirect to Show URL by passing ID in the Request URL 
- <img width="1308" alt="Screenshot 2024-07-19 at 8 49 39 PM" src="https://github.com/user-attachments/assets/6c8d5999-f515-4e64-a6e3-78a39595931b">

