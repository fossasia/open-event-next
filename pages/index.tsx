import styles from '../styles/Home.module.css'
import Layout from '../src/components/layout'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main className={styles.main}></main>
    </Layout>
  )
}
