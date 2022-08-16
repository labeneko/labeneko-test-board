import Head from 'next/head'
import { firestore } from '../../lib/firebase'
import { doc, getDoc } from "firebase/firestore"
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const { query } = useRouter()
  const { id } = query;
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, [id]);
  return (
    <div className={styles.container}>
      <Head>
        <title>らべねこのひとこと日記帳</title>
        <meta name="description" content="らべねこのひとこと日記帳です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
