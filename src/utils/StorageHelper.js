//
export const getFromStorage = (key, fallback = null) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (err) {
    console.error(`Failed to get ${key} from local storage`, err);
    return fallback;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    const current = getFromStorage(key);
    const alreadyExist = current.some((c) => c.key === value.key);

    if (!alreadyExist) {
      const updated = [...current, value];
      localStorage.setItem(key, JSON.stringify(updated));
      return true;
    }
  } catch (err) {
    console.error("Failed to save to local storage", err);
    return false;
  }
};
