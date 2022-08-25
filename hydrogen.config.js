import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STORE_DOMAIN || 'blaireau-bleu.myshopify.com',
    storefrontToken:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
      '3161db926ed7cd10ad4e0ecc5ca2b2ff',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
