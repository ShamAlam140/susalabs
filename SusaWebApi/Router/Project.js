// routes/projectRoutes.js
const express = require("express");
const router = express.Router();
const projectController = require("../controller/Project");
const upload = require("../middeleware/pupload");

// Log the incoming request body and uploaded file
router.post("/add", upload.single("image"), (req, res, next) => {
    console.log("📥 Request Body:", JSON.stringify(req.body, null, 2)); // Logs request body
    console.log("🖼 Uploaded File:", req.file); // Logs uploaded file info (Cloudinary URL)
  
    next(); // Pass to the controller
  }, projectController.createProject);
router.get("/getAll", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
