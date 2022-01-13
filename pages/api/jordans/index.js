import dbConnect from "../../../util/mongo";
import Jordan from "../../../models/Jordan";


export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try{
      const jordan = await Jordan.find();
      res.status(200).json(jordan)
    }
    catch(err){
      console.log(err);
    }
  }
  if (method === "POST") {
    try {
   

      const jordan = await Jordan.create(req.body);
      res.status(201).json(jordan);

      /*  
         const product = await new Product(req.body);

      product.save()
        .then((result)=>{
          res.status(201).json(product);
        })
        .catch((err)=>{
          console.log(err)
        }) */
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
