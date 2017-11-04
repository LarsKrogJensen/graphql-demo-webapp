// import React from "react";
import markdown from "../../assets/Changelog.md"
import withMarkdown from "../MarkdownContainer"
// import MarksyView from "../MarksyView";
import Markdown2 from "../../markdown2/Markdown2"


export default withMarkdown(Markdown2, markdown);