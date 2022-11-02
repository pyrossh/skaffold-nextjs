"use client";

import { useRouter } from 'next/navigation';

async function update(refresh) {
  await fetch(`/api/hello`, {
    method: 'POST',
    body: JSON.stringify({}),
  });
  refresh();
}


export default function Todo({ text } ) {
  const router = useRouter();
  return (
    <li onClick={() => update(router.refresh)}>
      {text}
    </li>
  );
}
