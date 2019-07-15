const assert=require('assert');
const request=require('request');
const chai=require('chai');

const cadastro = {
       
    "_id"            :  "",
    "completed"      :  false,
    "nomeFisica"     :  "",
    "rgFisica"       :  "",
    "cpfFisica"      :  "",
    "telFixoFisica"  :  "",
    "rua"            :"",
    "numero"         :"",
    "bairro"         :"",
    "cep"            :"",
    "complemento"    :"",
    "cidade"         :"",
    "estado"         :"",
    "celular"        :"",
    "email"          :"",
    "createdAt"      :"",
    "__v"            :0, 
    "cnpjJuridica"   :null,
    "nomeJuridica"   :null,
    "pessoa"         :null};





describe('api teste',()    =>{

    it('devera ser true', (done)    =>{
        request('http://localhost:3003/getById', function (error, response, body) {
            assert.equal(404, response.statusCode);
            done();
    
        });


    });
});

describe('delete test' , ()     =>  {

     cadastro._id = "5c9d049b19eafb29242a777f";

    it(" delete - codigo deve ser 200 ", (done)     => {
        request.delete("http://localhost:3003/delete" + '/' + cadastro._id  ,
        
        function(erro, resp) {
            assert.equal(200, resp.statusCode);
            done();
        });

    });
});

describe(" update teste ", ()  => {

    
   
   
   
  const  cadastro = {
       
                    "_id"            :  "5c9babecb49209204034181e",
                    "completed"      :  false,
                    "nomeFisica"     :  "fabioUpdateTesteServiceAllRight",
                    "rgFisica"       :  "5555555",
                    "cpfFisica"      :  "2433423423",
                    "telFixoFisica"  :  "2434234234",
                    "rua"            :"sdffssdfsdfgsfd",
                    "numero"         :"sgdsfg",
                    "bairro"         :"dgsdfgsdg",
                    "cep"            :"sdfgsdfg",
                    "complemento"    :"sdfgsdfg",
                    "cidade"         :"sdfgsfd",
                    "estado"         :"SP",
                    "celular"        :"sdfgsdfg",
                    "email"          :"sdfgdfs@sdfdsg",
                    "createdAt"      :"2019-03-27T16:59:24.584Z",
                    "__v"            :0, 
                    "cnpjJuridica"   :null,
                    "nomeJuridica"   :null,
                    "pessoa"         :"programador"};

                    

              it(" update codigo 200 ", (done)  =>{
        request.put("http://localhost:3003/update" + "/" +  cadastro._id ,cadastro , 
        
        function (error,resp)   {
            assert.equal(200, resp.statusCode);
            done();

            error = "bad update request";

        });
    });  
});



//this.updateUrlPut+"/"+ id,  cadastro

/* _id :            
pessoa :        
nomeJuridica:    
cnpjJuridica:    
nomeFisica:      
rgFisica:        
cpfFisica:       
telFixoFisica:   
rua:             
numero:          
bairro:          
cep:             
complemento:     
cidade:          
estado:          
 celular:         
email:     */