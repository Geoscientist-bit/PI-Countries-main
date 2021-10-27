const { Router } = require('express');
const {Country, Activity} = require ('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", (req, res, next)=>{
	return Country.findAll()
	.then((paises)=>{
		res.send(paises)
	})
	
})

router.get("/countries/:id", async (req, res, next)=>{
    try{
		const id = req.params.id.toUpperCase();
		let paisesfiltrados

		if(typeof id === "string" && id.length === 3){

			paisesfiltrados= await Country.findByPk(id,{
				include: Activity // incluyo la actividad 
			})
			if(paisesfiltrados){  // pregunto si existe el id
				return res.send(paisesfiltrados)
			}else{
				return res.status(404).send({Error:"El id ingresado no existe, por favor intente con otro"});

			}
		}else{
			return res.status(404).send({Error:"Ingrese un dato de 3 letras. No se permiten numero"});
		}
	}
	catch(err){
		next(err)
	}

})







module.exports = router;


	/*try {
        //Guardo en una variable el params:
        const {id} = req.params;
        //Me traigo los datos de la base de datos
        await Country.findByPk(id.toUpperCase(), {
            include: Activity,
            attributes: ["image", "name", "capital", "id", "subregion", "area", "population"],
            where:{
                id: id
            }
        })
        .then(countries =>{ 
            res.send(countries);
        })
         }
    catch (error) {
        next(error)
    }*/

    /*

try{
    const name = req.query.name;
    
        if (name) {
            //Guardo en una variable y uso el endpoint de buscar paises por nombre:
            const countriApi = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: "%" + name + "%"
                    }
                },
            });
            //Verifico si me llega data, la mando:
            
                
console.log(countriApi)
            if (countriApi) {
                res.send(countriApi)
            } else {
            //sino mando un error
                res.send("No se ha podido encontrar el pais indicado")
            }
        }  else if (req.query.activity){
            const actividad = req.query.activity
            const fActivity = await Country.findAll({
                include:{
                    model: Activity,
                    
where: {
                        name: actividad
                    },
                    // through:{
                    //     attributes:[]
                    // },
                    required: true
                }
            })
            return res.json(fActivity)
        } else {
            //Busco toda la data desde la db y la guardo en la variable data:
            const data = await Country.findAll();
            res.send(data)
   }
    }
    catch(error){
        next(error)
    }
});
*/