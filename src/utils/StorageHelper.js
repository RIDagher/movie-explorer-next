// //
// export const getFromLocalStorage = (key, fallback = []) => {
//   try {
//     const stored = localStorage.getItem(key);
//     console.log("stored:", stored);
//     return stored ? JSON.parse(stored) : fallback;
//   } catch (err) {
//     console.error(`Failed to get ${key} from local storage`, err);
//     return fallback;
//   }
// };

// export const saveToLocalStorage = (key, value) => {
//   try {
//     const current = getFromLocalStorage(key);
//     const alreadyExists = current.some((item) => item.id === value.id);

//     if (!alreadyExists) {
//       const updated = [...current, value];
//       localStorage.setItem(key, JSON.stringify(updated));
//       return updated;
//     } else {
//       return current;
//     }
//   } catch (err) {
//     console.error("Failed to save to local storage", err);
//     return false;
//   }
// };

// export const removeFromLocalStorage = (key, idToRemove) => {
//   try {
//     const current = getFromLocalStorage(key);
//     const updated = current.some((item) => item.id !== idToRemove);
//     localStorage.setItem(key, JSON.stringify(updated));
//     return updated;
//   } catch (err) {
//     console.error(`Faile to remove${key} from local storage`, err);
//   }
// };
