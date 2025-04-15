// You can configure axios or fetch here for API calls

// Example using fetch
const API_URL = 'https://your-api-endpoint.com/api';

export const fetchDashboardData = async () => {
  try {
    const response = await fetch(`${API_URL}/dashboard`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

export const fetchCustomers = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_URL}/customers?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

// You can add more API methods here for different endpoints