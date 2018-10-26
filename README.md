# realtime-sockets-rxjs
A realtime application created using WebSockets, RethinkDB, RxJs, Node.js, React.js, Material-UI

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


### Description:

A user can add a new drawing and it'll immediately display in the list of drawings for all other users of the app. A user can select a drawing and draw on it, or other uses that have the same drawing open will see what's being drawn in near real time.

## Features:

* Reconnecting When Connection to Server Is Interrupted.
* Publishing Offline Changes to the Server After Reconnecting.
* Improving the Rendering Time of the Drawing Component (RxJS Streams).

#

### Challenges:

* This would be very difficult to build using an HTTP and REST service because the app would constantly have to call the server for information, even if no information changed. Every time the user would experience latency as a new request is sent to the server before the response comes back.  


### Solution
* ``` WebSockets (socket.io) ```, allowing the service to send events to it as they occur, allowing the app to update in close to real time.

* ``` React ``` is extremely well-geared towards real-time apps because of the way that it efficiently rerenders based on its dependencies being updated, subscribing to events coming from the server and updating your component stack, resulting in your components updating in close to real time.

* ``` RethinkDB ``` forlive queries, meaning you can open up a query to the DB and it'll notify you if the values changed or any new values matching your query are saved to the DB, live query functionality toscale sockets out over multiple servers to subscribe to the changes on a drawing from one WebSocket server while a user's drawing changes are saved through another WebSocket server. 

* ``` RxJS ``` When working with real-time stacks, in order to to deal with streams of events coming in and going out of your app and services. That's what helps you with. It gives a better way to deal with streams.

* ``` Node.js ``` Event driven programming language.

#

### Installation:

* ``` npm start ``` on client directory.

* ``` npm start ``` on server directory.

* ``` rethinkdb ``` on terminal if you have rethinkdb installed.

* ``` rethinkdb ``` server runs on ``` localhost:8080 ``` , go to ``` localhost:8080 ``` create a db ``` realtime ```, and then create two tables namely ``` drawings ``` and ``` lines ```.


* Now you are good to go!
* Open an issue if you are not been able to folow up.


#




![Alt Text](https://github.com/divyanshu-rawat/realtime-sockets-rxjs/blob/master/collection/screencast.gif)

