$(document).ready(function(){$('#contact-form').validate({rules:{name:{minlength:2,required:true},email:{required:true,email:true},subject:{minlength:2,required:true},message:{minlength:2,required:true}},highlight:function(element){$(element).closest('.form-group').removeClass('success').addClass('error');},success:function(element){element.text('OK!').addClass('valid').closest('.form-group').removeClass('error').addClass('success');}});});