const axios = require ("axios");
const { Country } = require('../db');
const urlapi= "https://restcountries.com/v3.1/all";


const loader= async()=>{
	const getApi=await axios.get(urlapi);
	const allcountry=getApi.data;
	try{
		const model= allcountry.map((e)=>{
			return{
          		id:e.cioc,
          		name:e.name.common,
          		image:e.flags.png,
          		continent:e.continents[0],
          		capital:e.capital ? e.capital[0] : "no hay capital",
          		area:e.area,
          		subregion:e.subregion,
          		population:e.population
			}
		})
		model.forEach(async(r)=>{
			await Country.findOrCreate({
				where:{
					id:r.id,
					name:r.name,
					image:r.image,
					continent:r.continent,
					capital:r.capital,
					area:r.area,
					subregion:r.subregion,
					population:r.population
				}
			})
		})
		console.log("si se hizo");
	}
	catch(err){
		next(err)
	}

}

module.exports={loader}