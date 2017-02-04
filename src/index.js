import React from "react";
import ReactDOM from "react-dom";
import router from "router";
import store from "store/index";
import {Provider} from "react-redux";
import "styles/theme.less";

// Provider is a top-level component that wraps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render(
        <Provider store={store}>{router}</Provider>,
        document.getElementById('root')
);
