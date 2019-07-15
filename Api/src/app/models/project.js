const mongoose = require('../../dataBase');



const ProjectSchema = new mongoose.Schema({

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    
       },
    
       completed:{
           type: Boolean,
           require: true,
           default: false,
    
       },

       pessoa: {
        type: String,
        require: true,
        
        },
        
    
    
    
        nomeJuridica: {
            type: String,
            require: true,
            
            },
            
    
         cnpjJuridica: {
             type: String,
             require: true,
             
            },
            
    
         nomeFisica: {
             type: String,
             require: true,
             
            },
            
         rgFisica: {
             type: String,
             require: true,
             
            },
            
         cpfFisica: {
             type: String,
             require: true,
             
            },
            
         telFixoFisica: {
             type: String,
             require: true,
             
            },
            
         rua: {
             type: String,
             require: true,
             
            },
            
         numero: {
             type: String,
             require: true,
             
            },
            
         bairro: {
             type: String,
             require: true,
             
            },
            
         cep: {
             type: String,
             require: true,
             
            },
            
         complemento: {
             type: String,
             require: true,
             
            },
            
         cidade: {
             type: String,
             require: true,
             
            },
            
         estado: {
              type: String ,
              require: true,
            },
              
         celular: {
             type: String,
            require: true,
            
        },
        
         email: {
              type: String,
              require: true,
            },
            
    
        createdAt:{ 
            type: Date,
            default: Date.now,
    
            },
        });
    
    





const Project = mongoose.model('Project', ProjectSchema);

module.exports  = Project;
