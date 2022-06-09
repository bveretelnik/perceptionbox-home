import { Container, Grid } from "@mui/material";
import CharactersCard from "../CharacterCard/CharactersCard";
import styles from "./FavoriteList.module.scss";

export const FavoriteList = ({ characters, changeFavorite }) => {
  const getFavoriteList = () => {
    const favoriteList = characters.filter((val) => val.favorite === true);

    return favoriteList.length > 0 ? (
      favoriteList.map((character) => (
        <Grid item xs={8} md={4} key={character.id}>
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
    );
  };

  return (
    <Container maxWidth="xl" style={{ paddingTop: 40 }}>
      <Grid container spacing={2}>
        {getFavoriteList()}
      </Grid>
    </Container>
  );
};
