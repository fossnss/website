import React from 'react';
import { graphql } from 'gatsby';
// import Link from 'gatsby-link';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';
import '../styles/partials/layouts/_blogTemplate.scss';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div className='mainbody'>
            <SEO title={`${frontmatter.title} - Blog - `} />
            <Header />
            {/* <Link to='/blog'>Go Back</Link> */}
            <div className='site-content'>
                <h1>{frontmatter.title}</h1>
                <h2 className='desc'>{frontmatter.desc}</h2>
                <h3 className='auth-date'>
                    Posted by {frontmatter.author} on {frontmatter.date}
                </h3>
                <div
                    class='post-content'
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <Footer />
        </div>
    );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                date
                desc
            }
        }
    }
`;