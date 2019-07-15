const express = require('express');


const Project = require('../models/project');



const router = express.Router();




//create

router.post('/', async (req,resp) => {
        try{
                
                        const { nomeJuridica, 
                                cnpjJuridica,
                                nomeFisica,
                                rgFisica,
                                cpfFisica,
                                telFixoFisica,
                                rua,
                                numero,
                                bairro,
                                cep,
                                complemento,
                                cidade,
                                estado,
                                celular,
                                email  }= req.body; console.log(req.body);
        
        
                       
        
                        const project = await Project.create({ nomeJuridica, 
                                                                cnpjJuridica,
                                                                nomeFisica,
                                                                rgFisica,
                                                                cpfFisica,
                                                                telFixoFisica,
                                                                rua,
                                                                numero,
                                                                bairro,
                                                                cep,
                                                                complemento,
                                                                cidade,
                                                                estado,
                                                                celular,
                                                                email
                                                                });


                await project.save();


                return resp.send({ project });

        } catch(error){

                return resp.status(400).send({ error: "error creating new cadastro" });
        }
});








module.exports = app => app.use('/projects', router);