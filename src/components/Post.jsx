import style from './Post.module.css'

export function Post(){

  return(
    <article className={style.post}>
      <header>
        <div className={style.author}> 
          <img className={style.avatar} src="https://github.com/edufontana.png"  />
          <div className={style.authorInfo}>
            <strong>Eduardo Fontana</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="7 de set ás 13:34" dateTime="2022-09-07">Publicado há 1h</time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href='#'>jane.design/doctorcare</a></p>

        <p> 
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat </a>{' '}
        </p>
      </div>
      
    </article>
  )
}