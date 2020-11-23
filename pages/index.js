import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import axios from 'axios'

const { API_URL } = process.env;

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
    >
      <section>
        <BlogList allBlogs={props.allBlogs} />
      </section>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
  const { data } = await axios.get(`${API_URL}/articles`);
  const posts = data;

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  }
}
