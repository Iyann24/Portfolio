function toggleDetail(e) {
    const target =$(e.target)

    if($(target).hasclass("active")) {
        $(target).html("More info").removeclass("active")
    } else {
        $(target).html("Less info").addclass("active")
    }

    const item =$(target).parents(".about-exp-item")
    const detail =$(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit (e) {
    e.preventDefault()
    const email = $("inp_email")
    const subject = $("inp_subject")
    const message = $("inp_message")

    if(!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(message).val()) {
        alert("message is required")
    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}