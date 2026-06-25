(function () {
  // Controller: creates a suggested diet plan from mock data.
  function choosePlanIndex(metrics, alternativeIndex) {
    if (alternativeIndex > 0) {
      return alternativeIndex % window.AppModels.mealPlans.length;
    }

    if (metrics.bmiStatus === 'Thiếu cân') {
      return 2;
    }

    if (metrics.bmiStatus === 'Thừa cân') {
      return 1;
    }

    return 0;
  }

  function createDietPlan(profile, alternativeIndex) {
    var metrics = window.HealthController.calculateHealth(profile);
    var index = choosePlanIndex(metrics, alternativeIndex || 0);
    var mealPlan = window.AppModels.mealPlans[index];

    return {
      id: mealPlan.id,
      name: mealPlan.name,
      breakfast: mealPlan.breakfast,
      lunch: mealPlan.lunch,
      dinner: mealPlan.dinner,
      note: mealPlan.note,
      bmi: metrics.bmi,
      bmiStatus: metrics.bmiStatus,
      calories: metrics.calories,
      alternativeIndex: alternativeIndex || 0,
    };
  }

  function createAlternativePlan(profile, currentPlan) {
    var nextIndex = currentPlan ? currentPlan.alternativeIndex + 1 : 1;
    return createDietPlan(profile, nextIndex);
  }

  window.DietController = {
    createAlternativePlan: createAlternativePlan,
    createDietPlan: createDietPlan,
  };
})();
