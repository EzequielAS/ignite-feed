import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './app.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/DeiveLab.png",
      name: "Deivisson Santana",
      role: "Backend Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2022-06-06 10:50:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/EzequielAS.png",
      name: "Ezequiel Alves",
      role: "Frontend Developer"
    },
    content: [
      {type: "paragraph", content: "Bom dia!"},
      {type: "paragraph", content: "Acabei de subir um projeto. É um projeto que fiz de um evento da Rocketseat 🚀"},
      {type: "link", content: "verce.com/makeyouown"},
    ],
    publishedAt: new Date("2022-06-03 20:00:00")
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
