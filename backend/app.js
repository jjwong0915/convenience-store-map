const koa = require('koa');
const koaJson = require('koa-json');
const sqlite3 = require('sqlite3').verbose();
//
const db = new sqlite3.Database('./store.db');
//
const app = new koa();
app.use(koaJson());
app.use(async ctx => {
  const toilet = ctx.query.toilet == '1';
  const atm = ctx.query.atm == '1';
  const wifi = ctx.query.wifi == '1';
  const coffee = ctx.query.coffee == '1';
  const icecream = ctx.query.icecream == '1';
  //
  let command = 'SELECT StoreType, StoreName, LocationX, LocationY FROM store';
  if (toilet || atm || wifi || coffee || icecream) {
    command += " WHERE"
  }
  if (toilet) {
    command += ' Toilet = 1';
  }
  if (atm) {
    if (toilet) {
      command += ' AND ';
    }
    command += ' ATM = 1';
  }
  if (wifi) {
    if (toilet || atm) {
      command += ' AND ';
    }
    command += ' Wifi = 1';
  }
  if (coffee) {
    if (toilet || atm || wifi) {
      command += ' AND ';
    }
    command += ' Coffee = 1';
  }
  if (icecream) {
    if (toilet || atm || wifi || coffee) {
      command += ' AND ';
    }
    command += ' Icecream = 1';
  }
  command += " ORDER BY ABS(LocationX - " + ctx.query.log + ")";
  command += " * ABS(LocationX - " + ctx.query.log + ")"
  command += " + ABS(LocationY - " + ctx.query.lat + ")";
  command += " * ABS(LocationY - " + ctx.query.lat + ")"
  command += " LIMIT 5";
  //
  const result = await new Promise((resolve, reject) => {
    db.all(command, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  ctx.body = result;
});
//
app.listen(8000);