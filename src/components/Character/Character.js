import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Character.module.scss";
import { useNavigate } from "react-router-dom";

export const Character = ({ characters }) => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setCharacter(characters.filter((item) => item.id.toString() === id)[0]);
  }, [id]);

  return (
    <div className={styles.character}>
      <div className={styles.character__container}>
        <h1>{character?.name}</h1>
        <h2>{character?.species}</h2>
        <div className={styles.character__info}>
          <h4>{character?.gender}</h4>
          <h4>{character?.location?.name}</h4>
        </div>

        <div className={styles.character__episodes}>
          <h3>Episodes</h3>
          <ul>
            {character?.episode &&
              character?.episode
                .slice(0, 10)
                .map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className={styles.character__footer}>
          <p>
            Status: <strong>{character?.status}</strong>
          </p>
          <p>
            Creater: <strong>{character?.created}</strong>
          </p>
        </div>
        <div className={styles.character__button}>
          <Button onClick={() => navigate("/")}>Back to main</Button>
        </div>
      </div>
    </div>
  );
};
