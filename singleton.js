function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  //to store reference of our only instance
  let pManager;

  //instance creation
  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  //getProcessManager is considered as object's property (a getter) and arguments passed
  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager == processManager2);
