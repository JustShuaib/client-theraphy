import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Admin } from './views/admin'
import { Theme } from './views/admin/theme'
import { EditTheme } from './views/admin/editTheme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'admin',
    element: <Admin />,
    children: [
      {
        path: 'theme',
        element: <Theme />
      },
      {
        path: 'theme/edit',
        element: <EditTheme />
      }
    ]
  },
])
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>,
)
