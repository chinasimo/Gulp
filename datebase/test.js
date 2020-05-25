var db = mongoose.connection;
db.on('error', (err) => {
    db.close();
    return console.error(err);
});

db.once('open', () => {
    console.log('mongodb was connected');
});