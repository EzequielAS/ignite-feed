import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount(oldLikesNumber => oldLikesNumber + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src={"https://avatars.githubusercontent.com/u/37677439?v=4" }
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ezequiel Alves</strong>
                <time 
                    title='04 de Junho às 17:18h'
                    dateTime='2022-06-04 17:18:30'
                >
                        Cerca de 1h atrás
                </time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title='Deletar comentário'
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}