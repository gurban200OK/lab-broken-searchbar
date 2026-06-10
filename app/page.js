"use client";

import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import styles from "./page.module.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rick & Morty Characters</h1>
        <p className={styles.subtitle}>Browse the multiverse</p>
      </header>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <CharacterList characters={filteredCharacters} />
    </main>
  );
}
