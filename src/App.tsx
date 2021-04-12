import './styles/bundle.css'
import './app.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import ScrollToTop from './functions/ScrollToTop';
import Header from './components/Static/Header/Header';
import Footer from './components/Static/Footer/Footer';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Terms from './components/Terms/Terms';
import CookiePolicy from './components/CookiePolicy/CookiePolicy';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp';
import CheckoutBag from './components/Checkout/CheckoutBag/CheckoutBag';
import CheckoutHeader from './components/Checkout/CheckoutHeader/CheckoutHeader';
import Payment from './components/Checkout/Payment/Payment';
import OrderComplete from './components/Checkout/OrderComplete/OrderComplete';
import { orderService } from './services/OrderService';
import { Order } from './models/Order';
import { LineItem } from './models/LineItem';
import { productService } from './services/ProductService';
import { Product } from './models/Product';
import { Address } from './models/Address';
import { addressService } from './services/AddressService';
import { ShippingOption } from './models/ShippingOption';
import AddressTsx from './components/Checkout/Address/Address';

export default function App() {
  const history = useHistory();
  let location = useLocation();
  let isCheckoutFlow = location.pathname.includes('checkout');

  let [currentOrder, setCurrentOrder] = useState({} as Order);
  let [allProducts, setAllProducts] = useState([] as Product[]);
  let [allAddresses, setAllAddresses] = useState([] as Address[]);
  let [selectedAddress, setSelectedAddress] = useState({} as Address);

  let [shippingOptions, setShippingOptions] = useState([] as ShippingOption[]);

  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const awaitAndGetAddresses = async () => {
      setIsLoading(true);
      await addressService.fetchAllAddresses(setAllAddresses, setSelectedAddress, setShippingOptions);
      setIsLoading(false);
    };

    awaitAndGetAddresses();

  }, []);

  useEffect(() => {
    productService.fetchAllProducts(setAllProducts);
  }, []);

  useEffect(() => {
    orderService.fetchCurrentOrder(setCurrentOrder);
  }, []);

  const addOrderLine = (orderLine: LineItem) => {
    let newCurrentOrder = orderService.addOrderLine(orderLine, currentOrder);
    setCurrentOrder(newCurrentOrder);
  };

  const removeOrderLine = (orderLine: LineItem) => {
    let newCurrentOrder = orderService.removeOrderLine(orderLine, currentOrder);
    setCurrentOrder(newCurrentOrder);
  };

  const createNewAddress = async (address: Address) => {
    setIsLoading(true);

    await addressService.upsertAddress(
      address,
      setSelectedAddress,
      allAddresses,
      setAllAddresses,
      setShippingOptions);

    setIsLoading(false);
  };

  const deleteAddress = async (address: Address) => {
    await addressService.deleteAddress(address, allAddresses, setAllAddresses);
  }

  useEffect(() => {
    orderService.updateCurrentOrder(currentOrder, setCurrentOrder);
  }, [currentOrder]);

  const selectAdressAndFetchShippingOptions = async (address: Address) => {
    setIsLoading(true);
    await addressService.fetchAllShippingOptions(address, setShippingOptions);
    setSelectedAddress(address);
    setIsLoading(false);
  }

  let currentOrderLines = currentOrder.line_items;
  let numberOfOrderLines = ((Object.keys(currentOrder).length === 0) ? 0 : currentOrderLines.length);

  if (numberOfOrderLines > 0) {

    let sum: number = currentOrderLines.map(a => a.quantity).reduce(function (a, b) {
      return a + b;
    });

    numberOfOrderLines = sum;
  }

  let hasAddresses = allAddresses.length === 0 ? false : true;
  let hasProds = allProducts.length === 0 ? false : true;

  return (
    <div className="App">
      <div _nghost-c0="" ng-version="4.4.6">
        <div _ngcontent-c0="" className="contentz">
          <div _ngcontent-c0="" className="default">
            <section _ngcontent-c0="">
              {!isCheckoutFlow ? <Header numberOfOrderLines={numberOfOrderLines} /> : <CheckoutHeader />}
              <main _ngcontent-c0="" className="body container content">
                <ScrollToTop />
                <Switch>

                  <Route exact path="/" render={(props) =>
                    <Home
                      addOrderLineCallback={addOrderLine}
                      allProducts={allProducts}
                      goToIndex={(index: number) => {
                        history.push(`/productdetail/${index}`);
                      }}
                      {...props} />} />

                  <Route exact path='/info' component={Info} />
                  <Route exact path='/terms' component={Terms} />
                  <Route exact path='/cookiepolicy' component={CookiePolicy} />

                  {
                    (hasProds) &&
                    <Route exact path="/productdetail/:index" render={(props) =>
                      <ProductDetail
                        allProducts={allProducts}
                        addOrderLineCallback={addOrderLine}
                        {...props} />} />
                  }


                  <Route exact path='/auth/login' component={Login} />
                  <Route exact path='/auth/signup' component={SignUp} />

                  <Route exact path="/checkout/bag" render={(props) =>
                    <CheckoutBag OrderLines={currentOrderLines}
                      numberOfOrderLines={numberOfOrderLines}
                      removeOrderLineCallBack={removeOrderLine}
                      allProducts={allProducts}
                      hasAddresses={hasAddresses}
                      {...props} />
                  }
                  />

                  <Route exact path="/checkout/address" render={(props) =>
                    <AddressTsx
                      allAddresses={allAddresses}
                      selectedAddress={selectedAddress}
                      shippingOptions={shippingOptions}
                      deleteAddress={deleteAddress}
                      createAddressCallBack={createNewAddress}
                      addressIsLoading={isLoading}
                      selectAddressCallBack={selectAdressAndFetchShippingOptions}
                      OrderLines={currentOrderLines}
                      {...props} />
                  } />


                  <Route exact path='/checkout/payment' component={Payment} />
                  <Route exact path='/checkout/ordercomplete' component={OrderComplete} />

                  {/* admin section */}

                  {/* <Route exact path="/admin/products" render={(props) =>
                    <AdminProducts
                      allProducts={allProducts}
                      goToIndex={(index: number) => {
                        history.push(`/admin/product/editable/${index}`);
                      }}
                      addProductCallBack={(newProd: Product) => {
                        console.log('addProductCallBack');
                        allProducts.push(newProd);
                        console.log(allProducts);
                        setAllProducts([...allProducts]);
                      }}
                      {...props} />
                  } />

                  {
                    (hasProds) &&
                    <Route exact path="/admin/product/editable/:index" render={(props) =>
                      <EditableProduct
                        upsertProduct={(prod: Product) => {
                          let itemIndex = allProducts.findIndex(item => item.id == prod.id);
                          allProducts[itemIndex] = prod;
                          history.push(`/admin/products`);
                        }}
                        allProducts={allProducts}
                        {...props} />
                    } />
                  } */}

                  {/* admin section */}

                  <Route render={function () { return <p>Not found</p> }} />
                </Switch>
              </main>
              <Footer />
            </section>
          </div>
        </div>
        <div _ngcontent-c0="" className="cookie-disclaimer" style={{ display: 'none' }}>
          <div _ngcontent-c0="" className="cookie_container">
            <p _ngcontent-c0="">
              This website is using cookies to keep track of your settings, for more info please read or
          <a _ngcontent-c0="" className="pp">Privacy Policy</a>
            </p>
            <button _ngcontent-c0="" className="btn btn-success accept-cookie" type="button">Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}
