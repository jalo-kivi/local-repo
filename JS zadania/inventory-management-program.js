let inventory = [];

function findProductIndex(productName) {
  const nameOf = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === nameOf) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(name + " quantity updated");
    }
  else {
    inventory.push({ name: name, quantity: product.quantity });
    console.log(name + " added to inventory");
  }
}

function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
        console.log(name + " not found");
        return;
    }

  const product = inventory[index];

  if (product.quantity >= quantity) {
    product.quantity -= quantity;

    if (product.quantity === 0) {
      inventory.splice(index, 1);
    }
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
  }
  else {
    console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
  }
}

