(function () {
  // Model: data initialized as empty and loaded via fetch.
  window.AppModels.bodyTypes = ['Thin', 'Normal', 'Overweight'];
  window.AppModels.activityLevels = ['Low', 'Medium', 'High'];
  window.AppModels.mealPlans = [];

  // Function to fetch data from the JSON file
  async function fetchMealPlans() {
    try {
      const response = await fetch('/mealPlans.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      window.AppModels.mealPlans = data;
      console.log('Data fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to fetch meal plans:', error);
      return [];
    }
  }

  window.AppModels.fetchMealPlans = fetchMealPlans;
})();
