import { useState, useEffect } from "react";
import styles from "./TabsList.module.css";
import ListItems from "../ListItems/ListItems";

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
    <div>
      <ul className={styles.profileTabsList}>
        <li className={styles.profileTabsItem}>
          <button
            className={styles.tabBtn}
            id="recipiesActiveTab"
            onClick={handleTabClick("recipiesActiveTab")}
          >
            My recipes
          </button>
        </li>
        <li className={styles.profileTabsItem}>
          <button
            className={styles.tabBtn}
            id="favoritesActiveTab"
            onClick={handleTabClick("favoritesActiveTab")}
          >
            My favorites
          </button>
        </li>
        <li className={styles.profileTabsItem}>
          <button
            className={styles.tabBtn}
            id="followersActiveTab"
            onClick={handleTabClick("followersActiveTab")}
          >
            Followers
          </button>
        </li>
        <li className={styles.profileTabsItem}>
          <button
            className={styles.tabBtn}
            id="followingActiveTab"
            onClick={handleTabClick("followingActiveTab")}
          >
            Following
          </button>
        </li>
      </ul>
      <ListItems activeTab={activeTab} />
    </div>
  );
};

export default TabsList;
