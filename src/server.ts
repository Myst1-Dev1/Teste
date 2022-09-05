import { app } from "./app";

const port = process.env.PORT || 3001;

app.use('/', require('./routes/usersRoute'));
app.use('/', require('./routes/loginRoute'));
app.use('/', require('./routes/packageRoute'));
app.use('/', require('./routes/roomsRoute'));
app.use('/', require('./routes/flightRoute'));
app.use('/', require('./routes/userPackagesRoute'));
app.listen(port, () => {console.log(`API running on port ${port}`);})