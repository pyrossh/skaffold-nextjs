import { sleep } from '@minbao/promise-utils';
import Todo from './components/Todo';
import styles from './page.module.css'

const getData = async () => {
  const res = await fetch('http://app:3000/api/todos');
  const json = await res.json();
  await sleep(2000);
  return json;
}

async function Home() {
  const todos = await getData();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 26!</a>
          asdas
        </h1>
        {todos.map((item) => (
          <Todo key={item.id} text={item.text} />
        ))}
      </main>
    </div>
  )
}

export default Home;