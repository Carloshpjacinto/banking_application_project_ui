/* eslint-disable @typescript-eslint/no-require-imports */
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

const MOCKED_SECRET = 'vWjXnKLQk5X2EjKQREWcr+mbhWFL+Hxe0+LrO4T+Joo=';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

app.db = router.db;

app.use(jsonServer.bodyParser);

app.post('/auth/login', (req, res) => {
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

app.get(`${apiUrl}/bankaccount/:id`, (req, res) => {
  const bankAccount = router.db
    .get('bankaccount')
    .find({ id: Number(req.params.id) })
    .value();

  if (!bankAccount) {
    return res.status(404).json({ message: 'Bank account not found' });
  }

  res.status(200).json(bankAccount);
});

app.get(`${apiUrl}/user/:id`, (req, res) => {
  const user = router.db
    .get('user')
    .find({ id: Number(req.params.id) })
    .value();

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});

app.post(`/auth/register`, (req, res) => {
  const body = req.body;
  const user = app.db.get('user').value();

  const id = user.length ? Math.max(...user.map((user) => user.id)) : 1;

  const newUser = {
    id: id + 1,
    ...body,
  };

  app.db.get('user').push(newUser).write();

  const tokenPayload = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    CPF: newUser.CPF,
  };

  const access_token = jwt.sign(tokenPayload, MOCKED_SECRET, {
    expiresIn: '1h',
  });

  return res.status(201).json({ user: newUser, access_token });
});

app.post('/auth/register/access', (req, res) => {
  const body = req.body;
  const bankaccount = app.db.get('bankaccount').value();

  const id = bankaccount.length
    ? Math.max(...bankaccount.map((bankaccount) => bankaccount.id))
    : 1;

  const newBankAccount = {
    id: id + 1,
    ...body,
    access: body.access,
    agency: '0001',
    num_account: `8080-${id}`,
    account_balance: '500',
    credit: '500',
    special_check: '250',
    debit_account: '0',
    type_bank_account: 'CURRENT_ACCOUNT',
    user_id: id,
    user: {
      id: id,
      name: `Fulano de Tal - ${id}`,
      email: 'fulano@teste.com',
      CPF: '123.456.789-00',
    },
  };

  app.db.get('bankaccount').push(newBankAccount).write();


    const token = jwt.sign({ sub: newBankAccount.id }, MOCKED_SECRET, {
      expiresIn: '1h',
    })

  return res.status(201).json({ user: newBankAccount, access_token: token });
});

app.use(router);

app.listen(3000, () => {
  console.log('🚀 Mock API rodando em http://localhost:3000');
});
