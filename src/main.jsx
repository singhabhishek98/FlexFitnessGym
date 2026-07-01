import React from 'react'
import ReactDOM from 'react-dom/client'
import { App as AntApp, ConfigProvider } from 'antd'
import App from './App.jsx'
import 'antd/dist/reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff6b00',
          colorLink: '#ff6b00',
          borderRadius: 16,
          fontFamily: 'Poppins, sans-serif',
        },
        components: {
          Button: { controlHeight: 48 },
          Card: { bodyPadding: 24 },
          Input: {
            activeBorderColor: '#ff6b00',
            hoverBorderColor: '#ff8533',
          },
        },
      }}
    >
      <AntApp>
        <App />
      </AntApp>
    </ConfigProvider>
  </React.StrictMode>,
)
