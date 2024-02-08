server link:{
    courses: https://assignment-10-server-silk.vercel.app/courses,
    topics: https://assignment-10-server-silk.vercel.app/topics
}
website link:  https://tech-ed-8a752.web.app

Websites functionality:
-The project has a navbar with tags home, courses, blogs, FAQ, login and register.

-By clicking on the courses tag the user goes to the courses seciton. The courses section is divided into two sections, by clicking on any tags in the sidebar it shows the course details, here we are loading the course data with an api and also on the sidebar we are using another api to load the topic names.

-In the course detail page at the bottom part we are showing a button named get premium access. Clicking the button takes the user to a checkout route. But if the user is not logged in, we are taking them to the login page. Here we are using the private route system.

-once the user logs in he will be redirected to the checkout page. On the checkout page we are also using another api to load the data.

-On the course details page clicking on the button next to the topic name we are allowing the user to print the pdf file.



Frameworks/libraries:
-Flowbite(not installed)
-DaisyUI
-tailwind
-React js
-express js
