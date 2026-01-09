E-Commerse-Website

Full-stack e-commerce website built with React providing product management, shopping cart, and checkout functionality. It includes category browsing, product listing, product details pages, and basic navigation between pages.

🚀 Features

📦 Product listing on homepage

🛍️ Category filtering of products

📄 Product detail pages

🛒 Shopping cart integration

💳 Checkout workflow

🔁 Navigation using React Router

Your app fetches data from a backend API using REST calls like getProducts, getProductById, and other helper functions in fetcher.js.

🧰 Tech Stack

This project uses:

React — Frontend library

React Router — Client-side routing

Context API — Shared state (cart management)

REST API fetcher — Data fetching utility

styled-components — CSS in JS styling

Create React App — Project bootstrapping

📁 Folder Structure
E-Commerse-Website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components (Home, Category, Product, etc.)
│   ├── Contexts/           # Global state (CartContext)
│   ├── fetcher.js          # API fetch utility
│   ├── App.js              # Main router and app structure
│   └── index.js            # App entry point
├── package.json            # Project metadata + scripts
└── .gitignore

🧪 Getting Started

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/rfcm-git/E-Commerse-Website.git

2️⃣ Install dependencies
cd E-Commerse-Website
npm install

3️⃣ Create backend API (optional)

If you haven’t already, create or run your backend API server that serves product data at a known endpoint (e.g., http://localhost:3001). Your frontend uses this base URL by default.

4️⃣ Start the development server
npm start


This will open the website in the browser (usually under http://localhost:3000).

📌 Project Usage
Homepage

Displays a list of products fetched from API.

Product Details

Click any product link to view its details.

Category Pages

Navigate by category to see filtered products.

Shopping Cart

Add products from listing or detail pages and view them in the cart.

🛠 API Endpoints

Your fetch utility assumes the following paths:

Function	Endpoint
getCategories()	/categories
getProducts(catId)	/products?catId={id}
getProductById(id)	/products/{id}
getProductsByQuery(q)	/products?q={query}
🎨 Styling

This app uses styled-components for component-level styling, making it easy to manage and scope styles.

🤝 Contributing

Contributions are welcome!
To contribute:

Fork the repository

Create a feature branch

Make changes

Submit a pull request
