import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';

export default function Custom404() {
  return (
    <Layout>
      <Head>
	<title>404 - {siteTitle}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
    </Layout>
  );
}
