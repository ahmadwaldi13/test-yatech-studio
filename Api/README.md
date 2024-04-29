## Api
# Testing API

To perform API testing, follow the steps below:
```
npm install
```

## Database Configuration

Create a .env file and add the database configuration as follows:

DATABASE_URL=mysql://root@localhost:3306/shooping

Also, make sure to update the configuration in the `.env.example` section with the same settings.

## Running the Server
After completing all database setup, run the server with the following command:
```
npm run dev
```

## Testing All APIs
You can test all API endpoints with postman :

```
{
	"info": {
		"_postman_id": "9a54f789-7401-4ba0-b54c-882c44119a92",
		"name": "test-pasien",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "21584199"
	},
	"item": [
		{
			"name": "create-pasien",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"nama\": \"ahmad\",\n    \"tanggal_pengobatan\": \"2023-07-22\",\n    \"keluhan\": [\"sakit kepala\", \"mual\", \"lemas\"],\n    \"resep_obat\": [\"bodrex\", \"paracetamol\"],\n    \"biaya\": 200000,\n    \"asuransi\": true,\n    \"nama_asuransi\": \"bri life\",\n    \"biaya_cover_asuransi\": 100000\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/pasien",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"pasien"
					]
				}
			},
			"response": [
				{
					"name": "create-pasien",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"nama\": \"ahmad\",\n    \"tanggal_pengobatan\": \"2024-04-29\",\n    \"keluhan\": [\"sakit kepala\", \"mual\", \"lemas\"],\n    \"resep_obat\": [\"bodrex\", \"paracetamol\"],\n    \"biaya\": 200000,\n    \"asuransi\": true,\n    \"nama_asuransi\": \"bri life\",\n    \"biaya_cover_asuransi\": 100000\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3001/pasien",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"pasien"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": null
				},
				{
					"name": "create-pasien-tanpa-asuransi",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"nama\": \"ahmad\",\n    \"tanggal_pengobatan\": \"2023-07-22\",\n    \"keluhan\": [\"sakit kepala\", \"mual\", \"lemas\"],\n    \"resep_obat\": [\"bodrex\", \"paracetamol\"],\n    \"biaya\": 200000,\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3001/pasien",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3001",
							"path": [
								"pasien"
							]
						}
					},
					"_postman_previewlanguage": null,
					"header": null,
					"cookie": [],
					"body": null
				}
			]
		}
	]
}
```


1. Open Postman.
2. Click on the "Import" button.
3. Choose the "Raw Text" option.
4. Paste the JSON code into the provided text area.
5. Click on the "Continue" button to proceed with the import.













