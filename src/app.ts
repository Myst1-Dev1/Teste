import express from 'express';
import cors from 'cors';

import './database';

export const app = express();

app.use(express.json());
app.use(cors());