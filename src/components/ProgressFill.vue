<template>
    <div class="progress-fill" :style="{ width: progress + '%' }">
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgressFill",
    props: {
      progress: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-fill {
    height: 100%;
    background-color: black; /* Fill color */
    position: absolute; /* Align with the container */
    top: 0;
    left: 0;
    transition: width 0.5s ease; /* Smooth fill effect */
    /* justify-content: center;
    align-items: center; */
  }
  
  .progress-text {
    color: #101820;
    /* position: fixed; */
    position: absolute;
    right: -50px;
    /* right: 10px; */
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    font-weight: bold;
    
  }
  
  </style>
  