## Logical Test

To run the logical test, follow the steps below:

1. Make sure you have Node.js and npm installed on your system.

2. Open the terminal or command line interface (CLI).

3. Run the following command to start the logical test:

    ```
    npm run start
    ```

    After running the above command, you will see output like the following:

    ```
    == PALINDROME ==
    Input: x = 121
    Output: true
    try again? (y/n) : y
    Input: x = 22
    Output: true
    try again? (y/n) : n
    ```

    - `Input: x = 121` indicates the example input provided.
    - `Output: true` indicates the result of the logical test against that input.
    - `try again? (y/n) :` prompts whether you want to try another input or not. Answering `y` will prompt for new input, while `n` will end the logical test.

You can run the logical test and check the results as per the instructions above.


# Testing API

To perform API testing, follow the steps below:
```
npm install
```

## Database Configuration

Create a .env file and add the database configuration as follows:

DATABASE_URL=mysql://root@localhost:3306/shooping

Also, make sure to update the configuration in the `.env.development` section with the same settings.

## Database Migration, Generation, and Seeding
Run the following CLI commands to perform database migration, generate, and seeding:

```
npm run prisma:migrate
```
```
npm run prisma:generate
```
```
npm run prisma:seed
```

## Running the Server
After completing all database setup, run the server with the following command:
```
npm run dev
```

## Testing All APIs
You can test all API endpoints by accessing the src/http directory, which consists of:

`Admins`

`Customers`

`Products`

`Orders`

Explore each directory to test the functionality of the corresponding API related to customers, products, and orders.

## Testing Frontend and Backend

1. Run the backend command:
    ```
    npm run dev
    ```

2. Run the frontend command:
    ```
    npm run dev
    ```

open to browser:
```
 http://localhost:5173/
```










