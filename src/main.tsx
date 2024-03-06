import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoot, SplitCol, SplitLayout } from '@vkontakte/vkui';

import App from './App.tsx';
import '@vkontakte/vkui/dist/vkui.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot>
      <SplitLayout>
        <SplitCol autoSpaced>
          <App />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  </React.StrictMode>
);
