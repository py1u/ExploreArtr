import os 

def rename():
    
    folder = "portfolio_assets"
    for count, filename in enumerate(os.listdir(folder)):
        dst = f"Hostel {str(count)}.jpg"
        src =f"{folder}/{filename}"  # foldername/filename, if .py file is outside folder
        dst =f"{folder}/{dst}"
         
        # rename() function will
        # rename all the files
        os.rename(src, dst)
 
# Driver Code
if __name__ == '__main__':
     
    # Calling main() function
    rename()