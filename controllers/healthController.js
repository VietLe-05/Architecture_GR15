(function () {
  // Controller: validates health profile and calculates BMI/calories.
  function validateProfile(profile) {
    if (
      !profile.height ||
      !profile.weight ||
      !profile.workingHours ||
      profile.height <= 0 ||
      profile.weight <= 0 ||
      profile.workingHours <= 0
    ) {
      return 'Height, weight, and working hours must be greater than zero.';
    }

    if (profile.height < 80 || profile.height > 230) {
      return 'Please enter a realistic height in centimeters.';
    }

    if (profile.weight < 20 || profile.weight > 250) {
      return 'Please enter a realistic weight in kilograms.';
    }

    if (profile.workingHours > 24) {
      return 'Working hours cannot be more than 24.';
    }

    return '';
  }

  function calculateBMI(height, weight) {
    var heightInMeters = height / 100;
    return Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
  }

  function getBMIStatus(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    }

    if (bmi < 25) {
      return 'Normal';
    }

    return 'Overweight';
  }

  function calculateCalories(profile, bmiStatus) {
    var activityMultiplier = {
      Low: 1.25,
      Medium: 1.45,
      High: 1.65,
    }[profile.activityLevel];

    var bodyTypeAdjustment = {
      Thin: 200,
      Normal: 0,
      Overweight: -200,
    }[profile.bodyType];

    var bmiAdjustment = bmiStatus === 'Underweight' ? 150 : bmiStatus === 'Overweight' ? -250 : 0;
    var workAdjustment = profile.workingHours > 8 ? 100 : 0;
    var baseCalories = profile.weight * 22;
    var calories = baseCalories * activityMultiplier + bodyTypeAdjustment + bmiAdjustment + workAdjustment;

    return Math.max(1200, Math.round(calories / 50) * 50);
  }

  function calculateHealth(profile) {
    var bmi = calculateBMI(profile.height, profile.weight);
    var bmiStatus = getBMIStatus(bmi);

    return {
      bmi: bmi,
      bmiStatus: bmiStatus,
      calories: calculateCalories(profile, bmiStatus),
    };
  }

  window.HealthController = {
    calculateHealth: calculateHealth,
    validateProfile: validateProfile,
  };
})();
