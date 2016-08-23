#This is my entertainment.py file which contains the list of my favourite movies and their information.
#Importing the html and media file which contain the page layout and the Movie Class resp.

import fresh_tomatoes
import media

# My favorite Movie page will contain 6 movies and their details

notebook = media.Movie("Notebook",
                       "A Love Story",
                       "http://orig12.deviantart.net/d8f3/f/2010/151/8/c/fan_poster_the_notebook_by_amidsummernights.jpg",
                       "https://www.youtube.com/watch?v=FC6biTjEyZw",
                       "4 (Out of 5)",
                       ["Ryan_Gosling","Rachel McAdams"],
                       "https://en.wikipedia.org/wiki/The_Notebook_(2004_film)")

titanic = media.Movie("Titanic",
                      "A tragic love story of a couple on a sinking ship",
                      "http://images5.fanpop.com/image/photos/28600000/Titanic-Poster-titanic-28607116-300-441.jpg",
                      "https://www.youtube.com/watch?v=OuSdU8tbcHY",
                      "4.5 (Out of 5)",
                      ["Kate Winslet","Leonardo DiCaprio"],
                      "https://en.wikipedia.org/wiki/Titanic_(1997_film)")

marley_and_me = media.Movie("Marley and Me",
                            "A story of a family that lived with a dog for 14 years, their lessons and relationships",
                            "https://www.movieposter.com/posters/archive/main/78/MPW-39214",
                            "https://www.youtube.com/watch?v=rZXwkO43UEk",
                            "4 (Out of 5)",
                            ["Jennifer Aniston","Owen Wilson"],
                            "https://en.wikipedia.org/wiki/Marley_%26_Me_(film)")

life_of_pi = media.Movie("Life Of Pi",
                         "Story of a boy and his fight against the odds is heightened by the company of a hyena and a male Bengal tiger.",
                         "http://www.joblo.com/newsimages1/Life-of-Pi_hope-poster_article.jpg",
                         "https://www.youtube.com/watch?v=j9Hjrs6WQ8M",
                         "4.5 (Out of 5)",
                         ["Suraj Sharma","Irfan Khan","Tabu"],
                         "https://en.wikipedia.org/wiki/Life_of_Pi_(film)")

iron_man = media.Movie("Iron Man3",
                       "Story of Tony Stark (iron man) who encounters a formidable foe called the Mandarin.",
                       "http://t0.gstatic.com/images?q=tbn:ANd9GcRLonM7bpdRGXJH75VkND-gHkSn4QXJZ108x7eKTQkCcNQ6xEVa",
                       "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc",
                       "4.5 (Out of 5)",
                       ["Robert Downey","Gwyneth Paltrow","Ben Kingsley"],
                       "https://en.wikipedia.org/wiki/Iron_Man_3")

dark_knight = media.Movie("The Dark Knight Rises",
                          "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace.",
                          "http://t1.gstatic.com/images?q=tbn:ANd9GcQSGF8_VbDqKF0B_4IQ0NF87VMDSy7_MPKryawR-qLnSIPQwo5z",
                          "https://www.youtube.com/watch?v=g8evyE9TuYk",
                          "4 (Out of 5)",
                          ["Tom hardy","Anne Hathaway","Christian Bale"],
                          "https://en.wikipedia.org/wiki/The_Dark_Knight_Rises")

# This is the movie list which is used by open_movies_page function called in the fresh_tomatoes.py file.

movies = [notebook,titanic,marley_and_me,life_of_pi,iron_man,dark_knight]

# Below, I am calling the open_movies_page which will direct me to the html file to display an onine page of my favorite movies.

print fresh_tomatoes.open_movies_page(movies)



