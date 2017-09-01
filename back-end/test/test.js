import test from 'ava';
import superkoa from 'superkoa';

test.cb('first test', t => {
    superkoa('./app.js')
        .get("/")
        .expect(200, (err, res) => {
            t.ifError(err);
            t.is(res.text, 'Hello Koa 3!', 'res.text == Hello Koa 3!');
            t.end();
        });
});