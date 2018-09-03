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
    var list = []
    for (var i = 0; i < cart.length; i++) {
      var item = `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (cart.length - 1 === i && i !== 0) {
        item = "and " + item
      }
      list.push(item)
    }
    return "In your cart, you have " + list.join(', ') + "."
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i,1)
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
