const { Router } = require("express");
const router = Router();
const { diet } = require("../controllers/diet.controller");

router.get("/diet", diet.getDiet);
router.post("/diet", diet.addDiet);
router.patch("/diet/:id", diet.updateDiet);
router.delete("/diet/:id", diet.deleteDiet);

module.exports = router;
