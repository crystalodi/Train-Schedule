# Train Schedule

Train Schedule is an application that captures Train Name, Train Destination, Frequency in minutes, and Arrival of First Train and stores it in a database for later viewing.

## Live Version

Go [here](https://crystalodi.github.io/Train-Schedule/) to view the app. 

## About the Application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

GIT - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing

Open your terminal and clone [this](https://github.com/crystalodi/Train-Schedule.git) repository to your computer. 

```
git clone https://github.com/crystalodi/Train-Schedule.git

```

Navigate to the `/Train-Schedule` directory with your terminal

```
cd Train-Schedule
```

Open file explorer from the `/Train-Schedule` directory

```
explorer .
```

Open the `index.html` file by double clicking on it. The app will open in a web browser and should look like this:
![Home](https://raw.githubusercontent.com/crystalodi/Train-Schedule/master/assets/images/home.png)

### Folder Structure

After following the instructions in the installation section, the contents of the `/Train-Schedule` will look like this


```
│   index.html
│   README.md
│
└───assets
    └───javascript
            app.js
```
* `index.html` Contains the ui for the front end. Contains table to display train information and form to insert train information into firebase database.
* `assets/javascript/app.js` Contains logic to load all train schedule information from firebase database on after the app is done loading and calculates Next Train Arrival using MomentJS. Also contains logic to insert new train into firebase database after Add Train button is clicked.

## How to Use

### Adding a Train

Fill out Train Name, Destination, First Train Time, and Frequency in minutes fields in form below Train Schedule table

![Fill out form](https://raw.githubusercontent.com/crystalodi/Train-Schedule/master/assets/images/add_train_1.png)

Press the "Add Train" button and the newly added train should display in the Train Schedule table.

![Added Train](https://raw.githubusercontent.com/crystalodi/Train-Schedule/master/assets/images/add_train_2.png)

## Built With

* HTML
* jQuery
* JavaScript
* Materialize CSS - CSS Framework used to style page.
* Google Firebase - Database that stores train schedule and updates it real time when a train is added.
* MomentJS - Javascript Library for time conversion and calculating when the next train will arrive.

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* Google Firebase Documentation
* MomentJS Documentation

