function displayCalendar() {

    var htmlContent = "";
    var FebNumberOfDays = "";
    var counter = 1;

    var dateNow = new Date();
    var month = dateNow.getMonth();

    var nextMonth = month + 1; //+1; //Used to match up the current month with the correct start date.
    var prevMonth = month - 1;
    var day = dateNow.getDate();
    var year = dateNow.getFullYear();

    // names of months and week days.
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]

    //Determing if February (28,or 29)  
    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            FebNumberOfDays = 29;
        } else {
            FebNumberOfDays = 28;
        }
    }

    // days in previous month and next one , and day of week.
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    var weekdays = nextDate.getDay();
    var weekdays2 = weekdays
    var numOfDays = dayPerMonth[month];

    // this leave a white space for days of pervious month.
    while (weekdays > 0) {
        htmlContent += "<td class='monthPre'></td>";

        // used in next loop.
        weekdays--;
    }

    // loop to build the calander body.
    while (counter <= numOfDays) {

        // When to start new line.
        if (weekdays2 > 6) {
            weekdays2 = 0;
            htmlContent += "</tr><tr>";
        }

        // if counter is current day.
        // highlight current day using the CSS defined in header.
        if (counter == day) {
            htmlContent += "<td class='dayNow' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"' id=" + counter + ">" + counter + "</td>";
        } else {
            htmlContent += "<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"' id=" + counter + ">" + counter + "</td>";
        }

        weekdays2++;
        counter++;
    }

    // building the calendar html body.
    var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>" +
        monthNames[month] + " " + year + "</th></tr>";
    calendarBody += "<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td>" +
        "<td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
    calendarBody += "<tr>";
    calendarBody += htmlContent;
    calendarBody += "</tr></table>";
    // set the content of div .
    document.getElementById("calendar").innerHTML = calendarBody;

    var arr = [];
    var table = document.querySelector(".calendar")
    var tds = table.getElementsByTagName('td');
    //console.log(tds.length);
    for (var i = 8; i < tds.length; i++) {
        arr.push(tds[i].id);
    }
    console.log(arr);

    for (var i = 1; i < arr.length; i++) {
        document.getElementById(arr[i]).ondblclick = (function(i) {
            return function() {
                console.log(i);
                var write = document.getElementById(i);
                var appointment = document.createElement('input');
                appointment.setAttribute("type", "text");
                appointment.setAttribute("placeholder", 'schedule');
                appointment.setAttribute("class", "appoint")
                appointment.setAttribute("id", "write" + i);

                write.appendChild(appointment);
                document.getElementById("write" + i).focus();
            }
        })(i);
    }
}