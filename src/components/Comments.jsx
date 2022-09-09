import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css'

export function Comments(){

  return(
    <div className={styles.comments}>
      <img src="https://github.com/edufontana.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo f</strong>
              <time title="7 de set ás 13:34" dateTime="2022-09-07">Cerca de 1h atrás</time>
            </div>


            <button title='deletar comentário'>
              <Trash size={20}/>
            </button>
          </header> 
          <p>Muito bom</p>
        </div>
      </div>

      <footer>
        <button>
          <ThumbsUp size={20}/>
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  );
}