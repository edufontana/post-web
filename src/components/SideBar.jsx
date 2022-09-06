import styles from './SideBar.module.css'

export function SideBar(){

  return(

    <aside className={styles.sidebar}>
      <img 
      className={styles.cover} 
      src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  />

      <div className={styles.profile}>
        <strong>Eduardo</strong>
        <span>Web Developer</span>
      </div>


      <footer>
        <a href="#">
          Editar seu Perfil
        </a>
      </footer>
    </aside>

  )
}