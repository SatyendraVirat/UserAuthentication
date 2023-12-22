-------------------------------------FULLSTACK APP-------------------------------
FullStack App consist of following two independent application 
   1- SMS_API_SpringBoot_Backend - This is backend application application developed using spring boot.
                                   This is independent developed by backend developers ans REST endpoints are exposed.
    
   2- 1_SMSApp_v1 - This is front-end application developed using Angular
                    This is responsible for using GUI and Consumed end points developed by Backend application.
                  
   Both the application are independently developed and deployed 

--------------------------CORS--------------------------------
CORS stands for Cross Origin Resource Sharing.
Our client application is running on different ports and server.
Hence when client request for a resource we are being shown an error.
CORS Policy issue.
This is a security policy to make sure our resources are safe & not accessed outsude the domain.
In order to fix this server must give access to client domain


Assignment 5
    when user is going to login using angular application
    Username and Password must be checked with the database on the backend.
    Show appropriate error message if the creadentials are not matched
    Also implement register user and update profile usecase.
    Share github link
