import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { coursesList } from "../data/courseslist";
import { slugify } from "../utils/slugify";
import { api } from "../utils/api.js";

function CoursesContent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    agree: false,
    course: "",
    brochureUrl: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const { id } = useParams();
  const course = coursesList.find((one) => slugify(one.name) === id);

  const validateForm = () => {
    const errors = {};
    if (!formValues.fullName.trim()) errors.fullName = "Full name is required";
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Enter a valid email";
    }
    if (!formValues.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(formValues.phone)) {
      errors.phone = "Enter a valid phone number";
    }
    if (!formValues.agree) errors.agree = "Please accept the terms";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const openForm = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  const closeForm = () => {
    if (isSubmitting) return;
    setIsFormOpen(false);
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      course: course?.name || "",
      brochureUrl: course?.brochure || "",
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setIsSubmitting(true);
      const result = await api.submitCourseInquiry({
        source: "brochure",
        courseName: course?.name,
        brochureUrl: course?.brochure,
        ...formValues,
      });
      if (result?.brochureUrl) {
        const a = document.createElement("a");
        a.href = result.brochureUrl;
        a.setAttribute("download", course?.name + ".pdf");
        a.setAttribute("target", "_blank");
        document.body.appendChild(a);
        a.click();
        a.remove();
        setIsFormOpen(false);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-2 text-center drop-shadow">
          Course not found
        </h1>
        <p className="text-gray-500 text-center">
          Sorry, we couldn't find the course you were looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
      <title>{course.name} | My Courses</title>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-90"></div>
        {course.image && (
          <img
            src={course.image}
            alt={course.name}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
            loading="lazy"
          />
        )}
        <div className="relative p-6 sm:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {course.image && (
              <div className="w-full sm:w-72 lg:w-64 shrink-0">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-2 ring-1 ring-white/20">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-40 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow mb-3">
                {course.name}
              </h1>
              {course.description && (
                <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-3xl">
                  {course.description}
                </p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {course.duration && (
                  <span className="inline-flex items-center gap-2 bg-white text-gray-800 px-3 py-1.5 rounded-full text-sm shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 8v5l3 3m6-5a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                )}
                {course.type && (
                  <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 rounded-full text-sm ring-1 ring-white/30">
                    {course.type}
                  </span>
                )}
                {course.coursetype && (
                  <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 rounded-full text-sm ring-1 ring-white/30">
                    {course.coursetype}
                  </span>
                )}
                {course.placement && (
                  <span className="inline-flex items-center gap-2 bg-emerald-400 text-emerald-900 px-3 py-1.5 rounded-full text-sm shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.28 3.72a.75.75 0 011.06 0l9 9a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-9-9a.75.75 0 010-1.06l6.75-6.75zm.97 3.28a1.5 1.5 0 102.12 2.12 1.5 1.5 0 00-2.12-2.12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Placement Assistance
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {course.brochure && (
                  <button
                    onClick={openForm}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-xl shadow hover:shadow-md transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0013.5 6.75v0A1.125 1.125 0 0012.375 5.625h-3.75A2.625 2.625 0 006 8.25v7.5m13.5-1.5l-6 6m0 0l-6-6m6 6V10.5"
                      />
                    </svg>
                    Download Brochure
                  </button>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber-300 text-amber-900 font-semibold px-4 py-2 rounded-xl shadow hover:shadow-md transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 6v6h6" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Outcome / Overview */}
          {(course.outcome || course.description) && (
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                What you'll learn
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {course.outcome || course.description}
              </p>
            </div>
          )}

          {/* Curriculum */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Curriculum</h2>
            <div className="space-y-4">
              {Array.isArray(course.content) && course.content.length > 0 ? (
                course.content.map((item, index) => {
                  const CheckIcon = () => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.28-2.03a.75.75 0 10-1.06-1.06l-5.22 5.22-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5.75-5.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );

                  if (typeof item === "string") {
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-emerald-50/50 border border-emerald-100 rounded-xl p-4"
                      >
                        <CheckIcon />
                        <p className="text-gray-800">{item}</p>
                      </div>
                    );
                  }

                  if (typeof item === "object" && item !== null) {
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-gray-100"
                      >
                        <div className="px-4 py-3 bg-gray-50 rounded-t-xl flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.head}
                          </h3>
                        </div>
                        <div className="p-4">
                          {item.description && (
                            <p className="text-gray-700 mb-2">
                              {item.description}
                            </p>
                          )}
                          {item.duration && (
                            <p className="mb-3 text-sm text-gray-600">
                              <span className="font-semibold text-blue-600">
                                Duration:
                              </span>{" "}
                              {item.duration}
                            </p>
                          )}
                          {Array.isArray(item.points) &&
                            item.points.length > 0 && (
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {item.points.map((point, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <CheckIcon />
                                    <span className="text-gray-700">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })
              ) : (
                <div className="bg-gray-50 rounded-xl p-5 text-gray-500 text-center border border-dashed">
                  <p>No content available.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right - Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick info
            </h3>
            <ul className="space-y-3">
              {course.duration && (
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
                    ⏱️
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">
                      {course.duration}
                    </p>
                  </div>
                </li>
              )}
              {course.type && (
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-purple-600">
                    🏷️
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium text-gray-900">{course.type}</p>
                  </div>
                </li>
              )}
              {course.coursetype && (
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-50 text-pink-600">
                    ⭐
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Program Type</p>
                    <p className="font-medium text-gray-900">
                      {course.coursetype}
                    </p>
                  </div>
                </li>
              )}
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600">
                  🎯
                </span>
                <div>
                  <p className="text-sm text-gray-500">Placement</p>
                  <p className="font-medium text-gray-900">
                    {course.placement ? "Assistance available" : "Not included"}
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow"
              >
                Apply Now
              </Link>
              {course.brochure && (
                <button
                  onClick={openForm}
                  className="w-full text-center bg-white text-gray-900 font-semibold py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50"
                >
                  Download Brochure
                </button>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Lead Capture Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeForm} />
          <div className="relative w-full max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Get the Brochure
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fill in your details to download the brochure.
                  </p>
                </div>
                <button
                  onClick={closeForm}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formValues.fullName}
                    onChange={onChange}
                    className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.fullName ? "border-red-400" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.fullName && (
                    <p className="mt-1 text-xs text-red-600">
                      {formErrors.fullName}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={onChange}
                      className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.email ? "border-red-400" : "border-gray-300"
                      }`}
                      placeholder="you@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formValues.phone}
                      onChange={onChange}
                      className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.phone ? "border-red-400" : "border-gray-300"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-xs text-red-600">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={formValues.agree}
                    onChange={onChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-700">
                    I agree to be contacted about this program. I have read the
                    privacy policy.
                  </label>
                </div>

                {formErrors.agree && (
                  <p className="-mt-2 text-xs text-red-600">
                    {formErrors.agree}
                  </p>
                )}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeForm}
                    className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
                  >
                    {isSubmitting ? "Processing..." : "Download Brochure"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoursesContent;
