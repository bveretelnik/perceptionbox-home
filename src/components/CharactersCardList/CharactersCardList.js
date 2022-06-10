import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CharactersCard from "../CharacterCard/CharactersCard";
import Search from "../Search/Search";
import styles from "./CharactersCardList.module.scss";

export const CharactersCardList = ({
  characters,
  setSearchTerm,
  searchTerm,
  changeFavorite,
  removeCharacterPhoto,
  handleFileSelected,
  handleUploadPhoto,
}) => {
  const getFilterCharacters = () => {
    return characters.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
  };
  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {getFilterCharacters().length > 0 ? (
            getFilterCharacters().map((character) => (
              <Grid item xs={12} md={4} key={character.id}>
                <CharactersCard
                  character={character}
                  changeFavorite={changeFavorite}
                  removeCharacterPhoto={removeCharacterPhoto}
                  handleFileSelected={handleFileSelected}
                  handleUploadPhoto={handleUploadPhoto}
                />
              </Grid>
            ))
          ) : (
            <div className={styles.textContainer}>
              <h1 className={styles.textContainer__text}>
                Not found Character
              </h1>
            </div>
          )}
        </Grid>
      </Container>
    </>
  );
};
