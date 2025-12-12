// server/index.js
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
app.use(express.json());

const MP_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

app.post('/api/create-pix', async (req, res) => {
  const { amount, buyer } = req.body;
  try {
    const body = {
      transaction_amount: Number(amount),
      payment_method_id: 'pix',
      payer: {
        email: buyer.email || 'cliente@exemplo.com',
        first_name: buyer.name || 'Cliente'
      },
      external_reference: `order_${Date.now()}`
    };
    const r = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MP_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await r.json();
    return res.json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'MP create error' });
  }
});

// Webhook example — validar e consultar o status do pagamento
app.post('/api/webhook/mercadopago', async (req, res) => {
  console.log('MP webhook', req.body);
  // Aqui você deve validar a notificação e consultar /v1/payments/{id}
  res.status(200).send('ok');
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
