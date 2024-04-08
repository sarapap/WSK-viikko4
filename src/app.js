import express from 'express';

const app = express();
app.use(express.json());

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

export default app;