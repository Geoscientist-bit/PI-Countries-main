//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require ('axios');
const {loader}=require ("./src/Loader/loader");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
loader()


  }) // eslint-disable-line no-console
});

   /* axios.get('https://restcountries.com/v3.1/all').then((respuesta)=>{
      respuesta.data.map((paises)=>{
        Country.create({
          id:paises.cioc,
          name:paises.name.common,
          image:paises.flags.png,
          continent:paises.continents[0],
          capital:paises.capital ? paises.capital[0] : "No hay capital",
          area:Math.round(paises.area),
          subregion:paises.subregion,
          population:paises.population
        })
      })
    }).catch((err)=>{
      res.status(500,{data:err})
    })*/
    
    

  /*const newCountry = Country.create({
  id:"VEN",
  name:"Venezuela",
  image:"https://flagcdn.com/w320/ve.png",
  continent:"Americas",
  capital:"Caracas",
  subregion:"South America",
  area:916445,
  population:28435943
  });
  Promise.all([newCountry])
   .then(res => {
      console.log("milangas cargadas");
    });*/

