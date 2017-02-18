import React from "react";
import {Route, IndexRedirect} from "react-router";
import DocsContainer from "./DocsContainer";
import IntroContact from "./intro/IntroContact"
import IntroChangelog from "./intro/IntroChangelog"
import DevEnv from "./dev/DevEnv"
import DevAuth from "./dev/DevAuth"
import DevRespFormat from "./dev/DevResponseFormat"
import DevErrors from "./dev/DevErrors"
import DevEntitlements from "./dev/DevEntitlements"


export default  (
    <Route path="/docs" component={DocsContainer}>
        <IndexRedirect to="/docs/intro/contact"/>
        <Route path="/docs/intro">
            <IndexRedirect to="/docs/intro/contact"/>
            <Route path="/docs/intro/contact" component={IntroContact}/>
            <Route path="/docs/intro/changelog" component={IntroChangelog}/>
        </Route>
        <Route path="/docs/dev">
            <IndexRedirect to="/docs/dev/environment"/>
            <Route path="/docs/dev/environment" component={DevEnv}/>
            <Route path="/docs/dev/authentication" component={DevAuth}/>
            <Route path="/docs/dev/response-format" component={DevRespFormat}/>
            <Route path="/docs/dev/errors" component={DevErrors}/>
            <Route path="/docs/dev/entitlements" component={DevEntitlements}/>
        </Route>
    </Route>

)