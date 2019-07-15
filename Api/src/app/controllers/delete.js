const express = require('express');


const Project = require('../models/project');



const router = express.Router();




router.delete('/:projectId', async (req, resp) => {
    try{
            await Project.findByIdAndRemove(req.params.projectId);

            return resp.send();

    } catch(error){
            return resp.status(400).send({ error: "error deleting   project" });   

    }

});

module.exports = app => app.use('/delete', router);