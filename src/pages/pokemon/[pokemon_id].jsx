import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/pages/Pokemon.module.css"

export const getStaticPaths = async () => {
    const maxPikomons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon/";
  
    const res = await fetch(`${api}?limit=${maxPikomons}`);
    const data = await res.json();

    // params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemon_id: (index + 1).toString() }
        }
    });

    return {paths, fallback: true}
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemon_id;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json();

    return {
        props: { pokemon: data }
    }
}

export default function Pokemon ({ pokemon }) {
    const router = useRouter();
    if( router.isFallback ) {
        return <h4>Carregando...</h4>
    }

    return (
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemon.name}</h1>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} width="200" height="200" alt={pokemon.name} />
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <h3>Tipo:</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}