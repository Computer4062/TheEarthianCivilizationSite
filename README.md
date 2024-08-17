-- JOURNAL --

23/07/2024

1. I signed up to miro.com and drew the wire frame for the homepage
2. I pushed it to the github dirrectory
3. I tried to recreate the rotating Earth model with THREE.js (I do not know anything about THREE.js, just saw people at codepen use it)
4. Realized that I can do it with pure CSS and watched a video on how to do it
5. Managed to make the rotating Earth part

24/07/2024

1. I wrote a summary on all of the features and started doing further research on it like finding API's to get data from and other information.
2. I also started a course on Udemy on making webpages.
3. I decided to focus on this project at night time and to focus on the Udemy course at day time.

25/07/2024

1. I continued on with the summary of all the features
2. I also highlighted the features that I believe would make customers want to visit the page over and over again.
3. I saw fit to remove the economic data feature as well because all of the API's I searched has data from 2 years ago.
4. I am thinking of doing a redesign to the home page as well.
5. Since it is the main page (navigational page) of the website I want it to look as good as possible.
6. I added a time zone converter feature as well ,but I was doubtful to wheather it should be added or not
7. Right now I think that I should replace it with a feature that allows for time conversion and a little blog post under it which provides people a history of time recording devices.
8. I also think that I should provide proper and attractive names to each feature because it will help with SEO.

26/07/2024

1. I redesigned the home page and I now think that the home page looks very much better
2. Before all the features were clamped up in one spot but now everything is more organized
3. I also added more features into the summary section
4. Iam also not doubtfull towards the addition of the time zone converter any more

27/07/2024

1. I redesigned the home page grid layout to make it more attractive
2. I added a HomePage Text.md file to write the text that is going to be in the home page
3. I worked on finding a good background and theme but I couldn't find any
4. I am wondering if I should just make all the wire frames and then decide the theme
5. I also asked for advice from others on the order in which I should do this
6. Progress on this site has been slow because I have been putting a lot of attention to the Udemy course from the morning to atleast 7PM
7. And the rest of the time is being spent on the website
8. Iam thinking of flipping that around now and spending the mornings on this site and the nights on Udemy course
9. I will prepare a scheduel for my self to manage time once I get up
10. If I do 2 sections a day I predict it would take me 21 days to get through the whole course

28/07/2024

1. I worked on defining the functionalities very well this time instead of focussing a lot on the design as the first part.
2. And it helped because it got right down to the details of what the website really needs to look like and in what ways users want to use the website and how I should desing it to meet the users use cases.

29/07/2024

1. I completed the charter document for the website and learned a lot myself.
2. I also started to make JSON files because the API's Iam going to use cannot provide me with all the information and some information doesn't need API's.
3. I have also started utilizing my AI slave Bard to write the JSON files so I can make the JSON files very quickly.

30/07/2024

1. I figured out that things like Capital cities, currency names and symbols, calling codes, and languages doesn't change that often so I created JSON files for them.
2. I haven't completed all the JSON files ,but I think it is a good idea for me to get started on the page designing process
3. I used Figma to design a home page.
4. The main trouble I had was to select a good theme
5. The theme that I first had in mind was too old fashioned and didn't fit in properly
6. But now I decided on a Theme that fills buttons, cards, icons and everything with gradient backgrounds
7. This theme is similar to the Microsoft theme
8. I also want to make the background look like spaces

31/07/2024

1. I spent the time making the homepage look really good
2. I also designed a little bit of the Calling codes page
3. I also watched a tutorial on how to use Figma
4. I watched the video after completing the home page ,but I should have watched it before using Figma
5. Because of that I realized a few mistakes in the way I designed the home page so I tore it down and redesigned it again
6. I only have one element in the homepage to complete now
7. I was also thinking of dirrectly getting to building the home page after designing it
8. Then after it is complete I will go to building the Calling codes page
9. So it is like refer and build

01/08/2024

1. I did the iterative developement tactic to build the homepage
2. There is still java script functionality to add ,but I was thinking of leaving it till the end
3. This is mainly because the API that shows the population only accepts 1000 requests per hour
4. And I want more
5. So I decided to store the value of the population at every increment on the server it self
6. So that when the maximum API calls are reached I can give the stored value instead
7. This would make things as accurate as possible
8. I also realized that on a mobile the text in the population data was actually too big so I have to fix that
9. I also realized that the API keys should be kept a secret so I created an env file to store them
10. There is a problem with npm and so I couldn't complete the rest of the procedure
11. Iam currently also doing a Udemy course and they will teach us about Express so that will help even more
12. I also often tend to worry that I will not have enough time to complete this site
13. The website might "look" modern but it really is a website that belongs to the 19th century

02/08/2024

1. I started upon the calling codes page
2. I made it in Figma and tried using a plugin to get the code but the output was messed up
3. The application actually ends up looking a lot more different from that of the prototy but at the same time a lot more better.
4. So I wrote the code my self
5. I only managed to complete half the calling codes page
6. Most of the code in the calling codes page is just going to be repeated so I don't think the rest of the features in the countries section will take much time
7. I also want to change the directory structure because I don't think it is appropriate for me to put the charter documents in the same place as the code
8. So I focussed on putting the code in public and src dirrectories
9. I was also thinking of creating a routing system to route through the pages with Express

03/08/2024

1. I completed the sort and filter functions
2. I also made the page a bit more compatible for a mobile phone
3. There still need to be changes like the table should stop shrinking
4. I also need to edit the Figma page
5. I initially wanted to put a notification card like thing that pops out for the sort and filter options but Bootstrap did not have them and Tailwind is paid
6. So I decided to make something similar to a notification which is a div underneth the search bar that can be hidden and unhidden when a button is pressed

04/08/2024

1. I completed editing the Figma page
2. I also completed the design of the find currencies page
3. It was very similar to the find calling codes page so their was only a lot of copying and pasting to do
4. I also completed the functionality of the sorting option in the calling codes section
5. I was able to sort all countries by alphabetical order or by calling codes
6. I was planning on designing everything and touching upon the functionalities in the end 
7. but I decideed to tap on the functionalities for the first one (calling codes section) just to check if it was feasible
8. I will also try adding the filter options for the calling codes section and once again begin focusing upon building of the other pages.

05/08/2024

1. I was able to complete the continents filter option so Iam able to filter all the continents
2. The Java Script file also became very big and hard to navigate through so I seperated the code into 4 files
3. For storing the filter functions, sorting functions, common variables, and one final one for connecting the HTML elements to the functions
4. Iam also going to create another file for searching
5. I still have to complete the filtering by digits option
6. I found a way to filter by digits so that would not take much time either
7. Their is a lot of JavaScript in this web application
8. After I complete the search option I will go onto completing the other features in the countries link
9. They will be completed quickly because majority of the logic needed has been done in the Calling Codes page
10. I have also developed a scheduel for the past few days where I spend time from morning to 3:00PM on this web application

06/08/2024

1. I had to rewrite the entier sort Functions file and most of the filter functions file
2. In the process I completed the filter and sort options
3. I also started coding the search bar which will be completed very quickly

4. Its 10:53pm and I just completed the CallingCodes page completely
5. I have copied some files in as well
6. I just have to implement the logic for the sorting, filtering, and searching

07/08/2024

1. I completed both the Currencies page and the Demonyms page more quickly than I thought
2. Iam now in the time zones page
3. I found out that we can find out the time in other countries without using an API
4. So I created a JSON file with the IANA time formats of all the countries in the world
5. I will begin on using this data to complete the time converter and the current country times table
6. For the time conversions I will use an external JS library

08/08/2024

1. I completed the time conversion feature
2. I used the Moment.js library to convert times
3. I still have to complete the table rendering
4. I figured out that the time zone for Qatar just does not work
5. Because of this I stopped using Moment.js to get the current date and time and instead used pure JS
6. But I encountered the same issue
7. So now I am thinking of either finding a different time zone for those countries or just having to skip them
8. I also have to recheck the time conversion feature to look out for invalid time zones

09/08/2024

1. I just removed off 5 countries from TimeZones.json file because information about them wasn't available at Moment.js
2. I also obtained the time data from Moment.js instead of pure JS.
3. I completed the filter times option and now I also have the filter continents option to complete.

10/08/2024

1. I initially got almost all the features done upto the search level
2. But then errors started to show up
3. I had trouble figuring out how these errors even came up in the first place because of how "unclean" my code was
4. So I decided to write the entier Time Conversions page functionality from the beginning
5. I also figured out that there is an order which we should follow when writing these features that will yield the most out of our time
6. I rewrote the filter continents and the filter time functions
7. I used a lot of help from AI

11/08/2024

1. I made it so that when the render function is called the table will be generated, sorted and filtered.
2. This way everything worked really smoothly.
3. I also edited all the other pages under the countries section to work this way.
4. I also completed the search function very quickly.
5. I now have to do the time conversions feature.
6. Most of the neccessary logic is completed.
7. Now I just have to link the interface to that logic.
8. It turned out this way because I decided to rewrite everything except the Converter.js file which holds the functions for time conversion logic.
10. I decided to spend the night completing the rest of the time conversions page.
11. The entier conversions page was completed.
12. I also started on the languages spoken page and it is more challenging than I thought.

12/08/2024

1. I completed the languages spoken page
2. I also updated the search bar in every page to have some level of live search
3. The columns in the tables actually looks misaligned and now I need to focus on fixing that
4. I think it would have been much better if I had drawn the flow charts of how the sort, filter and search options work way before I started coding
5. I also have to update the Figma prototypes
6. I can now get started on the rest of the pages

13/08/2024

1. I completed all of the pages in the countries section
2. But I encounter a huge flaw which must be solved which is that there is a large loading time when a page needs to be loaded
3. I also started an express server for the website

14/08/2024

1. Managed to find out why there is a large loading time
2. It was because of an invalid file I have put I corrected it and the website works fine now
3. I recorded the page loading times in localhost ,but when I enter a page and try to exit back to the homepage there is a large load time
4. I think this is because the server is trying to render population count from the population API
5. I still haven't found a proper solution for the 1000req/h limitation
6. I started searching for web hosting services and domain name providers
7. I wrote down a list of all of them and selected what I thought was the best ones for me
8. I will take advice and look further into this tommorow

15/08/2024

1. I made the app more mobile friendly
2. I found out that there are some other spots which has to be made mobile friendly so I decided to focus on them as well
3. I also added a new branch called download-feature and started working on it
4. But I realized that right now the top priority should be to host the website
5. So I decided to work on it later (once the website is hosted)
6. I will make the website more mobile friendly, and host it by tommorow.

16/08/2024

1. The whole day I tried to deploy it to Vercel
2. I also had to change all the links so that it would be viable for publishing on Vercel
3. The homepage runs as intended but the problem is really that the server doesn't start
4. I managed to get the server to start but that wasn't enough because the server then couldnot find the modules

17/08/2024

1. Today I started working on the website at 3PM
2. I managed to deploy the web site and it works well
3. But I had to deploy the web site in static mode
4. I created a different branch called dev for my express server
5. I started working in the dev branch and by watching a YouTube video I managed to fix the broken footer problem
6. Now Iam working on Getting a loading sign
7. This is important because users will be confused other wise
8. I also worked on enlargening the filter card so that the elements appear properly