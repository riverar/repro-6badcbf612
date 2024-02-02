// import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { FluentProvider, createLightTheme } from '@fluentui/react-components';
import '@fontsource/fira-sans';
import App from './app';

const coreTheme = {
    fontFamilyBase: 'Fira Sans',
};

const lightTheme = {
    ...createLightTheme,
    ...coreTheme,
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <StrictMode>
    <FluentProvider theme={lightTheme}>
        <App />
    </FluentProvider>
    // </StrictMode>
);
