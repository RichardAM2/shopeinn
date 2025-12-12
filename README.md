# Shopeinn - Deploy Rápido

1. Crie contas e obtenha chaves:
   - Cloudinary (CLOUDINARY_CLOUD, CLOUDINARY_KEY, CLOUDINARY_SECRET)
   - Mercado Pago (MERCADOPAGO_ACCESS_TOKEN)
   - DSers / AutoDS (opcional)
   - Vercel (deploy)

2. Atualize variáveis de ambiente no Vercel ou .env localmente.

3. Suba imagens em /images e rode:
   `node scripts/upload-cloudinary.js`

4. Atualize `client/src/data/products.js` com as URLs retornadas.

5. Faça commit e push para GitHub e conecte ao Vercel.

6. Configure o webhook no painel Mercado Pago para: `https://<seu-site>/api/webhook/mercadopago`
