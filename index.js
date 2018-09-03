var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var list = ["In your cart"]
    for (var i = 0; i < cart.length; i++) {
      {name, price} = cart[i]
      item = `you have ${name} at $${price}}`
      if (cart.length - 1 === i && i !== 0) {
        item = "and " + item
      }
      list.push(item)
    }
    return list.join(', ')
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
