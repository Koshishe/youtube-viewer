import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit';
import { initialState } from '../state/spec';
import ytDataReducer from '../state/reducers';


type ProvidersRenderOptions = {
    store?: Store;
};

type CustomRenderOptions = {
    providers?: ProvidersRenderOptions;
};

const wrapperProvider = (options: ProvidersRenderOptions = {}) => ({ children }: { children: ReactElement }) => {
    const store = options.store ?? configureStore({ reducer: ytDataReducer, preloadedState: initialState });
    return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options: CustomRenderOptions & Omit<RenderOptions, 'wrapper'> = {}) => {
    const { providers, ...others } = options;
    render(ui, { wrapper: wrapperProvider(providers), ...others });
};
export { customRender as render };
