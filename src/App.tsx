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
import Loader from './components/Loader/Loader';
import { CompleteOrder } from './models/CompleteOrder';

export default function App() {
  const history = useHistory();
  let location = useLocation();
  let isCheckoutFlow = location.pathname.includes('checkout');

  let [currentOrder, setCurrentOrder] = useState({} as Order);
  let [allProducts, setAllProducts] = useState([] as Product[]);

  let [allAddresses, setAllAddresses] = useState([] as Address[]);
  let [selectedAddress, setSelectedAddress] = useState({} as Address);

  let [shippingOptions, setShippingOptions] = useState([] as ShippingOption[]);
  let [selectedShippingOption, setSelectedShippingOption] = useState({} as ShippingOption);

  let [completeOrder, setCompleteOrder] = useState({} as CompleteOrder);

  let [paymentIscompleted, setPaymentIsCompleted] = useState(false);

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

    setSelectedShippingOption({} as ShippingOption);
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
    setSelectedShippingOption({} as ShippingOption);
    setIsLoading(false);
  }


  const setPaymentIsCompletedAndGoToOrderCompleted = () => {
    setPaymentIsCompleted(true);
    history.push("/ordercomplete");
  }

  let subTotal: number = 0;
  let totalQuantity: number = 0;

  let currentOrderLines = currentOrder.line_items;
  let numberOfOrderLines = ((Object.keys(currentOrder).length === 0) ? 0 : currentOrderLines.length);

  if (numberOfOrderLines > 0) {
    currentOrderLines.forEach(x => subTotal += x.price * x.quantity);
    currentOrderLines.forEach(x => totalQuantity += x.quantity);
  }

  let hasProds = allProducts.length === 0 ? false : true;



  return (
    <div className="App">

      <div _nghost-c0="" ng-version="4.4.6">
        <div _ngcontent-c0="" className="contentz">
          <div _ngcontent-c0="" className="default">

            <section _ngcontent-c0="">

              <Loader isLoading={isLoading} />

              {!isCheckoutFlow ? <Header totalQuantity={totalQuantity} /> : <CheckoutHeader />}
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
                    <CheckoutBag
                      OrderLines={currentOrderLines}
                      totalQuantity={totalQuantity}
                      subTotal={subTotal}
                      removeOrderLineCallBack={removeOrderLine}
                      allProducts={allProducts}
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
                      selectAddressCallBack={selectAdressAndFetchShippingOptions}
                      totalQuantity={totalQuantity}
                      subTotal={subTotal}
                      setSelectedShippingOption={setSelectedShippingOption}
                      selectedShippingOption={selectedShippingOption}
                      setCompleteOrderCallBack={(completeOrder: CompleteOrder) => {
                        completeOrder.orderId = currentOrder.id;
                        setCompleteOrder(completeOrder);
                      }}
                      {...props} />
                  } />


                  <Route exact path="/checkout/payment" render={(props) =>
                    <Payment
                      completedOrder={completeOrder}
                      setPaymentIsCompletedCallback={setPaymentIsCompletedAndGoToOrderCompleted}
                      {...props} />
                  } />

                  {paymentIscompleted &&
                    <Route exact path="/ordercomplete" render={(props) =>
                      <OrderComplete
                        completedOrder={completeOrder}
                        {...props} />
                    } />
                  }

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
