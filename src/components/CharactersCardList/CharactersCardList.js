import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CharactersCard from "../CharacterCard/CharactersCard";
import Search from "../Search/Search";

export const CharactersCardList = ({
  characters,
  setSearchTerm,
  searchTerm,
  changeFavorite,
  removeCharacterPhoto,
  handleFileSelected,
  handleUploadPhoto,
}) => {
  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {characters
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((character) => (
              <Grid item xs={8} md={4} key={character.id}>
                <CharactersCard
                  character={character}
                  changeFavorite={changeFavorite}
                  removeCharacterPhoto={removeCharacterPhoto}
                  handleFileSelected={handleFileSelected}
                  handleUploadPhoto={handleUploadPhoto}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};
