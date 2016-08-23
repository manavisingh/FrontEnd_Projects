#This is my media.py file which contains the class Movie and its instance names.

import webbrowser

'''
This is the Movie class which takes in 7 arguments. Their instances
are created and used in this project implementing reusability of Classes.
'''

class Movie():
    
    '''
    This is the inbuilt init function which displays the instances of the Movie Class
    '''
    
    def __init__(self, title, movie_storyline, movie_poster, movie_youtube_url, movie_rating, movie_cast, more_info):
        self.title = title
        self.movie_storyline = movie_storyline
        self.movie_poster = movie_poster
        self.movie_youtube_url = movie_youtube_url
        self.movie_rating = movie_rating
        self.movie_cast = movie_cast
        self.more_info = more_info

    '''
    The show cast function uses the self.movie_cast instance to display the
    list of actors of the movies. print dark_knight.show_cast() to call the show cast function.
    '''
    
    def show_cast(self):
        for x in self.movie_cast:
            print x
        return ""

    '''
    The below function uses the instance self.movie_youtube_url to
    open the youtube trailer whose link is given in the entertainment.py file
    '''
    
    def show_trailer(self):
        print "Showing the movie Trailer, Enjoy!"
        webbrowser.open(self.movie_youtube_url)


        
