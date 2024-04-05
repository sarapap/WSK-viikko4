import express from 'express';

const app = express();

app.get('/api/v1/cat', (req, res) => {
    const cat = {
        cat_id: 1,
        name: 'Whiskers',
        birthdate: '2022-01-01',
        weight: 5,
        owner: 'John Doe',
        image: 'https://loremflickr.com/320/240/cat'
    };
    res.json(cat);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

