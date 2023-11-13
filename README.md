# Shopping-App-Backend
This project shows the creation of API that support the backend of Shopping Application to support feature such as data logging and product search

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for database hosting

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shopping-app-backend.git
   cd shopping-app-backend

2. Install dependencies:

   ```bash
   npm install

 ## Project Structure

  ```lua
  /Shopping App Backend
  |-- /config
  |   |-- db.js
  |   |-- default.json
  |-- /models
  |   |-- catalog.js
  |   |-- userCreds.js
  |-- /routes
  |   |-- userRoutes.js
  |   |-- catalogRoutes.js
  |-- index.js
  |-- package.json
  |-- package-lock.json
  |-- ...
  ```

## Usage
Run the application

```bash
npm start
```

Your APIs will be accessible at:

- User Profile Logging: "http://localhost:8000/user/userProfile"

- Product Search: "http://localhost:8000/search/searchItems"

## API Endpoints
## 1. User Profile Logging API
   
  ###  - Endpoint: "POST /user/userProfile"
  ###  - Request Body:
     ```json
       {
           "customerName": "mohit",
           "username": "moh123",
           "password": "password",
           "gender": "male",
       }
     ```
  ###  - Response
      ```json
        {
          "message": "User profile logged successfully"
        }

 ## 2. Product Search API

  ### Endpoint: "GET /search/searchItems"
  ### Query Parameters:
   #### searchKeyword (required)
   #### priceMin (optional)
   #### priceMax (optional)    

  ###  - Response
         ```json
          {
            "results": [
                    {
                      "_id": "6551a45e1743824c897bfb6e",
                      "product_id": 968,
                      "Product_category": "Men t-shirts & polos",
                      "Rank": 967,
                      "brand_name": "dyrectdeals",
                      "product_description": "Men Colorblock Polo Neck Poly Cotton Yellow T-Shirt",
                      "price": 449,
                      "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/c/s/s-gt-4-dyrectdeals-original-imagmg9x3wackb7a.jpeg?q=70"
                    }
                    .
                    .
                ]
           }     
     ```

     
