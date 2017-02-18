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
        </section>
        <section>
            <h2>Why is GitHub using GraphQL?</h2>
        </section>
        <section>
            <h2>What can I build with the GitHub GraphQL API?</h2>
        </section>
        <h2>What are some known issues?</h2>

    </article>
