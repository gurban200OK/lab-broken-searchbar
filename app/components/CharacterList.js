import CharacterCard from "./CharacterCard";
import styles from "./CharacterList.module.css";

export default function CharacterList({ characters }) {
  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
