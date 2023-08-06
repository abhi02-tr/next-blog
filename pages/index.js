import Head from "next/head";
import Link from "next/link";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  // console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Abhi And I am currently learning next.js.</p>
        <p>
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>

      {/* all post data */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* {console.log(props.allPostsData)} */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}