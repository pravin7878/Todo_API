const fs = require("fs")

// chack Id is valid or not
const chackID = async (req,res,next)=>{
    const { id } = req.params;
try {
     const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
     const idIsExist = data.todos.some((task) => task.id === +id);
     if(!idIsExist){
        return res.status(500).json({ "error": "id is not valid" });
     }
     next()
} catch (error) {
    res.send("error is reading file")
}
}

module.exports = chackID