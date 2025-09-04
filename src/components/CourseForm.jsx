import React, { useState, useEffect } from 'react';

const emptyImage = { type: '', img: '' };
const emptySection = { side: '', topics: [''] };

const CourseForm = ({ course, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    Duration: '',
    job: '',
    placement: '',
    image: '',
    brochure: '',
    flag: 'Placement Assistance Programs',
    images: [],
    content: [],
    out: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const flagOptions = [
    'Placement Assistance Programs',
    'Flagship Programs',
    'Short Term Programs'
  ];

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || '',
        name: course.name || '',
        Duration: course.Duration || '',
        job: course.job || '',
        placement: course.placement || '',
        image: course.image || '',
        brochure: course.brochure || '',
        flag: course.flag || 'Placement Assistance Programs',
        images: Array.isArray(course.images) ? course.images : [],
        content: Array.isArray(course.content) ? course.content : [],
        out: course.out || '',
        description: course.description || ''
      });
    }
  }, [course]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Images array handlers
  const addImage = () => setFormData(prev => ({ ...prev, images: [...prev.images, { ...emptyImage }] }));
  const removeImage = (index) => setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }));
  const updateImage = (index, key, value) => {
    setFormData(prev => {
      const next = [...prev.images];
      next[index] = { ...next[index], [key]: value };
      return { ...prev, images: next };
    });
  };

  // Sectioned content handlers
  const addSection = () => setFormData(prev => ({ ...prev, content: [...prev.content, { ...emptySection }] }));
  const removeSection = (index) => setFormData(prev => ({ ...prev, content: prev.content.filter((_, i) => i !== index) }));
  const updateSectionSide = (index, value) => {
    setFormData(prev => {
      const next = [...prev.content];
      next[index] = { ...next[index], side: value };
      return { ...prev, content: next };
    });
  };
  const addTopic = (sectionIndex) => {
    setFormData(prev => {
      const next = [...prev.content];
      const topics = Array.isArray(next[sectionIndex]?.topics) ? next[sectionIndex].topics : [];
      next[sectionIndex] = { ...next[sectionIndex], topics: [...topics, ''] };
      return { ...prev, content: next };
    });
  };
  const removeTopic = (sectionIndex, topicIndex) => {
    setFormData(prev => {
      const next = [...prev.content];
      next[sectionIndex] = { ...next[sectionIndex], topics: next[sectionIndex].topics.filter((_, i) => i !== topicIndex) };
      return { ...prev, content: next };
    });
  };
  const updateTopic = (sectionIndex, topicIndex, value) => {
    setFormData(prev => {
      const next = [...prev.content];
      const topics = [...(next[sectionIndex].topics || [])];
      topics[topicIndex] = value;
      next[sectionIndex] = { ...next[sectionIndex], topics };
      return { ...prev, content: next };
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.Duration.trim()) newErrors.Duration = 'Duration is required';
    if (!formData.job.trim()) newErrors.job = 'Job assistance info is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (!formData.flag) newErrors.flag = 'Flag is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await onSave(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{course ? 'Edit Course' : 'Add New Course'}</h2>
          <p className="text-sm text-gray-600 mt-1">{course ? 'Update course information' : 'Create a new course matching site schema'}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Course Title *</label>
              <input id="title" name="title" value={formData.title} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.title ? 'border-red-300' : 'border-gray-300'}`} />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Course Name (URL) *</label>
              <input id="name" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-300' : 'border-gray-300'}`} />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="Duration" className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
              <input id="Duration" name="Duration" value={formData.Duration} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.Duration ? 'border-red-300' : 'border-gray-300'}`} />
              {errors.Duration && <p className="mt-1 text-sm text-red-600">{errors.Duration}</p>}
            </div>
            <div>
              <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-2">Job Assistance *</label>
              <input id="job" name="job" value={formData.job} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.job ? 'border-red-300' : 'border-gray-300'}`} />
              {errors.job && <p className="mt-1 text-sm text-red-600">{errors.job}</p>}
            </div>
            <div>
              <label htmlFor="placement" className="block text-sm font-medium text-gray-700 mb-2">Placement Type</label>
              <input id="placement" name="placement" value={formData.placement} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="flag" className="block text-sm font-medium text-gray-700 mb-2">Course Flag *</label>
              <select id="flag" name="flag" value={formData.flag} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.flag ? 'border-red-300' : 'border-gray-300'}`}>
                {flagOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
              {errors.flag && <p className="mt-1 text-sm text-red-600">{errors.flag}</p>}
            </div>
          </div>

          {/* Media URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Main Image URL *</label>
              <input id="image" name="image" value={formData.image} onChange={handleInputChange} className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.image ? 'border-red-300' : 'border-gray-300'}`} placeholder="https://..." />
              {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
            </div>
            <div>
              <label htmlFor="brochure" className="block text-sm font-medium text-gray-700 mb-2">Brochure URL</label>
              <input id="brochure" name="brochure" value={formData.brochure} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="https://...pdf" />
            </div>
          </div>

          {/* Images array */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Images (type + key)</label>
              <button type="button" onClick={addImage} className="text-blue-600 hover:text-blue-700 text-sm font-medium">+ Add Image</button>
            </div>
            <div className="space-y-3">
              {formData.images.map((img, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <input value={img.type} onChange={(e) => updateImage(idx, 'type', e.target.value)} placeholder="type (e.g., html5)" className="px-3 py-2 border border-gray-300 rounded-lg" />
                  <input value={img.img} onChange={(e) => updateImage(idx, 'img', e.target.value)} placeholder="img key (e.g., html)" className="px-3 py-2 border border-gray-300 rounded-lg" />
                  <button type="button" onClick={() => removeImage(idx)} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">Remove</button>
                </div>
              ))}
            </div>
          </div>

          {/* Sectioned Content */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Content Sections</label>
              <button type="button" onClick={addSection} className="text-blue-600 hover:text-blue-700 text-sm font-medium">+ Add Section</button>
            </div>
            <div className="space-y-6">
              {formData.content.map((section, sIdx) => (
                <div key={sIdx} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <input value={section.side} onChange={(e) => updateSectionSide(sIdx, e.target.value)} placeholder="Section side (e.g., Client-side)" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" />
                    <button type="button" onClick={() => removeSection(sIdx)} className="ml-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">Remove Section</button>
                  </div>
                  <div className="space-y-2">
                    {(section.topics || []).map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center space-x-2">
                        <input value={topic} onChange={(e) => updateTopic(sIdx, tIdx, e.target.value)} placeholder="Topic..." className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" />
                        <button type="button" onClick={() => removeTopic(sIdx, tIdx)} className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addTopic(sIdx)} className="text-blue-600 hover:text-blue-700 text-sm font-medium">+ Add Topic</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description and Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="out" className="block text-sm font-medium text-gray-700 mb-2">Course Outcome</label>
              <textarea id="out" name="out" value={formData.out} onChange={handleInputChange} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button type="button" onClick={onCancel} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">Cancel</button>
            <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">{isSubmitting ? 'Saving...' : (course ? 'Update Course' : 'Create Course')}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;

