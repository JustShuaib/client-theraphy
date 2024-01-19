import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Words } from './components/exercise/words'
import { Onboarding } from './components/onboarding'
import './index.css'
import { Exercise } from './components/exercise'
import Sentences from './components/exercise/sentences/Sentences'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { dummyArray } from './utils/dummyArray'
// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Onboarding />
      },
      {
        path: '/exercise',
        element: <Exercise />,
        children: [
          {
            path: '/exercise/zinnen',
            element: <Sentences dummyArray={dummyArray}/>
          },
          {
            path: '/exercise/woorden',
            element: <Words dummyArray={dummyArray}/>
          }
        ]
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
