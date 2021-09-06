import React, { Component } from "react";
import Client from "shopify-buy";

// creates context
const ShopContext = React.createContext();
// this is a default one from the shopify api as as example
const client = Client.buildClient({
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "graphql.myshopify.com",
});
// we want to set the state so this is whats coming back from the api

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  componentDidMount() {
    // this.createCheckout();

    //Check if localStorage has a checkout_id saved
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else {
      this.createCheckout();
    }
    //if there is no checkout_id in localStorage then we will create a new checkout

    //else fetch the checkout from shopify
  }
 // stores everything to local storage
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    await this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      // its coming in as an array, we are just going to add one item
      {
        variantId,
        quantity: parseInt(quantity, 10),
        // its an integer as a number
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      // grab our checkout ID update our checkout and state updated with added product
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    console.log(checkout);

    this.openCart();
  };
// fetch all products this is from the sdk api
  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
    // added to the array in our state
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    console.log(JSON.stringify(product));

    return product;
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          // accessing our value and context through ur child components
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

// these are the child components 
const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };
// allows to export for our child components

export default ShopProvider;
