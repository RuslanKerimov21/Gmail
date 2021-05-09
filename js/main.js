// //Vue.config.keyCodes.backspace = 8
// var bottomSheet = Vue.component('bottomSheet', Vue.extend({
// 	template: '#bottomSheet-template',
// 	props: ['show', 'onClose'],
// 	data(){
//     return {
			
//     }
//   },
// 	computed: {
		
// 	},
// 	methods: {
// 		close () {
// 			this.onClose()
// 		}
// 	},
// 	ready: function () {
//     document.addEventListener('keydown', (e) => {
//       if (this.show && e.keyCode === 27) {
//         this.onClose()
//       }
//     })
//   }
// }))

// var app = new Vue({
//   el:'#app',
//   data(){
//     return{
// 			open: true
//     }
//   },
// 	methods: {
// 		closeBottom () {
// 			console.log("close")
// 			this.open = false
// 		},
// 		openBottom () {
// 			this.open = true
// 		}
// 	}
// })
$('#triger').on('click', function (event){
	$('.bottom-sheet').toggleClass('open');
	$('body').toggleClass('lock');
});
$(function(){
    $(".list-triger").on("click","li",function(){
      $("li").removeClass("active"),
      $(this).addClass("active");
      let filter = $("[data-filter]");
      filter.on("click", function(event){
        event.preventDefault();
        let cat = $(this).data('filter');
        $("[data-cat]").each(function(){
          let workCat = $(this).data('cat');
          if(workCat != cat){
            $(this).addClass('hide');
          }
          else{
            $(this).removeClass('hide');
          }
        })
      });
    });
})
$(document).ready(function() {
	$("#elastic").keyup(function () {
	  var searchTerm = $("#elastic").val();
	  var listItem = $('.dialog ul').children('li');
	  var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
	$.extend($.expr[':'], {'containsi': function(elem, i, match, array){
		  return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	  }
	});
	$(".dialog ul li").not(":containsi('" + searchSplit + "')").each(function(e){
	  $(this).attr('visible','false');
	});
	$(".dialog ul li:containsi('" + searchSplit + "')").each(function(e){
	  $(this).attr('visible','true');
	});
	var jobCount = $('.dialog ul li[visible="true"]').length;
	  $('.counter').text(jobCount + ' item');
  
	if(jobCount == '0') {$('.no-result').show();}
	  else {$('.no-result').hide();}
	});
});