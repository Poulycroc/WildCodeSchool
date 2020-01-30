const express = require("express");
const app = express();
const router = express.Router();

const array = [{
  id: 1,
  title: 'title post',
  content: 'test test test test'
},{
  id: 2,
  title: 'post 2',
  content: 'test test test test'
}]

router.get("/", (req, res) => {
  res.send('My blog app');
});
router.get("/posts", (req, res) => {
  res.json({ posts: array });
});
router.get("/posts/:id", (req, res) => {
  const id = req.params.id
  let result = null
  for (let i; i < array.length; i++) {
    if (array[i].id === id) {
      console.log('rest')
      result = array[i]
    }
  }

  if (result === null) {
    res.status(404).json({ error: 'post not found' });
  } else {
    res.json({ result });
  }
});
router.post('/posts/new', (req, res) => {
  const formInputs = req.body;
  console.log({ formInputs })
  // save it to db
  res.send('New trip saved successfully!')
})


app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

app.listen(4545, () => {
  console.log("Example app listening on port 4545!");
});
