const Resume = require('../Model/Resume'); // Adjust the path as per your file structure
const sendEmailNotification = require("../utils/sendEmail");

// Controller method to create a new resume entry
const createResume = async (req, res) => {
    try {
        // Log incoming request data for debugging
        console.log("=== Incoming resume data ===");
        console.log("req.body:", req.body);  // Logs the form fields
        console.log("req.file:", req.file);  // Logs the file info (corrected)

        // Destructure the fields from req.body
        const { name, phone, education, address } = req.body;

        // If using 'resume' as the field name for file, save it
        const resume = req.file ? req.file.path : null;  // File URL from Cloudinary (or local path)

        // Log the data we're saving to ensure it's correct
        console.log("Data to be saved:", { name, phone, education, resume, address });

        // Create a new resume entry
        const newResume = new Resume({ name, number: phone, education, resume, address });

        // Save the new resume
        await newResume.save();

        // Trigger email notification asynchronously
        const emailSubject = `New Job Application: ${newResume.name}`;
        const emailHtml = `
          <h2>New Job Application Received</h2>
          <p><strong>Candidate Name:</strong> ${newResume.name}</p>
          <p><strong>Phone:</strong> <a href="tel:${newResume.number}">${newResume.number}</a></p>
          <p><strong>Education:</strong> ${newResume.education}</p>
          <p><strong>Address:</strong> ${newResume.address || 'Not Provided'}</p>
          <p><strong>Resume Document:</strong> ${newResume.resume ? `<a href="${newResume.resume}" target="_blank" style="padding: 6px 12px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; display: inline-block;">View/Download Resume</a>` : 'No file uploaded'}</p>
          <hr/>
          <p><em>Received at: ${new Date(newResume.createdAt || Date.now()).toLocaleString()}</em></p>
        `;
        sendEmailNotification(emailSubject, emailHtml);

        // Respond with success message
        console.log("Resume saved successfully:", newResume);
        res.status(201).json({ message: 'Resume created successfully', data: newResume });
    } catch (error) {
        // Log the error for debugging
        console.error("Error creating resume:", error);

        // Catch and handle any errors
        res.status(500).json({ message: 'Error creating resume', error: error.message });
    }
};




// Controller method to get all resume entries
const getAllResumes = async (req, res) => {
    try {
        const resumes = await Resume.find().sort({ _id: -1 }).limit(0); // Sorting in descending order based on '_id' field and limiting the result to 1
        res.status(200).json({ data: resumes });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching resumes', error: error.message });
    }
};




// Controller method to delete a resume entry
const deleteResume = async (req, res) => {
    try {
        const { _id } = req.params;
        const deletedResume = await Resume.findByIdAndDelete(_id);
        if (!deletedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.status(200).json({ message: 'Resume deleted successfully', data: deletedResume });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting resume', error: error.message });
    }
};

module.exports = {
    createResume,
    getAllResumes,

    deleteResume
};
