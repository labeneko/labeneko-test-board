import Head from 'next/head'
import { firestore } from '../lib/firebase'
import { collection, getDocs } from "firebase/firestore"
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const articles = [];
      const querySnapshot = await getDocs(collection( firestore, 'articles'));
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
      });
      setArticles(articles)
    }
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>らべねこのひとこと日記帳</title>
        <meta name="description" content="らべねこのひとこと日記帳です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
        らべねこのひとこと日記帳へようこそ！
        </h1>

        <div className={styles.grid}>
          {articles.map((article)=> {
            return (
              <a key={article.id} href={`/articles/${article.id}`} className={styles.card}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </a>
            )
          })}
        </div>
      </main>
    </div>
  )
}
