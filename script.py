def generate_html():
    html_code = '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image Gallery</title>
        <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
    </head>
    <body>
        <div class="container">
            <div class="row">
                {image_cards}
            </div>
        </div>
    </body>
    </html>
    '''
    return html_code

def save_html_file(html_code, filename="output.html"):
    with open(filename, "w") as file:
        file.write(html_code)
    print(f"HTML code saved to {filename}")

if __name__ == "__main__":
    html_code_template = '''
    <div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
        <div class="card border-0 rounded-4 mb-3" style="background-color: white;">
            {img_tag}
            <div class="card-user"> 
                <div class="card-user mt-1 ms-3"><strong></strong></div>
            </div> 
        </div>
    </div>
    '''

    image_sources = [
        "assets/img17.jpg", "assets/img5.jpg", "assets/img29.jpg", "assets/img8.jpg", "assets/img12.jpg",
        "assets/img24.jpg", "assets/img2.jpg", "assets/img19.jpg", "assets/img21.jpg", "assets/img14.jpg",
        "assets/img4.jpg", "assets/img30.jpg", "assets/img10.jpg", "assets/img25.jpg", "assets/img11.jpg",
        "assets/img1.jpg", "assets/img6.jpg", "assets/img27.jpg", "assets/img16.jpg", "assets/img22.jpg",
        "assets/img13.jpg", "assets/img9.jpg", "assets/img20.jpg", "assets/img7.jpg", "assets/img18.jpg",
        "assets/img23.jpg", "assets/img3.jpg", "assets/img26.jpg", "assets/img15.jpg", "assets/img28.jpg",
        "assets/img29.jpg", "assets/img30.jpg", "assets/img31.jpg", "assets/img32.jpg"
    ]

    final_image_cards = ''
    for src in image_sources:
        img_tag = f'<img src="{src}" class="card-img-top rounded-4 cardy" alt="...">'
        final_image_cards += html_code_template.format(img_tag=img_tag)

    html_page = generate_html().format(image_cards=final_image_cards)
    save_html_file(html_page)
