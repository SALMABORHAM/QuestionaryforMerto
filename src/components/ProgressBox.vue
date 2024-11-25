<template>
  <div class="progress-box">
    <slot></slot> 
  </div>
</template>

<script>
export default {
  name: "ProgressBox",
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.progress-box {
  width: 31.23vw; 
  height: 1vh; 
  color:transparent;
  border-radius: 10px; /* Rounded corners */
  position: absolute; /* For inner absolute positioning */
  top:4.410vh;
  left:48.36;
  overflow: hidden; /* Hide overflow of the fill */
  box-shadow: 0 0 0 2px black; /* Black outline with 2px width */
  padding: 1px;
  transform: translate(110%); /* Adjust to center */
  z-index: 10001;
}


</style>

