// getting all the products-section elements
const homeMenu = document.querySelector(".home-menu"),
  featuredProductsSection = document.querySelector(".featured-products"),
  featuredProductsSectionContainer = document.querySelector(
    ".featured-products-section"
  ),
  elcSectionContainer = document.querySelector(".electronics"),
  elcSection = document.querySelector(".electronic-products"),
  jewelleryContainer = document.querySelector(".jewelery"),
  jewellerySection = document.querySelector(".jewelery-products");

//
const categories = document.getElementById("catg");
const headerCarsl = document.getElementById("car-1");
const contact_Part = document.getElementById("cu");

// getting all the cart-section elements
const cartMenu = document.querySelector(".cart-menu"),
  cartSection = document.querySelector("#Cart"),
  cartHeading = document.querySelector(".cartH"),
  cartItemLength = document.querySelector(".itemLength");

//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

//

//getting all the div elements of nav-list
const navlistDivs = document.querySelectorAll(".navbar>ul>div");

const prevBtn1 = document.querySelector(".products-section> .buttons >.prev1");
const nextBtn1 = document.querySelector(".products-section> .buttons >.next1");
//electronics container
const prevBtn2 = document.querySelector(".electronics> .buttons >.prev1");
const nextBtn2 = document.querySelector(".electronics> .buttons >.next1");

//jewellery container
const prevBtn3 = document.querySelector(".jewelery> .buttons >.prev1");
const nextBtn3 = document.querySelector(".jewelery> .buttons >.next1");

//getting each div and setting margin-left to 5rem on each div on hover
navlistDivs.forEach((div) => {
  const anchorTag = div.querySelector("a");

  div.onmouseover = function () {
    anchorTag.style.marginLeft = "3rem";
  };

  div.onmouseout = function () {
    anchorTag.style.marginLeft = "1rem";
  };
});

//getting the sidebar, menubar and cross-icon
const sideBar = document.querySelector(".sidebar"),
  menuBar = document.querySelector(".menu-bar"),
  crossIcon = document.querySelector(".cross-icon");
//adding the hide class to sidebar if not hidden
menuBar.onclick = function () {
  sideBar.classList.toggle("hide");
};

crossIcon.onclick = function () {
  sideBar.classList.toggle("hide");
};

let index = 0,
  eIndex = 0,
  jIndex = 0;
function setIndex(n) {
  index = n;
}
function setEIndex(n) {
  eIndex = n;
}
function setJIndex(n) {
  jIndex = n;
}

nextBtn1.onclick = function () {
  setIndex(index === 17 ? 0 : index + 1);
  featuredProductsSection.style.transform = `translate3d(-${
    index * 360
  }px,0px,0px)`;
};

prevBtn1.onclick = function () {
  setIndex(index === 0 ? 17 : index - 1);
  featuredProductsSection.style.transform = `translate3d(-${
    index * 360
  }px,0px,0px)`;
};

nextBtn2.onclick = function () {
  setEIndex(eIndex === 4 ? 0 : eIndex + 1);
  elcSection.style.transform = `translate3d(-${eIndex * 280}px,0px,0px)`;
};

prevBtn2.onclick = function () {
  setEIndex(eIndex === 0 ? 4 : eIndex - 1);
  elcSection.style.transform = `translate3d(-${eIndex * 280}px,0px,0px)`;
};

nextBtn3.onclick = function () {
  setJIndex(jIndex === 1 ? 0 : jIndex + 1);
  jewellerySection.style.transform = `translate3d(-${jIndex * 280}px,0px,0px)`;
};

prevBtn3.onclick = function () {
  setJIndex(jIndex === 0 ? 1 : jIndex - 1);
  jewellerySection.style.transform = `translate3d(-${jIndex * 280}px,0px,0px)`;
};

//function to show the products-section but hide the cart
function hideCartAndShowProducts() {
  cartHeading.style.display = "none";
  cartSection.style.display = "none";
  featuredProductsSectionContainer.style.display = "";
  jewelleryContainer.style.display = "";
  elcSectionContainer.style.display = "";
  contact_Part.style.display = "flex";
  categories.style.display = "";
  headerCarsl.style.display = "flex";
  document.querySelector(".dots-container").style.display = "";
}

//function to hide the products-section but show the cart
function showCartAndHideProducts() {
  featuredProductsSectionContainer.style.display = "none";
  jewelleryContainer.style.display = "none";
  elcSectionContainer.style.display = "none";
  contact_Part.style.display = "none";
  categories.style.display = "none";
  headerCarsl.style.display = "none";
  document.querySelector(".dots-container").style.display = "none";
  cartHeading.style.display = "flex";
  cartSection.style.display = "flex";
}

//onloading of the page , only show the products section
document.body.onload = hideCartAndShowProducts;

//onclicking the cart menu show the cart but hide the products-section
cartMenu.onclick = showCartAndHideProducts;

//onclicking the home menu show the products-section but hide the cart
homeMenu.onclick = hideCartAndShowProducts;

document.getElementById("home-page").onclick = hideCartAndShowProducts;

// incrementing the item count per product on button click
function increaseCount(id) {
  let itemCountVal = Number(
    document.querySelector(`.noOfItem-${id}`).innerText
  );
  document.querySelector(`.noOfItem-${id}`).innerText = itemCountVal + 1;
}

//Decrementing item count per product (not less than 1) on button click
function decreaseCount(id) {
  let itemCountVal = Number(
    document.querySelector(`.noOfItem-${id}`).innerText
  );
  if (itemCountVal > 1) {
    document.querySelector(`.noOfItem-${id}`).innerText = itemCountVal - 1;
  }
}

// fetch all the products
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const jewelleryProducts = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
const electronicProducts = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//initiate the cartproducts set
let initialCartState = new Set();

// function of add-to-cart , remove-from-cart customisably as per actionType
const cartSlice = (actionType, payload, cardItem) => {
  // add-to-cart function
  const addToCart = () => {
    // add the requested product to cart if only the product doesn't already exist in cart
    if (![...initialCartState].includes(payload)) {
      initialCartState.add(payload);
      //update and show the number of items in cart
      cartItemLength.innerText = `(${initialCartState.size})`;
      //copy the passed div-element to add to the cartSection
      let cartCard = cardItem.cloneNode(true);
      //hide the addToCart button in cart and add onclick function to removeFromCart button
      let twoButtons1 = cartCard.querySelector(".buttons1");
      twoButtons1.querySelector(".addToCart").style.display = "none";
      const removeFromCartButton = document.createElement("button");
      removeFromCartButton.innerHTML = `Remove From Cart <br> (-)`;
      removeFromCartButton.classList.add("removeFromCart");
      twoButtons1.appendChild(removeFromCartButton);
      twoButtons1.querySelector(".removeFromCart").onclick = function () {
        cartSlice("REMOVE FROM CART", payload, cartCard);
      };

      //onclick event for increaseCount and decreaseCount buttons for current item
      let twoButtons2 = cartCard.querySelector(".buttons2");

      twoButtons2.querySelector(".increaseCount").onclick = function () {
        let itemCountVal = Number(
          cartCard.querySelector(`.noOfItem-${payload.id}`).innerText
        );
        cartCard.querySelector(`.noOfItem-${payload.id}`).innerText =
          itemCountVal + 1;
      };
      twoButtons2.querySelector(".decreaseCount").onclick = function () {
        let itemCountVal = Number(
          cartCard.querySelector(`.noOfItem-${payload.id}`).innerText
        );
        cartCard.querySelector(`.noOfItem-${payload.id}`).innerText =
          itemCountVal - 1;
      };

      // add the div-element in cartSection
      cartSection.appendChild(cartCard);
      //reset the item count value to 1 after adding the item to cart
      cardItem.querySelector(`.noOfItem-${payload.id}`).innerText = 1;
    } else {
      alert("Already added to cart!");
    }
  };

  // remove from cart function
  const removeFromCart = () => {
    // check if the item exists in the cart or not
    if ([...initialCartState].includes(payload)) {
      // remove the product from cart
      initialCartState.delete(payload);
      //update and show the number of items in cart
      cartItemLength.innerText = `(${initialCartState.size})`;
      // select the cartCard to remove from cart
      let cartCard = cartSection.querySelector(`#product-${payload.id}`);
      cartSection.removeChild(cartCard);
    } else {
      alert("This product dosen't even exist in cart!");
      return;
    }
  };
  //customised as per the actionType
  if (actionType === "ADD TO CART") {
    addToCart();
  } else {
    removeFromCart();
  }
};

function populateCards(products, productsSection) {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    // assigning id to each product to keep track of it
    card.id = `product-${product.id}`;
    card.innerHTML = `<div class="image"><img src=${
      product.image
    } class="itemImg" alt="${product.title}"></div>
   <p class="title">${product.title.slice(0, 30)}...</p>
   <p class="price">
   <span class="Oldprice">₹${Math.round(
     product.price + product.price * 0.7
   )}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="itemPrice">₹${
      product.price
    }</span></p>
   <div class="buttons1">
      <div class="buttons2">
   <button class="increaseCount" onclick="increaseCount(${
     product.id
   })" title="Increase the no. of item(s)" >+</button>
   <span><span class="noOfItem noOfItem-${product.id}">1</span></span>
   <button class="decreaseCount" onclick="decreaseCount(${
     product.id
   })" title="Decrease the no. of item(s)" >-</button>
   </div>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <button class="addToCart" >Add to Cart (+) </button> &nbsp;
   </div>
   `;

    if (product.price > 100) {
      const tooltip = document.createElement("span");
      tooltip.innerText = `NEW`;
      tooltip.classList.add("new-tooltip");
      card.appendChild(tooltip);
    }
    // add to cart action on button click
    const addToCartBtn = card.querySelector(".addToCart");
    addToCartBtn.onclick = function () {
      cartSlice("ADD TO CART", product, card);
    };

    //adding the div to the produts section

    productsSection.appendChild(card);
  });
}
// show all the products in products-section
const showAllProducts = async () => {
  //getting all products
  const featuredProducts = await fetchProducts();
  populateCards(featuredProducts, featuredProductsSection);

  const electronics = await electronicProducts();
  populateCards(electronics, elcSection);

  const jewelleries = await jewelleryProducts();
  populateCards(jewelleries, jewellerySection);
};

//show all products in products-section
showAllProducts();
