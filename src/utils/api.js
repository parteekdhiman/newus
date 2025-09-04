// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// API endpoints
export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  LEAD: `${API_BASE_URL}/api/lead`,
  NEWSLETTER: `${API_BASE_URL}/api/newsletter`,
  COURSE_INQUIRY: `${API_BASE_URL}/api/course-inquiry`
};

// API utility functions
export const api = {
  // Health check
  async healthCheck() {
    try {
      const response = await fetch(API_ENDPOINTS.HEALTH);
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      return { status: 'ERROR', message: 'Backend server is not reachable' };
    }
  },

  // Submit lead
  async submitLead(data) {
    try {
      const requestData = data.payload ? data.payload : data;
      
      const response = await fetch(API_ENDPOINTS.LEAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
      return await response.json();
    } catch (error) {
      console.error('Lead submission failed:', error);
      throw error;
    }
  },

  // Subscribe to newsletter
  async subscribeNewsletter(data) {
    try {
      const response = await fetch(API_ENDPOINTS.NEWSLETTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      throw error;
    }
  },

  async submitCourseInquiry(data) {
    try {
      const response = await fetch(API_ENDPOINTS.COURSE_INQUIRY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.error('Course inquiry submission failed:', error);
      throw error;
    }
  }
};

export const getClientMetadata = () => {
  return {
    timezone: Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone,
    href: typeof window !== 'undefined' ? window.location.href : '',
    language: typeof navigator !== 'undefined' ? navigator.language : '',
    platform: typeof navigator !== 'undefined' ? navigator.platform : '',
    screen: typeof window !== 'undefined' ? { 
      w: window.screen?.width, 
      h: window.screen?.height 
    } : {}
  };
};
