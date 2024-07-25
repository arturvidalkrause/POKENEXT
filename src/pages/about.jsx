import Image from "next/image";
import styles from "@/styles/pages/About.module.css";

export default function About () {
    return (
        <section className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Bem-vindo ao PokeNext, seu guia definitivo para explorar o mundo dos Pokémon de uma maneira totalmente nova. Desenvolvido com paixão e utilizando a poderosa tecnologia do Next.js, o PokeNext combina a nostalgia dos jogos clássicos de Pokémon com a modernidade e eficiência da web atual.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </section>
    )
}