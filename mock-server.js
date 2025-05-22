/* eslint-disable @typescript-eslint/no-require-imports */
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

const MOCKED_SECRET = 'vWjXnKLQk5X2EjKQREWcr+mbhWFL+Hxe0+LrO4T+Joo=';

app.db = router.db;

app.use(jsonServer.bodyParser);

app.post('/login', (req, res) => {
  const { num_account, access } = req.body;

  const bankAccount = router.db
    .get('bankaccount')
    .find({ num_account, access })
    .value();

  if (bankAccount) {
    const token = jwt.sign({ sub: bankAccount.id }, MOCKED_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ access_token: token });
  } else {
    res.status(401).json({ message: 'Not authorized' });
  }
});

app.get('/bankaccount/:id', (req, res) => {
  const bankAccount = router.db
    .get('bankaccount')
    .find({ id: Number(req.params.id) })
    .value();

  if (!bankAccount) {
    return res.status(404).json({ message: 'Bank account not found' });
  }

  res.status(200).json(bankAccount);
});

// Rota para pegar dados do usuário
app.get('/user/:id', (req, res) => {
  const user = router.db
    .get('user')
    .find({ id: Number(req.params.id) })
    .value();

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});

app.use(router);

app.listen(3000, () => {
  console.log('🚀 Mock API rodando em http://localhost:3000');
});
