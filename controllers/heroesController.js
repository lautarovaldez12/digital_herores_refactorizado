const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'))



module.exports = {
    ver : function(req, res) {
        res.send(heroes);
        res.end();
        
    },
    datoHeroe : function(req,res){
        let heroe = req.params.id;
        let filtro  = heroes.filter(hero => hero.id == heroe);
    
    
        if(filtro.length ==! 0){
            filtro.forEach(function(a){
                res.write("Hola, mi nombre es " + a.nombre + " y soy " + a.profesion);
                res.end();
            });
        }else{                    
            res.write("error");
            res.end();
        };

    },
    bio : function(req, res) {
        let heroe = req.params.id;
        let ok = req.params.ok;
        let nombre = heroes.filter(hero => hero.id == heroe)
        if (ok == "ok"){
            if(nombre.length ==! 0){
                nombre.forEach(function(a){
                    res.write(a.resenia);
                    res.write(ok);
                })
                res.end()
            }else {
                res.send("Error! Heroe no encontrado")
                res.send()
            }	
        }else {
            if(nombre.length ==! 0){
                nombre.forEach(function(a){
                    res.write(a.nombre + " Lamento que no quieras saber nada de mi");
                    
                })
                res.end()
            }else {
                res.send("Error! Heroe no encontrado")
                res.send()
            }
        }
    }

}






