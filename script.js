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
    "High Knees in Place",
    "Lunges",
    "Push-Up and Rotation",
    "Side Plank (Left)"
],
abs:[
    "Sit-Ups",
    "Leg Raises",
    "Russian Twists",
    "Bicycle Crunches",
    "Plank",
    "Flutter Kicks",
    "Side Plank (Left)",
    "Side Plank (Right)",
    "Mountain Climbers",
    "Toe Touches",
    "Reverse Crunches",
    "V-Ups"
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
  