import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResposeSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResposeSchema
);

export const PairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string(),
});
