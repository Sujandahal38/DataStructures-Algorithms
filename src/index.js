const express = require('express');
const volleyBall = require('volleyball');
const cors = require('cors');
const { json } = require('express');
require('dotenv').config();

const app = express();

const { palindrome  } = require('./utils/index')

const { PORT } = process.env;

app.use(volleyBall);
app.use(cors());
app.use(express.json());

app.post('/', async (req, res, next) => {
    try {
        if( req.body !== null ) {
            const { text, option } = req.body;
            console.log(text, option);
            switch (option) {
                case 'palindrome':
                    const check = palindrome(text);
                    if (check) {
                        res.status(200).json({
                            data: check,
                        });
                    }
                    break;

                default:
                    break;
            }
        }
    } catch (error) {

    }
})


app.listen(PORT, () => console.log(`Server started at : http://localhost:${PORT} 🎉`));