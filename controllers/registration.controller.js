const Registration = require('../models/Registration');

// Create registration
exports.createRegistration = async (req, res) => {
  try {
    const { fullName, email, phone, message, age, gender, meetupArea } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'fullName and email are required' });
    }

    const created = await Registration.create({
      fullName,
      email,
      phone,
      message,
      age,
      gender,
      meetupArea
    });

    res.status(201).json(created);
  } catch (err) {
    console.error('Create registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all registrations
exports.getRegistrations = async (_req, res) => {
  try {
    const list = await Registration.find().sort({ createdAt: -1 }).lean();
    res.json(list);
  } catch (err) {
    console.error('List registrations error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a registration
exports.updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updated = await Registration.findByIdAndUpdate(id, updateData, {
      new: true, // return updated doc
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(updated);
  } catch (err) {
    console.error('Update registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a registration
exports.deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Registration.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json({ message: 'Registration deleted successfully' });
  } catch (err) {
    console.error('Delete registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
