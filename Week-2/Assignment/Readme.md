# E-Commerce Website (This website isn't responsive yet)

This project is a fully functional e-commerce website that showcases products, allows users to add items to their cart, and provides a slideshow for featured products. It is built using HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home Page**: Displays the navigation bar, featured products, categories, and a slideshow of promotional content.
- **Product Sections**: Includes sections for featured products, electronics, and jewelry.
- **Cart Functionality**: Allows users to add and remove items from the cart, with live updates on the number of items and total price.
- **Responsive Design**: Adaptable layout for different screen sizes.
- **Dynamic Content**: Fetches product data from a fake store API.

## Technologies Used

- HTML
- CSS
- JavaScript

## File Structure

```
root
│   README.md
│   index.html
│   style.css
│   script.js
```

- **index.html**: Contains the structure of the webpage, including the navigation bar, product sections, and slideshow.
- **style.css**: Styles the website, including the layout, fonts, colors, and responsiveness.
- **script.js**: Handles the dynamic functionalities such as fetching product data, managing the cart, and controlling the slideshow.

## Usage

- **Navigation**: Use the sidebar or top navigation bar to navigate through different sections of the website.
- **Add to Cart**: Click on the "Add to Cart" button on any product to add it to your cart.
- **View Cart**: Click on the cart icon in the navigation bar to view items in your cart.
- **Slideshow**: The homepage includes a slideshow that automatically changes images every 4 seconds.

### HTML (`index.html`)

- Contains the main structure of the website, including a sidebar, navigation bar, and various sections for displaying products.
- Uses Font Awesome for icons.

### CSS (`style.css`)

- Provides styling for the layout, including flexbox for the product grid and media queries for responsiveness.
- Styles for the sidebar, navigation bar, slideshow, and product cards are included.

### JavaScript (`script.js`)

- Handles DOM manipulation and event listeners for interactive elements.
- Manages the slideshow functionality.
- Fetches product data from a fake store API and populates the product sections dynamically.
- Provides cart functionalities, including adding/removing items and updating the cart count and total price.
