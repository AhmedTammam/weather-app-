import { atom } from "recoil";

export const searchFormAtom = atom<{
  citiesNames: string[];
  hasError: boolean;
}>({
  key: "searchForm",
  default: {
    citiesNames: [],
    hasError: false,
  },
});
