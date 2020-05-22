/* document ready */
$(document).ready(function(){


  // $.ajax({
  //   url: 'data.json',
  //   dataType: 'json',
  //   success: function(data) {
  //      var users = data;
  //   }
  //      });
  
  //      console.log(users);




$('.navigation').on('click','i.fa-bars',function(){
  setTimeout(function(){
    $('i.fa-bars').addClass('closed');
  },500);
  $('.navigation .nav-content').addClass('opened');
  $('.navigation').addClass('dark');
$('.page-content').addClass('move');

$('body').addClass('scroll-hidden');

});

$('.navigation').on('click','.nav-content i.fa-times',function(){
  $('.navigation .nav-content').removeClass('opened');
  setTimeout(function(){
    $('.navigation i.fa-bars').removeClass('closed');
  },500);
  $('body').removeClass('scroll-hidden');
  $('.navigation').removeClass('dark');
  $('.page-content').removeClass('move');

});
// NAVIGATION END



$('#phone-form').on('click', function(){
  var content;
  content = '<form action="" class="commentForm"><div class="form-group">';
  content += '<p><label>Phone Num</label></br><input type="text" class="form-control" placeholder="Enter phone number" name="number"/></p>';
  content += '<p class="radio-buttons"><label for="dolar"><input type="radio" name="radio" value="dolar">Dolar</label>';
  content += '<label for="euro"><input type="radio" id="radio" name="radio" value="euro">Euro</label><br></p><p class="radio_error" name="radio_error"></p>';
  content += '<p><label><input type="checkbox" value="terms" id="checkbox" name="checkbox"/>I agree to the terms and conditions.</label></p>';
  content += '<p><button type="submit" value="submit" class="btn btn-success green" name="submit">Create account</button></p>';
  content += '</div></form>';
  $('.form-wrap.col-md-3').html(content);


  $(".commentForm").validate({
    rules: {
      radio: { required:true },
      number: "required",
      checkbox: "required",
      number: {
        required: true,
        number: true,
        minlength: 6,
        maxlength: 10
      },
    },
    messages: {
      radio_error: "Please select values",
      number: "Please enter a valid phone number",
      checkbox: "Please accept our policy",
      errorPlacement: function(error, element) 
      {
          if ( element.is(":radio") ) 
          {
              error.appendTo(element.parents('.container'));
          }
          else 
          { // This is the default behavior 
              error.insertAfter( element );
          }
       }
    },
    submitHandler: function (form) { // for demo
      $('.loader').css('display','block');
      $('.form-wrap.col-md-3').css('opacity','0.1');
      setTimeout(function(){
        $('.loader').css('display','none');

        $('.form-wrap.col-md-3').css('opacity','1');
      var success = '<p class="success_message"> Account successfully created </p>';
        $('.form-wrap.col-md-3').html(success);
        }, 3000);

      return false;
    }
  });


});


















$('#email-form').on('click', function(){
  var content;
  content = '<form action="" class="commentForm"><div class="form-group">';
  content += '<p><label>Email</label></br><input type="email" class="form-control" placeholder="Enter email" id="email" name="email"/></p>';
  content += '<p class="radio-buttons"><label for="dolar"><input type="radio" name="radio" value="dolar">Dolar</label>';
  content += '<label for="euro"><input type="radio" id="radio" name="radio" value="euro">Euro</label><br></p><p class="radio_error" name="radio_error"></p>';
  content += '<p><label><input type="checkbox" value="terms" id="checkbox" name="checkbox"/>I agree to the terms and conditions.</label></p>';
  content += '<p><button type="submit" value="submit" class="btn btn-success green" name="submit">Create account</button></p>';
  content += '</div></form>';
  $('.form-wrap.col-md-3').html(content);


    $(".commentForm").validate({
      rules: {
        radio: { required:true },
        email: "required",
        checkbox: "required",
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        radio_error: "Please select values",
        email: "Please enter a valid email address",
        checkbox: "Please accept our policy",
        errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo(element.parents('.container'));
            }
            else 
            { // This is the default behavior 
                error.insertAfter( element );
            }
         }
      },
      submitHandler: function (form) { // for demo
        $('.loader').css('display','block');
        $('.form-wrap.col-md-3').css('opacity','0.1');
        setTimeout(function(){
          $('.loader').css('display','none');

          $('.form-wrap.col-md-3').css('opacity','1');
        var success = '<p class="success_message"> Account successfully created </p>';
          $('.form-wrap.col-md-3').html(success);
          }, 3000);

        return false;
      }
    });
  

});













$('.sign-in').on('click', function(){



  var content;
  content = '<p class="login-info">Login with <span class="login-email green">email</span> or <span class="login-number green">mobile number</span></p>';
  $('.form-wrap.col-md-3').html(content);


  $('.login-email.green').on('click', function(){
  var content;
  content = '<form action="" class="commentForm"><div class="form-group">';
  content += '<p><label>Email</label></br><input type="email" class="form-control" placeholder="Enter email" id="email" name="email"/></p>';
  content += '<p><label>Password</label></br><input type="password" class="form-control" placeholder="Enter password" name="password"/></p>';
  content += '<p><button type="submit" value="submit" class="btn btn-success green" name="submit">Login</button></p>';
  content += '</div></form>';
  $('.form-wrap.col-md-3').html(content);
  $(".commentForm").validate({
    rules: {
      password: "required",
      email: "required",
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      password: "Please enter a valid password",
      email: "Please enter a valid email address",
      errorPlacement: function(error, element) 
      {
          if ( element.is(":radio") ) 
          {
              error.appendTo(element.parents('.container'));
          }
          else 
          { // This is the default behavior 
              error.insertAfter( element );
          }
       }
    },
    submitHandler: function (form) { 
      $('.loader').css('display','block');
      $('.form-wrap.col-md-3').css('opacity','0.1');
      setTimeout(function(){
        $('.loader').css('display','none');

        $('.form-wrap.col-md-3').css('opacity','1');
      var success = '<p class="success_message"> You are successfully logged in </p>';
        $('.form-wrap.col-md-3').html(success);
        }, 3000);

      return false;
    }
  });
  });


  $('.login-number.green').on('click', function(){
    var content;
    content = '<form action="" class="commentForm"><div class="form-group">';
  content += '<p><label>Phone Num</label></br><input type="text" class="form-control" placeholder="Enter phone number" name="number"/></p>';
  content += '<p><label>Password</label></br><input type="password" class="form-control" placeholder="Enter password" name="password"/></p>';
    content += '<p><button type="submit" value="submit" class="btn btn-success green" name="submit">Login</button></p>';
    content += '</div></form>';
    $('.form-wrap.col-md-3').html(content);

    $(".commentForm").validate({
      rules: {
        password: "required",
        number: "required",
        number: {
          required: true,
          number: true,
          minlength: 6,
          maxlength: 10
        },
      },
      messages: {
        password: "Please enter a valid password",
        number: "Please enter a valid number",
        errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") ) 
            {
                error.appendTo(element.parents('.container'));
            }
            else 
            { // This is the default behavior 
                error.insertAfter( element );
            }
         }
      },
      submitHandler: function (form) { 
        $('.loader').css('display','block');
        $('.form-wrap.col-md-3').css('opacity','0.1');
        setTimeout(function(){
          $('.loader').css('display','none');
  
          $('.form-wrap.col-md-3').css('opacity','1');
        var success = '<p class="success_message"> You are successfully logged in </p>';
          $('.form-wrap.col-md-3').html(success);
          }, 3000);
  
        return false;
      }
    });

    });



})





});/*document ready END */








      