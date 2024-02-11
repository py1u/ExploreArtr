
        // Get the container element
        var container = document.getElementById("imageBlocksContainer");

        // Generate 30 image blocks
        for (var i = 1; i <= 30; i++) {
            // Create the image source
            var imageSrc = "assets/img" + i + ".jpg";

            // Create the image block
            var imageBlock = document.createElement("div");
            imageBlock.className = "col-xs-6 col-sm-6 col-md-4 col-lg-3";
            imageBlock.innerHTML = `
                <div class="card border-0 rounded-4 mb-3">
                    <img src="${imageSrc}" class="card-img-top rounded-4 cardy" alt="...">
                    <div class="card-user">
                        <div class="card-user mt-1 ms-3"><strong>ArtrCrab</strong></div>
                        <h5 class="card-text mb-1 ms-3">Name of the art piece or small comment</h5>
                    </div>
                </div>
            `;

            // Append the image block to the container
            container.appendChild(imageBlock);
        }

        $(function(){
            var str = '#len'; //increment by 1 up to 1-nelemnts
            $(document).ready(function(){
              var i, stop;
              i = 1;
              stop = 4; //num elements
              setInterval(function(){
                if (i > stop){
                  return;
                }
                $('#len'+(i++)).toggleClass('bounce');
              }, 500)
            });
          });