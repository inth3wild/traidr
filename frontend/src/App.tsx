import { useState, Dispatch, SetStateAction, FC } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/Cart/CartProvider.tsx';

// Landing Page Components
import Header from './components/LandingPage/Header';
import Hero from './components/LandingPage/Hero';
import WhyUseUs from './components/LandingPage/WhyUseUS';
import TrendingSales from './components/LandingPage/TrendingSales';
import Footer from './components/LandingPage/Footer';

// Authentication and Utility Components
import LogIn from './components/Login/LogInPage';
import SignUp from './components/SignUp/SignUpPage';
import AdminSignUp from './components/SignUp/AdminSignUp.tsx';
import AdminLogin from './components/Login/AdminLogIn.tsx';
import Reset from './components/ResetPassword/Reset';
import ReSend from './components/ResendOtp/Resend';
import UserProfile from './components/Userpofile/UserProfile';
import AdminProfile from './components/AdminProfile/Adminprofile.tsx';

// Product, Cart, and Wishlist Components
import Wishlist from './components/Cart/wishlist/WishlistPage';
import CartPage from './components/Cart/CartPage';
import Navbar from './components/Cart/Navbar';
import Product from './components/Cart/productInfo/ProductInfoPage';

// Shop components
import CreateShop from './components/CreateShop/index';
import Shop from './components/Shop/index';

// getAllProducts
import ProductPage from './components/ProductPage/ProductPage';
import CallbackPage from './components/Login/Callback';

//tenantDb
import TenantDb from './admin/TenantDb.tsx';
//productList
import ProductList from '../src/components/ProductList.tsx';
import ProductCategory from './components/ProductPage/ProductCategory.tsx';

//MyProducts
import MyProducts from '../src/components/MyProducts/MyProducts.tsx';

//MyShops
import MyShops from '../src/components/MyShops/MyShops.tsx';

//Orders
import OrdersPage from '../src/components/OrdersPage/OrdersPage.tsx';

// Define an interface for MainLayout props
interface MainLayoutProps {
  userProfile: {
    profileImage: string;
  };
}

// Define context type for Outlet
interface OutletContext {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}

// Wrapper component to pass setOpenCart to CartPage component
const CartWrapper: FC = () => {
  const { setOpenCart } = useOutletContext<OutletContext>();
  return <CartPage setOpenCart={setOpenCart} />;
};

// Layout component that includes Navbar and accepts userProfile as a prop
const MainLayout: FC<MainLayoutProps> = ({ userProfile }) => {
  const [setCartOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar userProfile={userProfile} />
      {/* Pass setCartOpen function to Outlet context */}
      <Outlet context={{ setOpenCart: setCartOpen }} />
    </>
  );
};

// Define userProfile object to pass to MainLayout
const userProfile = {
  profileImage: 'path/to/image.png',
};

// New NotFound component
const NotFound: FC = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

// Combine the landing page components into one main component
const MainPage: FC = () => (
  <>
    <Header />
    <Hero />
    <WhyUseUs />
    <TrendingSales />
    <Footer />
  </>
);

// const

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/callback',
    element: <CallbackPage />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin/signup',
    element: <AdminSignUp />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
  {
    path: '/otp',
    element: <ReSend />,
  },
  {
    path: 'product-page',
    element: <ProductPage />,
  },
  {
    path: '/TenantDb',
    element: <TenantDb />,
  },

  {
    path: '/', // Base path for the main layout with Navbar
    element: <MainLayout userProfile={userProfile} />, // Main layout with Navbar
    children: [
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'profile',
        element: <UserProfile />,
      },
      {
        path: 'admin/profile',
        element: <AdminProfile />,
      },
      {
        path: 'cart',
        element: <CartWrapper />,
      },
      {
        path: '/ProductList',
        element: <ProductList />,
      },
      {
        path: 'product/:productId',
        element: <Product />,
      },
      {
        path: '/products/:category',
        element: <ProductCategory />,
      },
      {
        path: 'create-shop',
        element: <CreateShop />,
      },
      {
        path: 'shop/:id',
        element: <Shop />,
      },
      {
        path: '/MyProductList/:id',
        element: <MyProducts />,
      },
      {
        path: '/MyShops',
        element: <MyShops />,
      },
      {
        path: '/orders/:userId',
        element: <OrdersPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App: FC = () => {
  return (
    <CartProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
