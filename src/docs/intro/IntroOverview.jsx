import React from "react";
import { Anchor } from 'antd';
const { Link } = Anchor;

export default (props) =>
    <article>
        <h1>GitHub GraphQL API</h1>
        <Anchor affix={false}>
            <Link href="#a1" title="What is GraphQL?"/>
            <Link href="#a2" title="Why is GitHub using GraphQL?"/>
            <Link href="#a3" title="What can I build with the GitHub GraphQL API?"/>
            <Link href="#a4" title="What are some known issues?"/>

        </Anchor>
        <section>
            <h2>What is GraphQL?</h2>
            <p>GraphQL is a new way to think about building and querying APIs. Rather than construct several REST requests to fetch data that you're interested in, you can often make a single call to fetch the information you need.
            GraphQL is, above all, a querying language, and the format of the query you send matches the data you receive. For example, given the following query:</p>
        </section>
        <section>
            <h2>Why is GitHub using GraphQL?</h2>
        </section>
        <section>
            <h2>What can I build with the GitHub GraphQL API?</h2>
        </section>
        <h2>What are some known issues?</h2>

    </article>
