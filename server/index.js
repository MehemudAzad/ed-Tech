const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const topics = require('./data/topics.json');
const courses = require('./data/coursesv2.json');

app.get('/', (req, res)=>{
   res.send("Programming api started let's see");
})

app.get('/topics', (req, res)=>{
    res.send(topics);
})

app.get('/courses',(req, res) =>{
    res.send(courses);
} );



app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    
        const courses_topic = courses.filter(n => n.category_id == id);
        res.send(courses_topic);
    
});

app.get('/checkout', (req, res)=>{
    res.send(courses);
})

app.get('/checkout/:id', (req, res)=>{
    const id = req.params.id;
    const selectedNews = courses.find(n => n.id === id);
    res.send(selectedNews);
})

app.listen(port, ()=> {
    console.log('tech ed server running on port', port);
    
});


