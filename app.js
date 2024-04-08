import express from 'express';

const app = express();
app.use('/public', express.static('public'));

app.get('/api/v1/cat', (req, res) => {
    const cat = {
        cat_id: 1,
        name: 'Whiskers',
        birthdate: '14-01-2002',
        weight: 5,
        owner: 'Sara',
        image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNjM2LWltYWdlLTAxLXJtNTAzXzMtbDBqOXFrNnEucG5n.png'
    };
    res.json(cat);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

