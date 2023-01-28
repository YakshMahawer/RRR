const areaStats = require("../models/areaschema");
const router = require("express").Router();

/*  router.post("/",async(req,res) => {
    const newStats= new areaStats(req.body);
    try{
        const savedStats = await newStats.save();
        res.status(200).json(savedStats);
    }catch(err){
        res.status(500).json(err)
    }
}); */



router.get("/:area_name",async(req,res) => {
    try{
        const pop_stats = await areaStats.findOne({area_name:req.params.area_name});
        const count_sort = pop_stats.problems.sort((a,b) => b.count - a.count);

        console.log(pop_stats.problems.map((item) => item.category + " " + (item.count*100)/pop_stats.total_problems + "%"))

    }catch(err){
        res.status(500).json(err);
    }
});



        

module.exports = router;