const express = require('express');


const Project = require('../models/project');
const authMidleware = require('../middlewares/auth')



const router = express.Router();


router.use(authMidleware);

//show by id

 router.get('/:projectId', async (req, resp) => {
        try{
               const project = await Project.findById(req.params.projectId).populate(['user' , 'project']);

                return resp.send({ project });

        } catch(error){
               return resp.status(400).send({ error: "error loading  project" });   

       }

        
        
 }); 


module.exports = app => app.use('/show', router);
