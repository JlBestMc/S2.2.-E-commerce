// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const product = products.find(p => p.id === id);
    if (!product){
        return;
    }

    const itemInCart = cart.find(item => item.id === id);

    if (itemInCart){
        itemInCart.quantity += 1;
    } else {
    cart.push({...product, quantity: 1});
    }
    
    
    printCart();
    CartCount()
    }

// Exercise 5 y Exercise 3
// Fill the shopping cart modal manipulating the shopping cart dom
// Calculate total price of the cart using the "cartList" array
function printCart() {
  const cartList = document.getElementById("cart_list");
  const totalPrice = document.getElementById("total_price");

  cartList.innerHTML = "";
  total = 0;

  applyPromotionsCart();

  cart.forEach(product => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    nameCell.classList.add("w-100")

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price.toFixed(2) + "$";

    const quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity + " ";
    quantityCell.classList.add("d-flex");

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.classList.add("btn", "btn-sm", "btn-danger", "ms-1");
    minusBtn.onclick = () => removeFromCart(product.id);
    
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.classList.add("btn", "btn-sm", "btn-success", "ms-1");
    plusBtn.onclick = () => buy(product.id);


    quantityCell.appendChild(minusBtn);
    quantityCell.appendChild(plusBtn);

    const totalCell = document.createElement("td");
    const subtotal = product.subtotalWithDiscount !== undefined
      ? product.subtotalWithDiscount
      : product.price * product.quantity;

    totalCell.textContent = `${subtotal.toFixed(2)} $`;

    total += subtotal;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);

    cartList.appendChild(row);
  });

  totalPrice.textContent = `$${total.toFixed(2)}`;
}

function CartCount() {
    const countElement = document.getElementById("count_product");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElement.textContent = totalItems;
}
       
// Exercise 2
function cleanCart() {
    cart = [];
    total = 0;
    let totalPrice = document.getElementById("total_price");
    totalPrice.textContent = total.toFixed(2);
    applyPromotionsCart();
    printCart();
    CartCount();

}

// Exercise 4
function applyPromotionsCart() {
    cart.forEach(product => {
        if (product.offer && product.quantity >= product.offer.number) {
            const discount = product.price * (product.offer.percent / 100);
            const discountedPrice = product.price - discount;
            product.subtotalWithDiscount = discountedPrice * product.quantity;
        } else {
            delete product.subtotalWithDiscount;
        }
    });
}

// Exercise 7
function removeFromCart(id) {
  const index = cart.findIndex(product => product.id === id);

  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1); // elimina el producto si la cantidad es 1
    }

    applyPromotionsCart(); 
    printCart();           
    CartCount();           
  }
}

function open_modal() {
    printCart();
}
