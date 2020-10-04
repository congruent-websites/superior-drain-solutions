var now = new Date()
var cYear = now.getFullYear()
var cMonth = now.getMonth() + 1
var cDate = now.getDate()
var cHour = now.getHours()

// var aDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
var wDates = new Date(cYear, cMonth, 0).getDate()

var lastWDates = 0
var lastMonth = 0
var lastDate = 0
var pageIndex = 0
var checkboxes = []
//In iteration, for retrieving the original date
cDate = cDate - 1

createStateSelect()
createServiceSelect()
createCustomerSelect()

for (var i = 0; i < 5; i++) {
    if (cDate < wDates) {
        cDate = cDate + 1
    } else {
        cMonth += 1
        cDate = 1
    }
    curWeek(cMonth, cDate, i)
    lastMonth = cMonth
    lastDate = cDate
    lastWDates = new Date(cYear, lastMonth, 0).getDate()
}

async function curWeek(currMonth, currDate, i) {
    await document
        .querySelector("#scheduleUl")
        .insertAdjacentHTML(
            "beforeend",
            `<li id="scheduleLi${currMonth}_${currDate}" tabindex="-1" class="Date-Option set Item${
                i * 5 + 1
            } active" data-row="${i * 5 + 1}" data-results="75" ></li>`
        )
    await document
        .querySelector(`#scheduleLi${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<div id="scheduleDiv${currMonth}_${currDate}" class="date-container"></div>`
        )
    await document
        .querySelector(`#scheduleDiv${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<strong>${currMonth}/${currDate}</strong>`
        )
    await document
        .querySelector(`#scheduleDiv${currMonth}_${currDate}`)
        .insertAdjacentHTML("beforeend", `<strong>${aDays[i]}</strong>`)
    await document
        .querySelector(`#scheduleLi${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<ul id='scheduleChildUl${currMonth}_${currDate}' tabindex="-1" class="slots"></ul>`
        )
    await document
        .querySelector(`#scheduleChildUl${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<li id="scheduleChildLi${currMonth}_${currDate}_${i}_1" tabindex="-1" class=""></li>`
        )
    await document
        .querySelector(`#scheduleChildUl${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<li id="scheduleChildLi${currMonth}_${currDate}_${i}_2" tabindex="-1" class=""></li>`
        )
    await document
        .querySelector(`#scheduleChildUl${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<li id="scheduleChildLi${currMonth}_${currDate}_${i}_3" tabindex="-1" class=""></li>`
        )
    await document
        .querySelector(`#scheduleChildUl${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<li id="scheduleChildLi${currMonth}_${currDate}_${i}_4" tabindex="-1" class=""></li>`
        )
    await document
        .querySelector(`#scheduleChildUl${currMonth}_${currDate}`)
        .insertAdjacentHTML(
            "beforeend",
            `<li id="scheduleChildLi${currMonth}_${currDate}_${i}_5" tabindex="-1" class=""></li>`
        )
    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_1`)
        .insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" required="required" id="scheduleChildInput${currMonth}_${currDate}_${i}_1" />`
        )
    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_1`)
        .insertAdjacentHTML(
            "beforeend",
            `<label id="scheduleChildLabel${currMonth}_${currDate}_${i}_1" for="scheduleChildInput${currMonth}_${currDate}_${i}_1" title="${
                aMonths[currMonth - 1]
            } ${currDate}, ${cYear} 8:00 AM - 10:00 AM" tabindex='0' class="${
                cHour > 10 && now.getDate() === currDate ? "unavailable" : ""
            }">8:00 AM - 10:00 AM</label>`
        )
    await document
        .querySelector(`#scheduleChildLabel${currMonth}_${currDate}_${i}_1`)
        .insertAdjacentHTML(
            "beforeend",
            '<span class="hide">Call For Service</span>'
        )

    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_2`)
        .insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" required="required" id="scheduleChildInput${currMonth}_${currDate}_${i}_2" />`
        )
    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_2`)
        .insertAdjacentHTML(
            "beforeend",
            `<label id="scheduleChildLabel${currMonth}_${currDate}_${i}_2" for="scheduleChildInput${currMonth}_${currDate}_${i}_2" title="${
                aMonths[currMonth - 1]
            } ${currDate}, ${cYear} 10:00 AM - 12:00 PM" tabindex='0' class="${
                cHour > 12 && now.getDate() === currDate ? "unavailable" : ""
            }">10:00 AM - 12:00 PM</label>`
        )
    await document
        .querySelector(`#scheduleChildLabel${currMonth}_${currDate}_${i}_2`)
        .insertAdjacentHTML(
            "beforeend",
            '<span class="hide">Call For Service</span>'
        )

    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_3`)
        .insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" required="required" id="scheduleChildInput${currMonth}_${currDate}_${i}_3" />`
        )
    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_3`)
        .insertAdjacentHTML(
            "beforeend",
            `<label id="scheduleChildLabel${currMonth}_${currDate}_${i}_3" for="scheduleChildInput${currMonth}_${currDate}_${i}_3" title="${
                aMonths[currMonth - 1]
            } ${currDate}, ${cYear} 12:00 PM - 2:00 PM" tabindex='0' class="${
                cHour > 14 && now.getDate() === currDate ? "unavailable" : ""
            }">12:00 PM - 2:00 PM</label>`
        )
    await document
        .querySelector(`#scheduleChildLabel${currMonth}_${currDate}_${i}_3`)
        .insertAdjacentHTML(
            "beforeend",
            '<span class="hide">Call For Service</span>'
        )

    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_4`)
        .insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" required="required" id='scheduleChildInput${currMonth}_${currDate}_${i}_4' />`
        )
    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_4`)
        .insertAdjacentHTML(
            "beforeend",
            `<label id="scheduleChildLabel${currMonth}_${currDate}_${i}_4" for="scheduleChildInput${currMonth}_${currDate}_${i}_4" title="${
                aMonths[currMonth - 1]
            } ${currDate}, ${cYear} 2:00 PM - 4:00 PM" tabindex='0' class="${
                cHour > 16 && now.getDate() === currDate ? "unavailable" : ""
            }">2:00 PM - 4:00 PM</label>`
        )
    await document
        .querySelector(`#scheduleChildLabel${currMonth}_${currDate}_${i}_4`)
        .insertAdjacentHTML(
            "beforeend",
            '<span class="hide">Call For Service</span>'
        )

    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_5`)
        .insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" required="required" id="scheduleChildInput${currMonth}_${currDate}_${i}_5" />`
        )
    await document
        .querySelector(`#scheduleChildLi${currMonth}_${currDate}_${i}_5`)
        .insertAdjacentHTML(
            "beforeend",
            `<label id="scheduleChildLabel${currMonth}_${currDate}_${i}_5" for="scheduleChildInput${currMonth}_${currDate}_${i}_5" title="${
                aMonths[currMonth - 1]
            } ${currDate}, ${cYear} 4:00 PM - 6:00 PM" tabindex='0' class="${
                cHour > 18 && now.getDate() === currDate ? "unavailable" : ""
            }">4:00 PM - 6:00 PM</label>`
        )
    await document
        .querySelector(`#scheduleChildLabel${currMonth}_${currDate}_${i}_5`)
        .insertAdjacentHTML(
            "beforeend",
            '<span class="hide">Call For Service</span>'
        )
}
async function prevWeek(index) {
    pageIndex--
    lastDate -= 10

    if (lastDate < 1) {
        lastMonth--
        lastWDates = new Date(cYear, lastMonth, 0).getDate()
        lastDate = lastWDates + lastDate
    }

    document.querySelector("#nextBtn").classList.add("active")

    checkboxes = checkboxes.concat(
        document.querySelectorAll('input[type="checkbox"]:checked')
    )

    document.querySelector("#scheduleUl").innerHTML = ""

    if (pageIndex === 0) {
        document.querySelector("#prevBtn").classList.remove("active")
    }

    for (var i = 0; i < 5; i++) {
        if (lastDate < lastWDates) {
            lastDate = lastDate + 1
        } else {
            lastMonth += 1
            lastDate = 1
        }
        await curWeek(lastMonth, lastDate, i)
    }

    Array.prototype.forEach.call(checkboxes, function (elements) {
        Array.prototype.forEach.call(elements, function (element) {
            if (document.querySelector(`#${element.id}`))
                document.querySelector(`#${element.id}`).checked = true
        })
    })
}
async function nextWeek(index) {
    pageIndex++

    document.querySelector("#prevBtn").classList.add("active")

    checkboxes = checkboxes.concat(
        document.querySelectorAll('input[type="checkbox"]:checked')
    )

    document.querySelector("#scheduleUl").innerHTML = ""

    if (pageIndex > 3) {
        document.querySelector("#nextBtn").classList.remove("active")
    }

    for (var i = 0; i < 5; i++) {
        if (lastDate < lastWDates) {
            lastDate = lastDate + 1
        } else {
            lastMonth += 1
            lastDate = 1
        }
        await curWeek(lastMonth, lastDate, i)
    }

    Array.prototype.forEach.call(checkboxes, function (elements) {
        Array.prototype.forEach.call(elements, function (element) {
            if (document.querySelector(`#${element.id}`))
                document.querySelector(`#${element.id}`).checked = true
        })
    })
}
function createStateSelect() {
    stateValues.forEach((val, index) => {
        var option = document.createElement("option")
        option.value = stateKeys[index]
        option.text = val
        document
            .querySelector("#SchedulerLocalContactForm_ITM0_State")
            .appendChild(option)
    })
}
function createServiceSelect() {
    serviceValues.forEach((val, index) => {
        var option = document.createElement("option")
        option.value = serviceKeys[index]
        option.text = val
        document
            .querySelector("#SchedulerLocalContactForm_ITM0_ServiceType")
            .appendChild(option)
    })
}
function createCustomerSelect() {
    customerValues.forEach((val, index) => {
        var option = document.createElement("option")
        option.value = customerKeys[index]
        option.text = val
        document
            .querySelector("#SchedulerLocalContactForm_ITM0_LeadTypeID")
            .appendChild(option)
    })
}
function handleNext() {
    checkboxes = checkboxes.concat(
        document.querySelectorAll('input[type="checkbox"]:checked')
    )
    console.log(checkboxes)
    if (checkboxes[0].length === 0) {
        Toastify({
            text: "Please Select A Time of Service.",
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "#e74c3c",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function () {}, // Callback after click
        }).showToast()
        checkboxes = []
        return
    }
    document.querySelector("#mainSchedule").classList.remove("active")
    document.querySelector("#confirmSchedule").classList.add("active")
}
function handlePrev() {
    document.querySelector("#confirmSchedule").classList.remove("active")
    document.querySelector("#mainSchedule").classList.add("active")
}
function handleValidate(event) {
    if (event.target.value === "") {
        event.target.parentNode.parentNode.classList.remove("valid", "filled")
        event.target.parentNode.parentNode.classList.add("invalid")
    } else {
        event.target.parentNode.parentNode.classList.remove("invalid")
        event.target.parentNode.parentNode.classList.add("valid", "filled")
    }
}
function validateEmail(event) {
    var email = event.target.value
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var valid = re.test(String(email).toLowerCase())
    console.log("valid", email, valid)
    if (valid) {
        event.target.parentNode.parentNode.classList.remove("invalid")
        event.target.parentNode.parentNode.classList.add("valid", "filled")
    } else {
        event.target.parentNode.parentNode.classList.remove("valid", "filled")
        event.target.parentNode.parentNode.classList.add("invalid")
    }
}
function onlyNumberKey(evt) {
    // Only ASCII charactar in that range allowed
    var ASCIICode = evt.which ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false
    return true
}
document
    .getElementById("SchedulerLocalContactForm_ITM0_Phone")
    .addEventListener("input", function (e) {
        var x = e.target.value
            .replace(/\D/g, "")
            .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
        e.target.value = !x[2]
            ? x[1]
            : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "")
    })
