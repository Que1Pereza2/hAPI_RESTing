const { Router } = require('express');
const router = Router();
 
//Root
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hallo Welt mit Routen !"
        }
    );
})
 
module.exports = router;