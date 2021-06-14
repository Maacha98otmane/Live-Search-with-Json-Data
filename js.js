$(document).ready(function(){
    $('#txt-search').keyup(function(){
                var search = $(this).val();
                if(search === '')  {
                    $('#filter-records').html('');
                    return;
                }
                
                var regex = new RegExp(search, "i");
                console.log(regex)
                var output = '<div class="row">';
                var count = 1;
                $.getJSON('data.json',function(data){
                  $.each(data, function(key, value){
                    if ((value.student_name.search(regex) != -1)) {
                        console.log(value.student_name.search(regex))
                      output += '<div class="col-md-6 well">';
                      output += '<div class="col-md-3"><img class="img-responsive" src="'+value.profile_image+'" alt="'+ value.student_name +'" /></div>';
                      output += '<div class="col-md-7">';
                      output += '<h5>' + value.student_name + '</h5>';
                      output += '<p>'+ value.student_number + '</p>'
                      output += '</div>';
                      output += '</div>';
                      if(count%2 == 0){
                        output += '</div><div class="row">'
                      }
                      count++;
                    }
                  });
                  output += '</div>';
                  $('#filter-records').html(output);
            });
        });
      });