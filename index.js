let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

console.log(data)
function checkInput(obj) {
    ///styling active buttons and selected button
    const allBtns = document.querySelectorAll("button")
    const ClickedBtn = obj.className
    allBtns.forEach(a => a.style.color ="var(--Desaturated-blue)")
    obj.style.color ="white"

    ///Fields to be updated
    const allCurrentHours = document.querySelectorAll(".time")
    const allPreviousHours = document.querySelectorAll(".previously")

    ///updating fields
    
    
    if (ClickedBtn === "daily") {
        allCurrentHours.forEach((a, b) => a.innerHTML = data[b].timeframes.daily.current+"hrs")
        allPreviousHours.forEach((a, b) => a.innerHTML = "Previous - " + data[b].timeframes.daily.previous+"hrs")
    } else if (ClickedBtn === "weekly") {
        allCurrentHours.forEach((a, b) => a.innerHTML = data[b].timeframes.weekly.current+"hrs")
        allPreviousHours.forEach((a, b) => a.innerHTML = "Previous - " + data[b].timeframes.weekly.previous+"hrs")
    } else if (ClickedBtn === "monthly") {
        allCurrentHours.forEach((a, b) => a.innerHTML = data[b].timeframes.monthly.current+"hrs")
        allPreviousHours.forEach((a, b) => a.innerHTML = "Previous - " + data[b].timeframes.monthly.previous+"hrs")
    }
    
}