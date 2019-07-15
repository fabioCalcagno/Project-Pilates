const express = require('express');


const Project = require('../models/project');



const router = express.Router()



router.put('/:updateId', async (req, resp) => {
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
                    email ,
                    pessoa,    }= req.body;

            const project = await Project.findByIdAndUpdate(req.params.updateId , 
                                                          
                    {       nomeJuridica, 
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
                            email ,
                            pessoa, 
                                    }, { new: true }        );  // forçar o mongoose retornar o projeto atualizado

            
                                    console.log("classe updade " + project);
            await project.save();

            
            return resp.send({ project });
           

    } catch(error){

            return resp.status(400).send({ error: "error updating new project" });
    }
});



module.exports = app => app.use('/update', router);