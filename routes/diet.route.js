const { Router } = require("express");
const { route } = require("../../../Неделя 11/Truck-Back/routes/request.route");
const router = Router();
const { diet } = require("../controllers/diet.controller");

router.get("/diet", diet.getDiet);
router.post("/diet", diet.addDiet);
router.get("/diet/:id", diet.updateDiet);
router.get("/diet/:id", diet.deleteDiet);

module.exports = router;
