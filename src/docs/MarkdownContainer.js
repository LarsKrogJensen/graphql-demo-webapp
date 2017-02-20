import React from "react"

export default function withMarkdown(WrappedComponent, source) {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                content: "Loading..."
            };
        }

        async loadMarkdown(url) {
            let resp = await fetch(url);
            let text = await resp.text();

            this.setState({content: text});
        };

        componentDidMount() {
            this.loadMarkdown(source).catch(err => {
                console.log(err)
            })
        }

        render() {
            return <WrappedComponent content={this.state.content} {...this.props} />;
        }
    };
}