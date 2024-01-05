import express from 'express';
import morgan from 'morgan';
import path from 'path';
import nocache from 'nocache';

const app = express();

app.use(nocache());
app.use(morgan('tiny'));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/assets/js', express.static(path.resolve(__dirname, '../dist')));

const PORT = 3000;

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

export const startServer = () => app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
