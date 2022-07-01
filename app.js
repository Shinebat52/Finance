var uiController = (function () {
  var DOM = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    addInput: function () {
      return {
        type: document.querySelector(DOM.inputType).value,
        description: document.querySelector(DOM.inputDescription).value,
        value: document.querySelector(DOM.inputValue).value,
      };
    },
    DomShortcut: function () {
      return DOM;
    },
  };
})();
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    incExp: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();
var appController = (function (uiCntrler, finCntrler) {
  var addInformation = function () {
    console.log(uiCntrler.addInput());
  };
  var setupEventListener = function () {
    var DOM = uiCntrler.DomShortcut();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      addInformation();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode == 13 || event.which == 13) {
        addInformation();
      }
    });
  };
  return {
    init: function () {
      console.log("app started");
      setupEventListener();
    },
  };
})(uiController, financeController);
appController.init();
