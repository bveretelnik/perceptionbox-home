import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./CharactersCard.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function CharactersCard({
  character,
  changeFavorite,
  removeCharacterPhoto,
  handleFileSelected,
  handleUploadPhoto,
}) {
  let navigate = useNavigate();
  const [hover, setHover] = useState(false);
  return (
    <Card sx={{ maxWidth: 400 }} style={{ marginBottom: 30 }}>
      {character.image ? (
        <div className={styles.photo}>
          {hover ? (
            <div
              className={styles.photo__label}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <IconButton>
                <DeleteIcon
                  onClick={() => removeCharacterPhoto(character.id)}
                />
              </IconButton>
            </div>
          ) : (
            <CardMedia
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={styles.photo__media}
              component="img"
              height="194"
              image={character.image}
              alt="Photo"
            />
          )}
        </div>
      ) : (
        <div>
          <Input type="file" onChange={(e) => handleFileSelected(e)} />
          <Button onClick={() => handleUploadPhoto(character.id)}>
            Upload new photo
          </Button>
        </div>
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.status}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ justifyContent: "space-between" }}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => changeFavorite(character.id)}
        >
          <FavoriteIcon color={character.favorite ? "error" : ""} />
        </IconButton>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/character/${character.id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </CardActions>
    </Card>
  );
}
