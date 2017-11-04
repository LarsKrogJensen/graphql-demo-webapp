import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import emoji from "markdown-it-emoji"
import deflist from "markdown-it-deflist"
import abbr from "markdown-it-abbr"
import container from "markdown-it-container"
import jsx from "markdown-it-jsx"
import * as React from "react";
import SuperComponent from "../../docs/components/super/SuperComponent";

const markdown = (() => {

    let md = markdownIt({
        highlight(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str, true).value;
                } catch (__) {/* */
                }
            }
            return (
                `${md.utils.escapeHtml(str)}`
            );
        },
    });

    md = md.use(emoji)
        .use(deflist)
        .use(abbr)
        .use(jsx)
        .use(container, 'warning', {

            // validate: function (params) {
            //     return params.trim().match(/^warning\s+(.*)$/);
            // },

            render: function (tokens, idx) {
                return React.createElement(SuperComponent)
            }
        });
    return (src) => {
        let render = md.render(src);
        return render;
    }
})();

export default markdown;
