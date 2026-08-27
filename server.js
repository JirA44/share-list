import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { nanoid } from 'nanoid';
const db = new Database('share.db');
db.exec(`CREATE TABLE IF NOT EXISTS lists(id TEXT PRIMARY KEY, created INTEGER);
CREATE TABLE IF NOT EXISTS items(id TEXT PRIMARY KEY, list_id TEXT, text TEXT, done INTEGER DEFAULT 0, created INTEGER)`);
const app = express();
app.use(cors()); app.use(express.json()); app.use(express.static('public'));
app.post('/api/lists', (req,res)=>{
  const id=nanoid(8); db.prepare('INSERT INTO lists VALUES(?,?)').run(id, Date.now());
  res.json({id, url:`/l/${id}`});
});
app.get('/api/lists/:id', (req,res)=>{
  const items=db.prepare('SELECT * FROM items WHERE list_id=? ORDER BY created').all(req.params.id);
  res.json({id:req.params.id, items});
});
app.post('/api/lists/:id/items', (req,res)=>{
  const id=nanoid(8); db.prepare('INSERT INTO items VALUES(?,?,?,?,?)').run(id, req.params.id, req.body.text, 0, Date.now());
  res.json({id});
});
app.patch('/api/items/:id', (req,res)=>{
  db.prepare('UPDATE items SET done=? WHERE id=?').run(req.body.done?1:0, req.params.id);
  res.json({ok:true});
});
app.delete('/api/items/:id', (req,res)=>{
  db.prepare('DELETE FROM items WHERE id=?').run(req.params.id);
  res.json({ok:true});
});
const PORT=process.env.PORT||3000;
app.listen(PORT, ()=>console.log(`share-list http://localhost:${PORT}`));
