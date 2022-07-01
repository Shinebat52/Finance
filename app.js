var uiController = (function () {})()
var financeController = (function () {})()
var appController = (function (uiCntrler, finCntrler) {
  var addInformation = function () {
    console.log('hello')
  }
  document.querySelector('.add__btn').addEventListener('click', function () {
    addInformation()
  })
  document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13 || event.which == 13) {
      addInformation()
    }
  })
})(uiController, financeController)
