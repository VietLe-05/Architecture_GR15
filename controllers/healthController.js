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
      return 'Chiều cao, cân nặng và giờ làm việc phải lớn hơn 0.';
    }

    if (profile.height < 80 || profile.height > 230) {
      return 'Vui lòng nhập chiều cao hợp lý tính bằng cm.';
    }

    if (profile.weight < 20 || profile.weight > 250) {
      return 'Vui lòng nhập cân nặng hợp lý tính bằng kg.';
    }

    if (profile.workingHours > 24) {
      return 'Giờ làm việc không thể lớn hơn 24.';
    }

    return '';
  }

  function calculateBMI(height, weight) {
    var heightInMeters = height / 100;
    return Number((weight / (heightInMeters * heightInMeters)).toFixed(1));
  }

  function getBMIStatus(bmi) {
    if (bmi < 18.5) {
      return 'Thiếu cân';
    }

    if (bmi < 25) {
      return 'Bình thường';
    }

    return 'Thừa cân';
  }

  function calculateCalories(profile, bmiStatus) {
    var activityMultiplier = {
      Thấp: 1.25,
      'Trung bình': 1.45,
      Cao: 1.65,
    }[profile.activityLevel];

    var bodyTypeAdjustment = {
      Gầy: 200,
      'Bình thường': 0,
      'Thừa cân': -200,
    }[profile.bodyType];

    var bmiAdjustment = bmiStatus === 'Thiếu cân' ? 150 : bmiStatus === 'Thừa cân' ? -250 : 0;
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
