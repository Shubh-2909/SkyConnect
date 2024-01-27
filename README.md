## Welcome to Flight Services

## Project Setup
- clone the project on your local
- Execute  `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following and add the environment variables
  - `PORT = 3000`
- Inside the `src/config` folder and create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <Your_DB_login_name>,
    "password": <Your_DB_password>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
   }
}
```