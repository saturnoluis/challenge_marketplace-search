# Challenge: Marketplace Search

This is the challenge that I made as part of the hiring process with [MercadoLibre](https://www.mercadolibre.com.ar/).

It consist on a web application that displays a search field in the header of the home page, searching for a product (i.e. "iphone") triggers a request for products that match the search term, displays the list of results, and allow the user to click on a product to see the details.

Internally the application uses a public API provided by MercadoLibre but a small backend is also included in the project to serve as "bridge" between the frontend and the actual public API.

## How to install and start

To install run the following command from the root folder: 
```
npm install
```

To start run the following command from the root folder: 
```
npm start
```

*Note: If you have any problem during the install, please use node v16 since that was the version used during the creation of this project.*

## Folder structure

The project is divided into two folders:
* The `/back` folder contains the node-express application that serves as the api for the front-end.
* The `/front` folder contains the react application for the front-end.

### Note
The node server starts at port localhost:4000
The front application starts at port localhost:3000

# Preview
![localhost_3000_items_MLA914482289](https://user-images.githubusercontent.com/14167280/138793364-bcffca3c-8d62-461e-8ba7-4dee4fefe64c.png)



