(function(){
  'use strict'

  angular.module('quoteBook').controller('mainCtrl', mainCtrl);

    function mainCtrl(dataSvc) {
      var vm = this;

      vm.quotes = dataSvc.getQuotes();
      vm.addQuote = addQuote;
      vm.deleleText = deleteText;

////////////////////////////////////////////////////

      function deleteText(textToDelete) { debugger;
        dataSvc.removeData(textToDelete);
      }

      function addQuote(){
        var newQuote = {
          text:vm.newQuoteText,
          author:vm.newQuoteAuthor
        }
        if(dataSvc.addData(newQuote)) {
          vm.newQuoteText = '';
          vm.newQuoteAuthor = '';
        }
      }

    }

  })()
