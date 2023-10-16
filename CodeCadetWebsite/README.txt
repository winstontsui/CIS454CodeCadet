This is a cry for help

To run the server locally: 

1. Go to Terminal and change directory to (..\CIS454CodeCadet\CodeCadetWebsite)

2. Activate the virtual environment by typing Scripts\activate

3. Change the directory to (..\CIS454CodeCadet\CodeCadetWebsite\src)

4. I'm not sure if you have to but to install all libraries type "pip install -r requirements.txt"

5. run "python manage.py runserver"

6. Write the url (numbers) after the http on the line of "Starting development server at ...", and type them into your web browser.
Should be something like: 127.0.0.1:8000/


Notes:

If you're adding any libraries to the virtual environment, 
in the src directory please type "pip freeze > requirements.txt" afterward. 
There are a lot of libraries I have installed that I am certain we do not need but I will probably not clean it up lol




Using Sublime Text: 

If you're working on the website, I highly recommend Sublime Text. Download link: https://www.sublimetext.com/

After installing, run the program and go to File -> Open Folder -> (..\CIS454CodeCadet\CodeCadetWebsite\src)


FOR WINSTON:

I created a folder called "personal" and added it to the apps already on the website, create the main page off there