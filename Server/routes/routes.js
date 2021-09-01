const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;
const Blog = require('../models/blog.js');

//Get all blogs
router.get('/', (req,res) => {
    Blog.find((err,doc)=> {
        if(err){
            console.log('Error in Get data '+ err);
        }else{
            res.send(doc);
        }
    })
})

//Get a single blog
router.get('/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        Blog.findById( req.params.id, (err,doc)=> {
            if(err){
                console.log('Error in Get blog by id '+ err);
            }else{
                res.send(doc);
            }
        });
    }else{
        return res.status(400).send('No blog found with id = ' + req.params.id);
    }
})

//Add a blog
router.post('/', (req, res) => {
    let blog = new Blog({
        title: req.body.title,
        category: req.body.category,
        content: req.body.content
    });
    
    blog.save((err,doc)=> {
        if(err){
            console.log('Error in post data '+ err);
        }else{
            res.send(doc);
        }
    })
});

//Delete a blog
router.delete('/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        Blog.findByIdAndRemove( req.params.id, (err,doc)=> {
            if(err){
                console.log('Error in Delete blog by id '+ err);
            }else{
                res.send(doc);
            }
        });
    }else{
        return res.status(400).send('No blog found with id = ' + req.params.id);
    }
})

//Update a blog
router.put('/:id', (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        let blog = {
            title: req.body.title,
            category: req.body.category,
            content: req.body.content
        };
        
        Blog.findByIdAndUpdate( req.params.id, {$set: blog}, {new: true}, (err,doc)=> {

            if(err){
                console.log('Error in Update blog by id '+ err);
            }else{
                res.send(doc);
            }
        });
    }else{
        return res.status(400).send('No blog found with id = ' + req.params.id);
    }
})

module.exports = router;