import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
// app.use('/api/images', imagesRouter)

// app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static('../public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
