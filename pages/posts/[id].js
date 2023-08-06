import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyle from "../../styles/utils.module.css";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({ params }) {
    // console.log("id ->"+ params.id);
    const postData = await getPostData(params.id);
    // console.log("data -> "+postData);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyle.headingx1}>{postData.title}</h1>
                <div className={utilStyle.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
            </article>

        </Layout>
    );
}

