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


import paths from "./paths";


export default  (
    <Route path={paths.Index.toString()} component={DocsContainer}>
        <IndexRedirect to={paths.Intro.Index.toString()}/>
        <Route path={paths.Intro.Index.toString()}>
            <IndexRedirect to={paths.Intro.Overview.toString()}/>
            <Route path={paths.Intro.Overview.toString()} component={IntroOverview}/>
            <Route path={paths.Intro.Contact.toString()} component={IntroContact}/>
            <Route path={paths.Intro.ChangeLog.toString()} component={IntroChangelog}/>
        </Route>
        <Route path={paths.Dev.Index.toString()}>
            <IndexRedirect to={paths.Dev.Env.toString()}/>
            <Route path={paths.Dev.Env.toString()} component={DevEnv}/>
            <Route path={paths.Dev.Auth.toString()} component={DevAuth}/>
            <Route path={paths.Dev.ResponseFormat.toString()} component={DevRespFormat}/>
            <Route path={paths.Dev.Errors.toString()} component={DevErrors}/>
            <Route path={paths.Dev.Entitlements.toString()} component={DevEntitlements}/>
        </Route>
        <Route path={paths.Domain.Index.toString()}>
            <IndexRedirect to={paths.Domain.Overview.toString()}/>
            <Route path={paths.Domain.Overview.toString()} component={DomainOverview}/>
            <Route path={paths.Domain.EventGroup.toString()} component={DomainEventGroup}/>
            <Route path={paths.Domain.Event.toString()} component={DomainEvent}/>
            <Route path={paths.Domain.Participant.toString()} component={DomainParticipant}/>
            <Route path={paths.Domain.BetOffer.toString()} component={DomainBetOffer}/>
            <Route path={paths.Domain.Outcome.toString()} component={DomainOutcome}/>
        </Route>
        <Route path={paths.Ref.Index.toString()}>
            <IndexRedirect to={paths.Ref.EventGroup.toString()}/>
            <Route path={paths.Ref.EventGroup.toString()} component={RefEventGroup}/>
            <Route path={paths.Ref.Event.toString()} component={RefEvent}/>
            <Route path={paths.Ref.Participant.toString()} component={RefParticipant}/>
            <Route path={paths.Ref.BetOffer.toString()} component={RefBetOffer}/>
            <Route path={paths.Ref.Outcome.toString()} component={RefOutcome}/>
        </Route>
    </Route>

)

