/* $(function(){

    $('#addtask').click(function(){
        let task=$('#newtask').val()
        let item=$('<li>')
        item.text(task)
        $('#tasklist').append(item)
    })

   



}) */
/* 
$(() =>
  $('body')
    .append($('<input>').attr('id', 'newtask'))
    .append(
      $('<button>')
        .text('ADD')
        .click(() => 
          $('#tasklist').append(
            $('<li>')
            .append($('<span>').text($('#newtask').val()))
            .append(
                $('<button>')
                  .text('X')
                  .click((e)=> $(e.target).parent().remove())
            )
             .append(
                $('<button>')
                .text('up')
                .click((e) =>
                $(e.target).parent()
                     .insertAfter($(e.target).parent().next())
            )
        )
        
            .append($('<button>').text('down'))
        )
    )
)
    .append($('<ul>').attr('id', 'tasklist'))
)
 */


$(() => 
$('body')
.append($('<input>').attr('id', 'newtask'))
.append(
  $('<button>')
    .text('ADD')
    .click(() => 
      $('#tasklist').append(
        $('<li>')
        .append(
            $('<button>')
                .text('X')
                .click((e) => $(e.target).parent().remove())
        )
        .append(
          $('<button>')
            .attr('class', 'down-btn')
            .text('⬇️')
            .click((e) => 
              $(e.target).parent()
                .insertAfter($(e.target).parent().next())
            )
        )
        .append(
          $('<button>')
            .attr('class', 'up-btn')
            .text('⬆️')
            .click((e) => 
              $(e.target).parent()
                .insertBefore($(e.target).parent().prev())
            )
        )
        .append($('<span>').text($('#newtask').val()))
      )
    )
)
.append(
  $('<ul>')
    .attr('id', 'tasklist')
)
)