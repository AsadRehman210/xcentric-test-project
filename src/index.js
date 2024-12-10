import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TableProvider } from './store/context/TableContext';
import { BrowserRouter } from 'react-router-dom'; 
import { Bounce, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TableProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition= {Bounce}
        />
      </TableProvider>
    </BrowserRouter>
  </React.StrictMode>
);
