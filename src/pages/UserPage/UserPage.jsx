import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "../../components/Container/Container.jsx";
import MainTitle from "../../components/MainTitle/MainTitle.jsx";
import PathInfo from "../../components/PathInfo/PathInfo.jsx";
import Subtitle from "../../components/Subtitle/Subtitle.jsx";
import UserCard from "../../components/UserCard/UserCard.jsx";
import { getUserDataByUserId } from "../../services/user.js";
import Loader from "../../components/Loader/Loader.jsx";

import css from "./UserPage.module.css";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await getUserDataByUserId(id);
        setUser(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <>
      <section className={css.sectionUser}>
        <Container>
          <PathInfo pageName="Profile" />
          <MainTitle text="Profile" />
          <Subtitle text="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us." />
          {user && <UserCard user={user} />}

          {/* Поміняти на компонент нотифікашки */}
          {error && <p>{error}</p>}
          {isLoading && <Loader />}
        </Container>
      </section>
    </>
  );
};

export default UserPage;
