const express = require('express');
const authMidleware = require('../middlewares/auth')


const Project = require('../models/project');



const router = express.Router();

router.use(authMidleware)


router.get('/:pesquisa', async (req,resp) => {
        try{
                console.log(req.params);
                const projects = await Project.findOne(
                        {$or: 
                                [ 
                                        {cnpjJuridica : req.params.pesquisa}, 
                                        {rgFisica : req.params.pesquisa }, 
                                        {cpfFisica :  req.params.pesquisa },
                                ]
                        }
                        ).populate(['project']);

                return resp.send({ projects });

        } catch(error){
                return resp.status(400).send({ 'error': "error loading  projects :" + error });   
        }
});


module.exports = app => app.use('/getById', router);