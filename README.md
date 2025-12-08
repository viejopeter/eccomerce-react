# E-Commerce React Application

A full-stack e-commerce web application built with React, Vite, and Express. This project features a complete shopping experience with product browsing, cart management, checkout process, order tracking, and order history.

## 🚀 Features

- **Product Catalog**: Browse and search through available products
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Checkout System**: Complete orders with delivery options
- **Order History**: View all past orders with detailed information
- **Order Tracking**: Real-time tracking of order status (Preparing → Shipped → Delivered)
- **Responsive Design**: Mobile-friendly interface
- **RESTful API**: Backend API for managing products, cart, orders, and delivery options

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.1 - UI library
- **React Router** 7.9.5 - Client-side routing
- **Vite** 7.1.7 - Build tool and dev server
- **Axios** 1.13.2 - HTTP client
- **Day.js** 1.11.13 - Date manipulation

### Backend
- **Express** 4.21.2 - Web framework
- **Sequelize** 6.6.5 - ORM
- **SQL.js** - SQLite database
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-reload

## 📋 Prerequisites

- **Node.js** (version 22 or higher)
- **npm** (comes with Node.js)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ecommerce-react
```

### 2. Install Backend Dependencies
```bash
cd ecommerce-backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd ecommerce-backend
npm run dev
```
The backend will run on `http://localhost:3000`

### Start the Frontend Development Server
Open a new terminal:
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

### Access the Application
Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
ecommerce-react/
├── ecommerce-backend/          # Backend API server
│   ├── backend/                # JSON data storage
│   ├── defaultData/            # Default seed data
│   ├── models/                 # Database models
│   ├── routes/                 # API route handlers
│   ├── images/                 # Product and icon images
│   └── server.js               # Express server entry point
│
└── frontend/                   # React frontend application
    ├── public/                 # Static assets
    ├── src/
    │   ├── assets/             # Images and icons
    │   ├── components/         # Reusable components (Header)
    │   ├── pages/              # Page components
    │   │   ├── home/           # Homepage with product grid
    │   │   ├── checkout/       # Checkout page
    │   │   ├── orders/         # Orders history page
    │   │   └── Tracking.jsx    # Order tracking page
    │   ├── utils/              # Utility functions
    │   ├── App.jsx             # Main app component with routing
    │   └── main.jsx            # React entry point
    └── vite.config.js          # Vite configuration
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products

### Cart
- `GET /api/cart-items?expand=product` - Get cart items with product details
- `POST /api/cart-items` - Add item to cart
- `PUT /api/cart-items/:id` - Update cart item quantity
- `DELETE /api/cart-items/:id` - Remove item from cart

### Orders
- `GET /api/orders?expand=products` - Get all orders
- `GET /api/orders/:id?expand=products` - Get specific order
- `POST /api/orders` - Create new order

### Delivery Options
- `GET /api/delivery-options` - Get available delivery options

### Payment Summary
- `GET /api/payment-summary` - Get payment calculation

## 🎨 Key Features Explained

### Shopping Cart
- Persistent cart state across pages
- Real-time quantity updates
- Product information display with images

### Checkout Process
- Select delivery options for each item
- Calculate delivery dates
- Payment summary with tax and shipping costs

### Order Tracking
- Visual progress bar showing order status
- Three stages: Preparing, Shipped, Delivered
- Estimated delivery date display
- Real-time progress percentage calculation

### Order History
- View all past orders
- Order details with product information
- Quick access to tracking page
- "Buy Again" functionality

## 🔄 Available Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

### Frontend
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Backend: Change port in `server.js`
   - Frontend: Change port in `vite.config.js`

2. **CORS errors**
   - Ensure backend is running
   - Check proxy configuration in `vite.config.js`

3. **Module not found errors**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

4. **Database issues**
   - Check `backend/` directory for JSON data files
   - Restart backend server

For more detailed troubleshooting, see [ecommerce-backend/troubleshooting.md](ecommerce-backend/troubleshooting.md)

## 📝 Development Notes

- The backend uses JSON files for data persistence (SQLite for production)
- Frontend uses Vite proxy to avoid CORS issues in development
- Cart state is managed at the App level and passed as props
- React Router handles client-side navigation
- Day.js is used for date formatting and calculations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Pedro Quinchanegua**
- GitHub: [@viejopeter](https://github.com/viejopeter)
- Portfolio: [www.pquinch.dev](https://www.pquinch.dev)

## 🙏 Acknowledgments

- Based on the [ecommerce-project](https://github.com/SuperSimpleDev/ecommerce-project)
- Backend architecture inspired by SuperSimpleDev tutorials
