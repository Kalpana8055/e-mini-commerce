# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<img width="1892" height="676" alt="image" src="https://github.com/user-attachments/assets/8feb8424-7715-4a41-a2fc-9be68624a9c8" />
<img width="1517" height="837" alt="image" src="https://github.com/user-attachments/assets/514f3e26-6cfe-4927-8e40-dd08383f7981" />
<img width="1897" height="693" alt="image" src="https://github.com/user-attachments/assets/2cfb9176-7a2b-4d3e-a56f-ba25960c5a19" />
<img width="1482" height="687" alt="image" src="https://github.com/user-attachments/assets/7c0e8023-9a91-4284-b034-5c8cccc03fde" />
<img width="1506" height="712" alt="image" src="https://github.com/user-attachments/assets/ebbb04f4-4892-4a70-bedd-e510a281919f" />
file structure 
src/
│
├── components/
│   ├── ProductList.js
│   ├── ProductCard.js
│   ├── Filters.js
│   └── Cart.js
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.js
├── styles.css
└── index.js
🛒 Mini E-Commerce Website (React)
📌 Project Overview

This project is a Mini E-Commerce Web Application developed using React.js.
It allows users to browse products, filter and search items, sort by price, manage a shopping cart, and handle out-of-stock products effectively.

The application simulates real-world e-commerce behavior using API data along with custom products.

 Features Implemented
 Product Listing

Displays 20+ products

Products loaded from:

FakeStore API

Custom-added products (Makeup, Perfume, Accessories, etc.)

Each product shows:

Image

Name

Price (₹ INR)

Category

Stock status

 Search & Filter

Search products by name

Filter products by category

Sort products by price:

Low to High

High to Low

 Cart Functionality

Add products to cart

Increase or decrease quantity

Remove product automatically when quantity becomes zero

Cart data stored using localStorage

Cart persists even after page refresh

 Out of Stock Handling

Out-of-stock products are still visible

Clearly marked as “Out of Stock”

Add to Cart button is disabled

UI visually faded for better user experience

 Image Handling

Product images loaded from reliable sources

Fallback image handling implemented using onError

Ensures UI does not break if image fails to load

Concepts Used

React Hooks:

useState

useEffect

useMemo

Component-based architecture

Props for data flow

Conditional rendering

Array operations (map, filter, sort)

Browser localStorage


