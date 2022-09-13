import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comments } from './Comments'
import style from './Post.module.css'

export function Post({author, puplishedAt}){
  const [comments, setComments] = useState([
    'Post muito bom!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(puplishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(puplishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(){
    event.preventDefault();
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)

  }

  return(
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime="2022-09-07">
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href='#'>jane.design/doctorcare</a></p>

        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>{' '}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={style.contentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        placeholder='deixe um comentario'
        name="comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map(comments=>
          <Comments content={comments}/>
        )}
      </div>

    </article>
  )
}
