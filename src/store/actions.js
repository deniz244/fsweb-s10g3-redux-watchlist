export const NEXT = "Sıradaki filme geç";
export const ADD_FAV = "Listeme film ekle";
export const REM_FAV = "Favorilerden çıkarma";
export const PREV = "prev";

export const removeFav = (id) => {
  return { type: REM_FAV, payload: id };
};
