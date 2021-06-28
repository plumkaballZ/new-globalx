import './styles/bundle.css'
import './app.css';
import { useState, useEffect } from 'react';
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
import { OrderOverview } from './models/OrderOverview';
import { User } from './models/User';
import { userService } from './services/UserService';
import UserOrders from './components/Order/UserOrders/UserOrders';
import { pakkeLabelsService } from './services/PakkeLabelsService';
import { PickedServicePoint } from './models/PickedServicePoint';


const addOrderLine = (orderLine: LineItem, currentOrder: Order, setCurrentOrder: any) => {
  let newCurrentOrder = orderService.addOrderLine(orderLine, currentOrder);
  setCurrentOrder(newCurrentOrder);
};

export default function App() {
  const history = useHistory();
  let location = useLocation();

  let isCheckoutFlow = location.pathname.includes('checkout');

  let [user, setUser] = useState({} as User);

  let [currentOrder, setCurrentOrder] = useState({} as Order);
  let [allProducts, setAllProducts] = useState([] as Product[]);

  let [allAddresses, setAllAddresses] = useState([] as Address[]);
  let [selectedAddress, setSelectedAddress] = useState({} as Address);

  let [shippingOptions, setShippingOptions] = useState([] as ShippingOption[]);
  let [selectedShippingOption, setSelectedShippingOption] = useState({} as ShippingOption);

  let [orderOverview, setOrderOverview] = useState({} as OrderOverview);

  let [paymentIsDone, setPaymentIsDone] = useState(false);

  let [isLoading, setIsLoading] = useState(false);
  let [serverIsBusy, setServerIsBusy] = useState(false);


  let [userOrders, setUserOrders] = useState([] as Order[]);
  let userIsLoggedIn = (Object.keys(user).length !== 0);

  const awaitAndGetAddresses = async () => {
    setIsLoading(true);
    await addressService.fetchAllAddresses(setAllAddresses, setSelectedAddress, setShippingOptions);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!userIsLoggedIn) {
      userService.tryLoginForLocalUser(serverIsBusy, setServerIsBusy, setUser, setUserOrders);
    }

    productService.fetchAllProducts(setAllProducts);
    orderService.fetchCurrentOrder(setCurrentOrder);

    awaitAndGetAddresses();

  }, []);

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

  const setPaymentDoneAndRefresh = async (orderOverview: OrderOverview) => {

    let pickedServicePoint = new PickedServicePoint();
    pickedServicePoint.carrierCode = orderOverview.product_code;
    pickedServicePoint.address = orderOverview.address;
    pickedServicePoint.city = orderOverview.city;
    pickedServicePoint.zipcode = orderOverview.zipcode;
    pickedServicePoint.companyName = orderOverview.servicePointName;
    pickedServicePoint.productName = orderOverview.product_name;
    currentOrder.picked_ServicePoint = pickedServicePoint;

    await orderService.setPaymentDone(currentOrder, orderOverview.addressUid);
    pakkeLabelsService.createShipment(orderOverview);

    setPaymentIsDone(true);
    history.push("/checkout/ordercomplete");

    orderService.fetchCurrentOrder(setCurrentOrder);

    if (userIsLoggedIn) {
      if (user.lvl === 99) {
        await orderService.fetchAllOrders99(setUserOrders);
      }
      else {
        await orderService.fetchAllOrders(user.email, user.uid, setUserOrders);
      }
    }
  }


  const setOrderShippedAndGoToOrdersOverview = async (orderId: string, addressUid: string) => {

    await orderService.setOrderIsShipped(orderId, addressUid);
    history.push("/orders");

    orderService.fetchCurrentOrder(setCurrentOrder);

    if (userIsLoggedIn) {
      if (user.lvl === 99) {
        await orderService.fetchAllOrders99(setUserOrders);
      }
      else {
        await orderService.fetchAllOrders(user.email, user.uid, setUserOrders);
      }
    }
  }

  const loginAndReload = () => {
    userService.tryLoginForLocalUser(serverIsBusy, setServerIsBusy, setUser, setUserOrders);
    orderService.fetchCurrentOrder(setCurrentOrder);
    awaitAndGetAddresses();
    history.push('/');
  };

  const logOffAndReload = () => {
    setUser({} as User);
    orderService.fetchCurrentOrder(setCurrentOrder);
    awaitAndGetAddresses();
    history.push('/');
  };

  let currentOrderLines = currentOrder.line_items;
  let orderTotals = orderService.getCurrentOrderTotals(currentOrder, currentOrderLines);
  let subTotal: number = orderTotals.subTotal;
  let totalQuantity: number = orderTotals.totalQuantity;
  let hasProds = allProducts.length === 0 ? false : true;

  return (
    <div className="App">

      <div _nghost-c0="" ng-version="4.4.6">
        <div _ngcontent-c0="" className="contentz">
          <div _ngcontent-c0="" className="default">
            <section _ngcontent-c0="">

              {!isCheckoutFlow ? <Header totalQuantity={totalQuantity} userIsLoggedIn={userIsLoggedIn} logOffUserAndGoToFrontpage={logOffAndReload} /> : <CheckoutHeader />}
              <main _ngcontent-c0="" className="body container content">

                <ScrollToTop />
                <Switch>

                  <Route exact path="/" render={(props) =>
                    <Home
                      addOrderLineCallback={(orderLine: LineItem) => {
                        addOrderLine(orderLine, currentOrder, setCurrentOrder);
                      }}
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
                        addOrderLineCallback={(orderLine: LineItem) => {
                          addOrderLine(orderLine, currentOrder, setCurrentOrder);
                        }}
                        {...props} />} />
                  }

                  {
                    (!userIsLoggedIn) &&

                    <Route exact path="/auth/login" render={(props) =>
                      <Login
                        loginUserAndGoToFrontpage={loginAndReload}
                        {...props} />} />
                  }
                  {
                    (!userIsLoggedIn) &&
                    <Route exact path="/auth/signup" render={(props) =>
                      <SignUp
                        loginUserAndGoToFrontpage={loginAndReload}
                        {...props} />} />
                  }


                  {/* consider moving checkout to separate component */}

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

                  <Route path="/checkout/address" render={(props) =>
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
                      setCompleteOrderCallBack={(orderOverview: OrderOverview) => {
                        orderOverview.orderId = currentOrder.id;
                        setOrderOverview(orderOverview);
                      }}
                      addressIsLoading={isLoading}
                      loggedInUser={user}
                      {...props} />
                  } />

                  <Route exact path="/checkout/payment" render={(props) =>
                    <Payment
                      orderOverview={orderOverview}
                      setPaymentDoneCallback={setPaymentDoneAndRefresh}
                      setIsLoading={setIsLoading}
                      {...props} />
                  } />


                  <Route exact path="/checkout/ordercomplete" render={(props) =>
                    <OrderComplete
                      orderOverview={orderOverview}
                      paymentIsDone={paymentIsDone}
                      setPaymentDone={setPaymentIsDone}
                      {...props} />
                  } />

                  {userIsLoggedIn &&
                    <Route path="/orders" render={(props) =>
                      <UserOrders
                        userOrders={userOrders}
                        loggedInUser={user}
                        allProds={allProducts}
                        ordersAreLoding={serverIsBusy}
                        setOrderShipped={setOrderShippedAndGoToOrdersOverview}
                        {...props} />} />
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
