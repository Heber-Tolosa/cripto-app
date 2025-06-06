import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  fetchCrypto: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],

    fetchCrypto: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },
    fetchData: async (pair) => {
      await fetchCurrentCryptoPrice(pair);
    },
  }))
);
