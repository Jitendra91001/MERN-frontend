import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/app/store.ts'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
     <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>
  // </React.StrictMode>,
)
