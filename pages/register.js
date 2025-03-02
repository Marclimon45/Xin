// pages/register.js
import React, { useState } from 'react';

const Register = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profession: '',
    socialLinks: '',
    skills: [],
    availability: [],
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes (for skills and availability)
  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-sm text-gray-500">Xin | Kit of Fame</h1>
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Join Our Collaborative Community</h2>
          <p className="text-gray-500">
            Our lab focuses on ensuring the safety and reliability of cyber systems
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Information Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Basic Information</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your last name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your password"
                  required
                />
              </div>
            </div>
          </div>

          {/* Professional Info Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Social & Professional Links</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Discord Username</label>
                <input
                  type="text"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Discord username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">GitHub Profile URL</label>
                <input
                  type="url"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://github.com/yourusername"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                <input
                  type="url"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://linkedin.com/in/yourusername"
                  required
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Skills & Expertise</h2>
            <div className="space-y-2">
              {['JavaScript', 'Python', 'Java', 'Rust', 'Go', 'UI/UX Design'].map((skill) => (
                <div key={skill} className="flex items-center">
                  <input
                    type="checkbox"
                    id={skill}
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={(e) => handleCheckboxChange(e, 'skills')}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={skill} className="ml-2 text-sm text-gray-700">
                    {skill}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Availability & Interests</h2>
            <div className="space-y-2">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    id={day}
                    value={day}
                    checked={formData.availability.includes(day)}
                    onChange={(e) => handleCheckboxChange(e, 'availability')}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={day} className="ml-2 text-sm text-gray-700">
                    {day}
                  </label>
                  <span className="ml-2 text-sm text-gray-500">Add Time</span>
                </div>
              ))}
              {['Cybersecurity', 'Data Science', 'Machine Learning', 'Frontend Development', 'Backend Development', 'Data Analysis'].map((interest) => (
                <div key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    id={interest}
                    value={interest}
                    checked={formData.availability.includes(interest)}
                    onChange={(e) => handleCheckboxChange(e, 'availability')}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={interest} className="ml-2 text-sm text-gray-700">
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Terms and Submit Button */}
          <div className="text-sm text-gray-500">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;