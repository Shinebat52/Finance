var uiController = (function () {})()
var financeController = (function () {})()
var appController = (function (uiCntrler, finCntrler) {
  document.querySelector('.add__btn').addEventListener('click', function () {
    console.log('hello')
  })
  document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13 || event.which == 13) console.log('enter daragdlaa')
  })
})(uiController, financeController)
