import React from "react";
import styles from "./FavoriteCharacter.module.scss";
import CharactersCard from "../CharacterCard/CharactersCard";
import { Grid } from "@mui/material";

const FavoriteCharacter = ({ changeFavorite, getFavorite }) => {
  return (
    <>
      {getFavorite().length > 0 ? (
        getFavorite().map((character) => (
          <Grid item xs={12} md={4} key={character.id}>
            <CharactersCard
              character={character}
              changeFavorite={changeFavorite}
            />
          </Grid>
        ))
      ) : (
        <div className={styles.favorite}>
          <div className={styles.favorite__text}>
            <h2>Favorite List is empty </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoriteCharacter;
