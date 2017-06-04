import React from "react";
import {Route, IndexRedirect} from "react-router";
import DocsContainer from "./DocsContainer";
import IntroContact from "./intro/IntroContact"
import IntroOverview from "./intro/IntroOverview"
import IntroChangelog from "./intro/IntroChangelog"
import DevEnv from "./dev/DevEnv"
import DevAuth from "./dev/DevAuth"
import DevRespFormat from "./dev/DevResponseFormat"
import DevErrors from "./dev/DevErrors"
import DevEntitlements from "./dev/DevEntitlements"
import DomainOverview from "./domain/DomainOverview"
import DomainEventGroup from "./domain/DomainEventGroup"
import DomainEvent from "./domain/DomainEvent"
import DomainParticipant from "./domain/DomainParticipant"
import DomainBetOffer from "./domain/DomainBetOffer"
import DomainOutcome from "./domain/DomainOutcome"
import RefEventGroup from "./ref/RefEventGroup"
import RefEvent from "./ref/RefEvent"
import RefParticipant from "./ref/RefParticipant"
import RefBetOffer from "./ref/RefBetOffer"
import RefOutcome from "./ref/RefOutcome"


import docs from "./paths";


export default  (
    <Route path={docs.Index.toString()} component={DocsContainer}>
        <IndexRedirect to={docs.Intro.Overview.toString()}/>
        <Route path={docs.Intro.Index.toString()}>
            <IndexRedirect to={docs.Intro.Overview.toString()}/>
            <Route path={docs.Intro.Overview.toString()} component={IntroOverview}/>
            <Route path={docs.Intro.Contact.toString()} component={IntroContact}/>
            <Route path={docs.Intro.ChangeLog.toString()} component={IntroChangelog}/>
        </Route>
        <Route path={docs.Dev.Index.toString()}>
            <IndexRedirect to={docs.Dev.Env.toString()}/>
            <Route path={docs.Dev.Env.toString()} component={DevEnv}/>
            <Route path={docs.Dev.Auth.toString()} component={DevAuth}/>
            <Route path={docs.Dev.ResponseFormat.toString()} component={DevRespFormat}/>
            <Route path={docs.Dev.Errors.toString()} component={DevErrors}/>
            <Route path={docs.Dev.Entitlements.toString()} component={DevEntitlements}/>
        </Route>
        <Route path={docs.Domain.Index.toString()}>
            <IndexRedirect to={docs.Domain.Overview.toString()}/>
            <Route path={docs.Domain.Overview.toString()} component={DomainOverview}/>
            <Route path={docs.Domain.EventGroup.toString()} component={DomainEventGroup}/>
            <Route path={docs.Domain.Event.toString()} component={DomainEvent}/>
            <Route path={docs.Domain.Participant.toString()} component={DomainParticipant}/>
            <Route path={docs.Domain.BetOffer.toString()} component={DomainBetOffer}/>
            <Route path={docs.Domain.Outcome.toString()} component={DomainOutcome}/>
        </Route>
        <Route path={docs.Ref.Index.toString()}>
            <IndexRedirect to={docs.Ref.EventGroup.toString()}/>
            <Route path={docs.Ref.EventGroup.toString()} component={RefEventGroup}/>
            <Route path={docs.Ref.Event.toString()} component={RefEvent}/>
            <Route path={docs.Ref.Participant.toString()} component={RefParticipant}/>
            <Route path={docs.Ref.BetOffer.toString()} component={RefBetOffer}/>
            <Route path={docs.Ref.Outcome.toString()} component={RefOutcome}/>
        </Route>
    </Route>

)

