import React from "react";
import {AppModel} from "../model/AppModel";

export default class SearchView extends React.Component
{
    render() {
        return (
                <div>Saerch</div>
        )
    }
}

SearchView.propTypes = {
    appModel: React.PropTypes.instanceOf(AppModel).isRequired
};