import { useState } from "react";
import styles from "./TabsList.module.css";
import ListItems from "../ListItems/ListItems";
import clsx from "clsx";

const TabsList = ({ isOwner }) => {
  const [activeTab, setActiveTab] = useState("recipiesActiveTab");
  const [updating, setUpdating] = useState(true);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setUpdating(true);
  };

  const handleUpdating = (bool) => {
    setUpdating(bool);
  };

  const handleActiveTab = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <ul className={styles.profileTabsList}>
        <li className={styles.profileTabsItem}>
          <button
            className={clsx(
              styles.tabBtn,
              activeTab === "recipiesActiveTab" && styles.activeTab
            )}
            id="recipiesActiveTab"
            onClick={() => handleTabClick("recipiesActiveTab")}
          >
            {isOwner ? "My recipes" : "Recipes"}
          </button>
        </li>
        {isOwner && (
          <li className={styles.profileTabsItem}>
            <button
              className={clsx(
                styles.tabBtn,
                activeTab === "favoritesActiveTab" && styles.activeTab
              )}
              id="favoritesActiveTab"
              onClick={() => handleTabClick("favoritesActiveTab")}
            >
              My favorites
            </button>
          </li>
        )}
        <li className={styles.profileTabsItem}>
          <button
            className={clsx(
              styles.tabBtn,
              activeTab === "followersActiveTab" && styles.activeTab
            )}
            id="followersActiveTab"
            onClick={() => handleTabClick("followersActiveTab")}
          >
            Followers
          </button>
        </li>
        {isOwner && (
          <li className={styles.profileTabsItem}>
            <button
              className={clsx(
                styles.tabBtn,
                activeTab === "followingActiveTab" && styles.activeTab
              )}
              id="followingActiveTab"
              onClick={() => handleTabClick("followingActiveTab")}
            >
              Following
            </button>
          </li>
        )}
      </ul>
      <div className={styles.itemsListContainer}>
        <ListItems
          activeTab={activeTab}
          updating={updating}
          onUpdating={handleUpdating}
          setterActiveTab={handleActiveTab}
          isOwner={isOwner}
        />
      </div>
    </>
  );
};

export default TabsList;
