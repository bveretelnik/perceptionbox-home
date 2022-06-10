import { Container, Grid } from "@mui/material";
import FavoriteCharacter from "../FavoriteCharacter/FavoriteCharacter";

export const FavoriteList = ({ getFavorite, changeFavorite }) => {
  return (
    <Container maxWidth="xl" style={{ paddingTop: 40 }}>
      <Grid container spacing={2}>
        <FavoriteCharacter
          getFavorite={getFavorite}
          changeFavorite={changeFavorite}
        />
      </Grid>
    </Container>
  );
};
