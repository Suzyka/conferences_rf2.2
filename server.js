import express from 'express';

const app = express();
const PORT = 3507;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Конференции.РФ');
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'О портале',
        description: 'Портал для бронирования помещений и проведения конференций.'
    });
});


app.get('/register', (req, res) => {
    res.render('register', { title: 'Регистрация на портале', user: null });
});

app.post('/register', (req, res) => {
    res.render('register', {
        title: 'Регистрация на портале',
        user: {
            login: req.body.login,
            fio: req.body.fio,
            phone: req.body.phone,
            email: req.body.email
        }
    });
});


app.get('/login', (req, res) => {
    res.render('login', { title: 'Авторизация' });
});

app.post('/login', (req, res) => {
    res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Мои заявки',
        user: { fio: 'Иванов Иван' },
        requests: [
            { room_name: 'Аудитория №1', status: 'Новая' },
            { room_name: 'Коворкинг', status: 'Завершено' }
        ]
    });
});

app.get('/contact', (req, res) => {
    res.send('Контакты');
});

app.get('/help', (req, res) => {
    res.send('Помощь');
});

app.get('/rooms', (req, res) => {
    res.send('Список помещений');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});