$(document).ready(function() {
  window.dancers = [];
  

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function() {
    var firstDancer, lastDancer;
    //store the index for the last dancer added which will serve and the anchor position spread of lineup
    var lastDancerIndex = window.dancers.length - 1; 
    //iterate over the window.dancers array in reverse order
    //set a starting top value and left value and increment values to create relative positioning using pythagorean theorem
    //and perspective sizing adjustments to height and width values
    for (let i = lastDancerIndex, top = 450, left = 500, height = 10, width = 10; 
      i >= 0; 
      i--, top += 25, left -= 65, height += 5, width += 2) {
      // firstDancer = $(window.dancers[0].$node);
      lastDancer = $(window.dancers[lastDancerIndex].$node);
      // console.log('last:', lastDancer.position(), 'first:', firstDancer.position());
      
      //set the pixel coordinates for where to anchor the line of dancers
      lastDancer.css({top: '171px', left: '544px'});

      $(window.dancers[i].$node).animate({
        left: left + 'px',
        top: top + 'px',
        height: height + '%',
        width: width + '%'
      }, 5000);
    }
  });

  // $('.lineUpButton').on('click', function() {
  //   console.log(window.dancers);
  //   for (var i = 0, top = 15; i < window.dancers.length; i++, top += 5) {
  //     if ($(window.dancers[i].$node.className === 'C3PO')) {
  //       $(window.dancers[i].$node).animate({
  //         left: '0%',
  //         top: top + '%'
  //       }, 1000);
  //     } 
  //   }
  // });

  // $('.lineUpC3POs').on('click', function(event) {
  //   var targetItems = $(this).data('dancer-maker-function-name');
  //   console.log(targetItems);
  //   //listen for click event on element
  //   //grab the elements data attribute value dancerMakerFunctionName
  //   //loop over the window.dancers
  //   for(var i = 0, top = 15; i < window.dancers.length; i++, top += 5) {
  //     if ($(window.dancers[i].$node.data === targetItems)) {
  //       console.log($(window.dancers[i].$node.data));
  //       $(window.dancers[i].$node).animate({
  //         left: '80%',
  //         top: top + '%'  
  //       }, 1000);
  //     }
  //   }  
  // });




    
});

