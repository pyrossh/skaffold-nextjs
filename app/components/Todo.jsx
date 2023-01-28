"use client";
import styles from "../page.module.css";

import { useRouter } from 'next/navigation';

async function update(refresh) {
  await fetch(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify({
      id: "123",
      text: "123",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  });
  refresh();
}


export default function Todo({ text }) {
  const router = useRouter();
  return (
    <li className={styles.card}>
      <p>Todo: {text}</p>
      <button onClick={() => update(router.refresh)}>Create New</button>
    </li>
  );
}
