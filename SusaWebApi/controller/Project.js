const Project = require("../Model/project");


// Create a new project (with Cloudinary image)
exports.createProject = async (req, res) => {
  try {
    const { title, link, description } = req.body;
    const image = req.file?.path; // Cloudinary URL
    const newProject = new Project({ title, link, description, image });
    await newProject.save();
    res.status(201).json({ message: "Project created", project: newProject });
  } catch (error) {
    console.error("❌ Error while creating project:", error.message);
    res.status(500).json({ message: "Failed to create project", error: error.message });
  }
};


// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to get projects", error: error.message });
  }
};

// Get single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to get project", error: error.message });
  }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  try {
    const { title, link, description, image } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, link, description, image },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project updated", project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Failed to update project", error: error.message });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project", error: error.message });
  }
};
