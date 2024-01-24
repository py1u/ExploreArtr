html_code = '''
<div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
    <div class="card border-0 rounded-4 mb-3">
        {img_tag}
        <div class="card-user"> 
            <div class="card-user mt-1 ms-3"><strong>ArtrCrab</strong></div>
            <h5 class="card-text mb-1 ms-3">Name of the art piece or small comment</h5>
        </div> 
    </div>
</div>
'''

image_sources = [
"assets/img17.jpg",
"assets/img5.jpg",
"assets/img29.jpg",
"assets/img8.jpg",
"assets/img12.jpg",
"assets/img24.jpg",
"assets/img2.jpg",
"assets/img19.jpg",
"assets/img21.jpg",
"assets/img14.jpg",
"assets/img4.jpg",
"assets/img30.jpg",
"assets/img10.jpg",
"assets/img25.jpg",
"assets/img11.jpg",
"assets/img1.jpg",
"assets/img6.jpg",
"assets/img27.jpg",
"assets/img16.jpg",
"assets/img22.jpg",
"assets/img13.jpg",
"assets/img9.jpg",
"assets/img20.jpg",
"assets/img7.jpg",
"assets/img18.jpg",
"assets/img23.jpg",
"assets/img3.jpg",
"assets/img26.jpg",
"assets/img15.jpg",
"assets/img28.jpg"
]

final_html = ''
for src in image_sources:
    img_tag = f'<img src="{src}" class="card-img-top rounded-4 cardy" alt="...">'
    final_html += html_code.format(img_tag=img_tag)

print(final_html)