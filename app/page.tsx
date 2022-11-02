import Image from 'next/image'
import Todo from './components/Todo';
import sql from '../utils/pool';
import styles from './page.module.css'

export default Home;

async function Home() {
  const values = await sql`select * from todos`;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 26!</a>
          asdas
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>
        {values.map((item) => (
          <div className={styles.card} key={item.id}>
            <p>{item.text}</p>
            <p>{item.created_at.toISOString()}</p>
            <Todo text={item.text} />
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
