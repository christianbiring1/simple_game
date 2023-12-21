function Timer() {
  let startTime,
    stopTime,
    is_running,
    duration = 0;

  this.start = function () {
    if(is_running) return;

    is_running = true;
    startTime = new Date();
  };


  this.stop = function() {
    if(!is_running) return;

    is_running = false;
    stopTime = new Date();

    const seconds = stopTime.getTime() - startTime.getTime() / 1000

    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    stopTime = null;
    is_running = false;
    duration = 0;
  }

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration
    }
  })
}

export default new Timer();
