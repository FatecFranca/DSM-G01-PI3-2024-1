import React from 'react'  
import banner from '../../assets/Background-Image.png'
import styles from './MainHome.module.css'
export function Conteudo () {
    return (    
        <div className={styles.conteudo}>
              <img className={styles.banner} src={banner}/>
              <div className={styles.texto}>
                <h2>Bem-vindo ao</h2>
                <p>Você sabe que música é uma indústria vasta e diversificada,  mas a conexão entre 
músicos muitas vezes é feita de forma informal e ineficaz.
Para resolver seus problemas utilize o BandFinder, uma plataforma que oferece uma solução escalável e 
acessível para conectar músicos de forma eficiente, permitindo que eles criem perfis detalhados, filtrem 
por critérios específicos e entrem em contato diretamente uns com os outros, facilitando a formação de
 bandas e colaborações musicais.</p>
              </div>
             
              <div className={styles.traco}></div>

            <fieldset>
                <div className={styles.container1}>
              <div className={styles.texto2}>
                <h2>Gabriela</h2>
                <p>Gabriela, 33 anos, é uma vocalista talentosa e muito experiente, ela é formada em música
                     e viveu isso desde a sua infância. Através do BandFinder ela conseguiu encontrar músicos
                      no mesmo nível que o seu para um projeto profissional focado em produção de músicas autorais,
                       um projeto a longo prazo.
Ela precisava de pessoas que possuíssem a mesma mentalidade e vontade para levar o projeto pra frente, conhecendo novas
 pessoas em sua localidade através do BandFinder, Gabriela conseguiu alcançar seu objetivo</p>
                </div>
                <img className={styles.banner2} src={banner}/>
              </div>
            </fieldset>
         
            <fieldset>
                <div className={styles.container2}>
              <div className={styles.texto3}>
                <h2>Arthur</h2>
                <p>Arthur, 25 anos, não vive de música, trabalha no comércio durante a semana, mas possui habilidades
                     musicais com sua guitarra e violão, toca todos os estilos musicais, de sertanejo ao rock.
Arthur pensa em fazer freelances em bandas de bar para completar sua renda nos finais de semana e através do BandFinder
 ele encontrou bandas/pessoas com esse objetivo,  preenchendo sua agenda do final de semana e completando o espaço de
  guitarrista em alguns projetos de bares.</p>
                </div>
                <img className={styles.banner2} src={banner}/>
              </div>
            </fieldset>
           
            <fieldset>
                <div className={styles.container3}>
              <div className={styles.texto4}>
                <h2>João Ferreira</h2>
                <p>João Ferreira é o proprietário de uma casa de shows localizada no centro da
                     cidade. Ele é apaixonado por música e está sempre em busca de novos talentos
                      para se apresentarem em seu estabelecimento. Através do BandFinder ele conseguiu
                       encontrar bandas locais de qualidade para preencher a programação de sua casa de shows,
                        oferecendo uma experiência musical diversificada e emocionante para seu público,
                         aumentando assim a reputação e o sucesso de seu estabelecimento.
                .</p>
                </div>
                <img className={styles.banner2} src={banner}/>
              </div>
            </fieldset>
            
        </div>          
    )
}
export default Conteudo;