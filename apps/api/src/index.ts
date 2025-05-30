import express from 'express';
import { User, Product } from '@my-monorepo/types';
import { formatUserName, generateRandomId } from '@my-monorepo/utils';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Halo dari Monorepo API!');
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user: User = {
    id: userId,
    name: `Pengguna ${userId}`,
    email: `pengguna${userId}@example.com`,
  };
  res.json({
    message: 'Pengguna ditemukan',
    user: user,
    formattedName: formatUserName(user),
  });
});

app.get('/products', (req, res) => {
  const products: Product[] = [
    { id: generateRandomId(), name: 'Laptop Gaming', price: 1500 },
    { id: generateRandomId(), name: 'Keyboard Mekanik', price: 100 },
    { id: generateRandomId(), name: 'Mouse Nirkabel', price: 50 },
  ];
  res.json({ products });
});

app.listen(port, () => {
  console.log(`API berjalan di http://localhost:${port}`);
});
