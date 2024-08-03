# React + Vite

# CSS Boiler Plate
@media ((min-width:0px) and (max-width: 480px)) {}
@media ((min-width:481px) and (max-width: 767px)) {}
@media (min-width: 768px) and (max-width: 1000px) {}
@media (min-width: 1000px) and (max-width: 1280px) {}
@media (min-width: 1281px) {}

# TEMP

[
    {
        "year": "2024",
        "content" : [
            {
                "month" : "January",
                "project" : {
                    "info" : {
                        "title" : "",
                        "description" : "",
                        "tags" : []
                    }
                }
            }
        ]
    }
]

# Timeline Desktop

const scrollable = document.querySelectorAll('.scrollable')[0];
const months = document.querySelectorAll('.months')[0];
const years = document.querySelectorAll('.years')[0];

scrollable.addEventListener('scroll', (e) => {
    let x = Math.floor((e.target.scrollTop + (e.target.offsetHeight/2)) / e.target.offsetHeight);
    

    let y = months.offsetHeight;
    let z = months.scrollTop;

    months.scrollTop = x*y;

    if(x >=0 && x <= 2) years.scrollTop = 0 * years.offsetHeight;
    else if(x >=3 && x <= 5) years.scrollTop = 1 * years.offsetHeight;
    else if(x >=6 && x <= 7) years.scrollTop = 2 * years.offsetHeight;
    else if(x >=8 && x <= 13) years.scrollTop = 3 * years.offsetHeight;
    
    
})

# Timeline Mobile

const scrollable = document.querySelectorAll('.scrollable')[0];
const months = document.querySelectorAll('.months')[0];
const years = document.querySelectorAll('.years')[0];

scrollable.addEventListener('scroll', (e) => {
    let x = Math.floor((e.target.scrollLeft + (e.target.offsetWidth/2)) / e.target.offsetWidth);
    

    let y = months.offsetWidth;
    let z = months.scrollTop;

    months.scrollLeft = x*y;

    if(x >=0 && x <= 2) years.scrollLeft = 0 * years.offsetWidth;
    else if(x >=3 && x <= 5) years.scrollLeft = 1 * years.offsetWidth;
    else if(x >=6 && x <= 7) years.scrollLeft = 2 * years.offsetWidth;
    else if(x >=8 && x <= 13) years.scrollLeft = 3 * years.offsetWidth;
    
    
})
