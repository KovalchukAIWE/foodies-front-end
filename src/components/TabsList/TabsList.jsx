import { useState, useEffect } from "react";
import styles from "./TabsList.module.css";

const TabsList = () => {
  const [activeTab, setActiveTab] = useState("recipiesActiveTab");

  const handleTabClick = (tabId) => (event) => {
    event.preventDefault();
    setActiveTab(tabId);
  };

  useEffect(() => {
    const activeElement = document.getElementById(activeTab);
    if (activeElement) {
      activeElement.classList.add(styles.activeLink);
    }
    return () => {
      if (activeElement) {
        activeElement.classList.remove(styles.activeLink);
      }
    };
  }, [activeTab]);

  return (
    <ul className={styles.profileLinksList}>
      <li className={styles.profileLinksItem}>
        <a
          href=""
          className={styles.profileItemLink}
          id="recipiesActiveTab"
          onClick={handleTabClick("recipiesActiveTab")}
        >
          My recipes
        </a>
      </li>
      <li className={styles.profileLinksItem}>
        <a
          href=""
          className={styles.profileItemLink}
          id="favoritesActiveTab"
          onClick={handleTabClick("favoritesActiveTab")}
        >
          My favorites
        </a>
      </li>
      <li className={styles.profileLinksItem}>
        <a
          href=""
          className={styles.profileItemLink}
          id="followersActiveTab"
          onClick={handleTabClick("followersActiveTab")}
        >
          Followers
        </a>
      </li>
      <li className={styles.profileLinksItem}>
        <a
          href=""
          className={styles.profileItemLink}
          id="followingActiveTab"
          onClick={handleTabClick("followingActiveTab")}
        >
          Following
        </a>
      </li>
    </ul>
  );
};

export default TabsList;
