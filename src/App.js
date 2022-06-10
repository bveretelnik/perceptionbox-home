import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getCharacters } from "./api";
import { setupAxios } from "./api/axios";
import { Character } from "./components/Character/Character";
import { CharactersCardList } from "./components/CharactersCardList/CharactersCardList";
import { FavoriteList } from "./components/FavoriteList/FavoriteList";
import { Login } from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { getBase64 } from "./helper";
import useLocalStorage from "./hook/useLocalStorage";

function App() {
  const [characters, setCharacters] = useLocalStorage("characters", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useLocalStorage("user", null);
  const [selectedFile, setSelectedFile] = useLocalStorage("photo", null);

  useEffect(() => {
    setupAxios();
    if (!localStorage.getItem("characters")) {
      async function fetchData() {
        const fetchedCharacters = await getCharacters();
        setCharacters(
          fetchedCharacters.map((item) => {
            return { ...item, favorite: false };
          })
        );
      }
      fetchData();
    }
  }, []);

  const changeFavorite = (id) => {
    setCharacters(
      characters?.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );
  };

  const getFavorite = () => characters.filter((val) => val.favorite === true);

  const removeCharacterPhoto = (id) => {
    setCharacters(
      characters?.map((item) => {
        if (item.id === id) {
          return { ...item, image: "" };
        }
        return item;
      })
    );
  };

  const handleFileSelected = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setSelectedFile(base64);
    });
    console.debug(selectedFile);
  };

  const handleUploadPhoto = (id) => {
    if (selectedFile) {
      setCharacters(
        characters?.map((item) => {
          if (item.id === id) {
            return { ...item, image: selectedFile };
          }
          return item;
        })
      );
      setSelectedFile(null);
    }
  };
  return (
    <>
      <NavBar
        user={user}
        setUser={setUser}
        characters={characters}
        getFavorite={getFavorite}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute user={user}>
              <CharactersCardList
                characters={characters}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                changeFavorite={changeFavorite}
                removeCharacterPhoto={removeCharacterPhoto}
                handleFileSelected={handleFileSelected}
                handleUploadPhoto={handleUploadPhoto}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/character/:id"
          element={
            <PrivateRoute user={user}>
              <Character characters={characters} />
            </PrivateRoute>
          }
        />

        <Route
          path="/favorite"
          element={
            <PrivateRoute user={user}>
              <FavoriteList
                characters={characters}
                changeFavorite={changeFavorite}
                getFavorite={getFavorite}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            !user ? <Login setUser={setUser} /> : <Navigate replace to="/" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
