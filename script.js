const workoutRoutines = {
classic: [
    "Jumping Jacks",
    "Wall Sit",
    "Push-Ups",
    "Abdominal Crunches",
    "Step-Up onto Chair",
    "Squats",
    "Triceps Dip on Chair",
    "Plank",
    "High Stepping",
    "Lunges",
    "Push-Up and Rotation",
    "Side Plank (Left)",
    "Side Plank (Right)"
],
abs:[
    "Jumping Squats",
    "Reverse Crunches",
    "Straight Arm Plank",
    "Russian Twists",
    "Bird Dog",
    "Burpees",
    "Long Arm Crunches",
    "One Leg Bridge",
    "One Leg Push-Ups",
    "Plank",
    "Cross Arm Crunches",
    "Mountain Climber",
    "Bridge",
    "Bicycle Crunches"
],
streteches:[
    "Kneeling Lunge Stretch Left",
    "Kneeling Lunge Stretch Right",
    "Calf Stretch Left",
    "Calf Stretch Right",
    "Triceps Stretch Left",
    "Triceps Stretch Right",
    "Cat Cow Pose",
    "Cobra Pose",
    "Child's Pose",
    "Spine Lumbar Twist Stretc Left",
    "Spine Lumbar Twist Stretc Right"
],
day1:[
    "Jumping Jacks 15 s",
    "Push-Ups 5",
    "Squats 15",
    "Curtsy Lunges 16",
    "Cross Arm Crunches 15",
    "Knee Push-Ups 10",
    "Side Plank Left 10 s",
    "Long Arm Crunches 15",
    "Side Plank Right 10 s",
],
day2:[
    "Jumping Jacks 15 s",
    "Push-Ups 6",
    "Russian Twists 20",
    "Lunges 20",
    "Mountain Climbers 20",
    "Left Lunge Knee Hops 10",
    "Right Lunge Knee Hops 10",
    "Plank 25 s",
],
day3:[
    "Triceps Dips 5",
    "Bird Dog 26",
    "Reverse Crunches 25",
    "Split Squat Right 13",
    "Split Squat Left 13",
    "High Stepping 20 s",
    "Knee Push-Ups 12",
    "Side Plank Left 15 s",
    "Side Plank Right 15 s",
    "Wall Sit 30 s",
],
day4:[
    "Squats 20",
    "Triceps Dips 6",
    "Wide Arm Push-Ups 12",
    "Curtsy Lunges 26",
    "High Stepping 20 s",
    "Abdominal Crunches 25",
    "Reverse Crunches 25",
    "Plank 35 s",
],
day5:[
    "Rest Day"
],
day6:[
    "Push-Ups 8",
    "Lunges 30",
    "Curtsy Lunges 30",
    "High Stepping 24 s",
    "Side Plank Left 20 s",
    "Long Arm Crunches 30",
    "Bridge 20 s",
    "Side Plank Right 20 s",
],
day7: [
    "Push-Ups 8",
    "Side Lunges 30",
    "Cross Arm Crunches 30",
    "One Leg Bridge 30",
    "High Stepping 30 s",
    "Decline Push-Ups 8",
    "Wall Sit 45 s",
    "Plank 45 s",
],
day8:[
    "Bird Dog 36",
    "Push-Up and Rotation 10",
    "Step-Up onto Chair 34",
    "Burpees 10",
    "Incline Push-Ups 10",
    "Abdominal Crunches 35",
    "Side Plank Left 25 s",
    "Left Lunge Knee Hops 18",
    "Right Lunge Knee Hops 18",
    "Side Plank Right 25 s",
],
day9:[
    "Push-Ups 12",
    "Side Lunges 40",
    "Reverse Crunches 40",
    "Diamond Push-Ups 12",
    "High Stepping 34 s",
    "Long Arm Crunches 40",
    "Wall Sit 60 s",
    "Plank 55 s",
],
day10:[
    "Rest Day"
],  
day11:[
    "Jumping Jacks 25 s",
    "Push-Ups 16",
    "Squats 40",
    "Bird Dog 46",
    "Step-Up onto Chair 44",
    "Burpees 12",
    "Curtsy Lunges 40",
    "Incline Push-Ups 16",
    "Split Squat Right 23",
    "Split Squat Left 23",
    "Side Plank Left 30 s",
    "Long Arm Crunches 40",
    "Side Plank Right 30 s",
],
day12:[
    "Jumping Jacks 25 s",
    "Russian Twists 50",
    "Triceps Dips 16",
    "Step-Up onto Chair 50",
    "Lunges 40",
    "Curtsy Lunges 40",
    "High Stepping 24 s",
    "Knee Push-Ups 16",
    "Long Arm Crunches 40",
    "Left Lunge Knee Hops 25",
    "Right Lunge Knee Hops 25",
    "Plank 65 s"
],
day13:[
    "Squats 40",
    "Russian Twists 54",
    "Push-Up and Rotation 16",
    "Step-Up onto Chair 54",
    "Wide Arm Push-Ups 16",
    "Burpees 16",
    "Side Lunges 40",
    "Cross Arm Crunches 40",
    "High Stepping 30 s",
    "Side Plank Left 35 s",
    "Left Lunge Knee Hops 28",
    "Right Lunge Knee Hops 28",
    "Side Plank Right 35 s",
],
day14:[
    "Squats 40",
    "Tricips Dips 16",
    "Bird Dog 60",
    "Lunges 40",
    "Burpees 16",
    "Reverse Crunches 40",
    "Curtsy Lunges 40",
    "Split Squat Right 30",
    "Split Squat Left 30",
    "High Stepping 30 s",
    "Knee Push-Ups 16",
    "Plank 75 s",
],
day15: [
    "Rest Day"
]

};
  let workouts = []
  let current = 0;
  let isResting = false;
  let timeLeft = 30;
  let interval = null;

  
  const timerEl = document.getElementById("timer");
  const nameEl = document.getElementById("workout-name");
  const ding = document.getElementById("ding-sound");
  
  function startWorkout() {
    if (interval) return; // prevent double intervals
    const type = document.getElementById("workout-type").value;

    workouts = workoutRoutines[type];
    current = 0;
    isResting = false;
    timeLeft = 30;
    nextStep();
  }
  
  function stopWorkout() {
    clearInterval(interval);
    interval = null;
    current = 0;
    isResting = false;
    timeLeft = 30;
    timerEl.textContent = "00:00";
    nameEl.textContent = "Stopped.";
    nameEl.classList.remove("resting");
  }
  
  function skipWorkout() {
    clearInterval(interval);
    interval = null;
  
    if (!isResting) {
      // If we're in a workout, go to rest (simulate workout completion)
      isResting = true;
    } else {
      // If we're in rest, move to next workout
      isResting = false;
      current++;
    }
  
    nextStep();
  }
  
  
  function nextStep() {
    if (current >= workouts.length) {
      nameEl.textContent = "Workout complete!";
      timerEl.textContent = "00:00";
      ding.play();
      return;
    }
  
    if (!isResting) {
      nameEl.textContent = workouts[current];
      nameEl.classList.remove("resting");
      timeLeft = 30;
    } else {
      nameEl.textContent = "Rest";
      nameEl.classList.add("resting");
      timeLeft = 10;
    }
  
    ding.play();
  
    interval = setInterval(() => {
      timerEl.textContent = formatTime(timeLeft);
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(interval);
        interval = null;
        if (isResting) current++;
        isResting = !isResting;
        nextStep();
      }
    }, 1000);
  }
  
  function formatTime(sec) {
    return `00:${sec < 10 ? "0" : ""}${sec}`;
  }
  