import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About"
import Products from './views/Products';
import Cart from './views/Cart';
import Error from './views/Error';
import "./sass/styles.scss"
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ViewMore from './views/ViewMore';
import FooterCategories from './views/FooterCategories';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        // translation: EnglishTranslation,
      },
      ar: {
        // translation: ArabicTranslation,
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productId",
    element: <ViewMore />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/*",
    element: <Error />
  },
  ,
  {
    path: "/categories/:productCategory",
    element: <FooterCategories />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

