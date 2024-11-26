"use client"
import {Provider} from "react-redux";
import {store} from "@/redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";

let persistor = persistStore(store)


 const Reduxprovider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            {children} 
            </PersistGate>

    

        </Provider>
    )
}
export default Reduxprovider;
