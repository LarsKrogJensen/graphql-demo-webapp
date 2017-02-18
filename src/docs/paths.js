const root = "/docs";
const intro = "/intro";
const dev = "/dev";
const domain = "/domain";
const ref = "/ref";


export default {
    Index: {root},
    Intro: {
        Index: `${root}${intro}`,
        Overview: `${root}${intro}/overview`,
        Contact: `${root}${intro}/contact`,
        ChangeLog: `${root}${intro}/changelog`,
    },
    Dev: {
        Index: `${root}${dev}`,
        Env: `${root}${dev}/environment`,
        Auth: `${root}${dev}/authentication`,
        ResponseFormat: `${root}${dev}/response-format`,
        Errors: `${root}${dev}/errors`,
        Entitlements: `${root}${dev}/entitlements`,
    },
    Domain: {
        Index: `${root}${domain}`,
        Overview: `${root}${domain}/overview`,
        EventGroup: `${root}${domain}/eventgroup`,
        Event: `${root}${domain}/event`,
        Participant: `${root}${domain}/participant`,
        BetOffer: `${root}${domain}/betoffer`,
        Outcome: `${root}${domain}/outcome`,
    },
    Ref: {
        Index: `${root}${ref}`,
        EventGroup: `${root}${ref}/eventgroup`,
        Event: `${root}${ref}/event`,
        Participant: `${root}${ref}/participant`,
        BetOffer: `${root}${ref}/betoffer`,
        Outcome: `${root}${ref}/outcome`,
    }
}