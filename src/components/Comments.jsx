import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comments.module.css'

export function Comments({content, onDeleteComment}){


  function handleDeleteComment(){
    console.log('dele')

    onDeleteComment(content)
  }

  return(
    <div className={styles.comments}>
      <Avatar hasBorder={false} src="https://github.com/edufontana.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo f</strong>
              <time title="7 de set ás 13:34" dateTime="2022-09-07">Cerca de 1h atrás</time>
            </div>


            <button onClick={handleDeleteComment} title='deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>


      <footer>
        <button>
          <ThumbsUp size={20}/>
          <p>Aplaudir</p>
          <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  );
}
