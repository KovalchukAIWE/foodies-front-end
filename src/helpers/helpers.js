export const setMessage = (tabId, setter) => {
  switch (tabId) {
    case "followingActiveTab":
      setter(
        "Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you."
      );
      break;
    case "favoritesActiveTab":
      setter(
        "Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
      );
      break;
    case "followersActiveTab":
      setter(
        "There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."
      );
      break;
    default:
      setter(
        "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
      );
  }
};

export const setNumberOfRecipesUserCard = () => {
  if (window.innerWidth < 768) return 0;
  if (window.innerWidth >= 768 && window.innerWidth < 1440) return 3;
  if (window.innerWidth > 1440) return 4;
};

export const createShortTitle = (text) => {
  if (!text) return;
  let newText;
  if (window.innerWidth < 768) {
    newText = text.split(" ");
    if (newText.length > 2) {
      return newText.slice(0, 2).join(" ").concat("...");
    } else {
      return text;
    }
  } else if ((window.innerWidth > 768) & (window.innerWidth < 1440)) {
    newText = text.split(" ");
    if (newText.length > 4) {
      return newText.slice(0, 4).join(" ").concat("...");
    } else {
      return text;
    }
  } else {
    newText = text.split(" ");
    if (newText.length > 6) {
      return newText.slice(0, 6).join(" ").concat("...");
    } else {
      return text;
    }
  }
};

export const createShortDescription = (text) => {
  if (!text) return;
  let newText;
  if (window.innerWidth < 768) {
    newText = text.split(" ");
    if (newText.length > 5) {
      return newText.slice(0, 5).join(" ").concat("...");
    } else {
      return text;
    }
  } else if ((window.innerWidth > 768) & (window.innerWidth < 1440)) {
    newText = text.split(" ");
    if (newText.length > 20) {
      return newText.slice(0, 20).join(" ").concat("...");
    } else {
      return text;
    }
  } else {
    newText = text.split(" ");
    if (newText.length > 28) {
      return newText.slice(0, 28).join(" ").concat("...");
    } else {
      return text;
    }
  }
};
