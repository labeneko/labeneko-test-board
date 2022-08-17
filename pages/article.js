import Head from 'next/head'
import { firestore } from '../lib/firebase'
import { doc, getDoc } from "firebase/firestore"
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const { query } = useRouter()
  const { id } = query;
  const [article, setArticle] = useState([]);
  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }
      const docRef = doc(firestore, "articles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle({
          id: docSnap.id,
          title: docSnap.data().title,
          description: docSnap.data().description
        });
      }
    })();
  }, [id]);
  if (!article) {
    return <p>読込み中…</p>
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{article.title} | らべねこのひとこと日記帳</title>
        <meta name="description" content="{article.description}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </main>
    </div>
  )
}
