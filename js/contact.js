/**
 * Created by Vincent on 9/23/2016.
 */
function validateForm() {
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var tel = document.forms["contact"]["tel"].value;
    var message = document.forms["contact"]["message"].value;
    doublezero = "00";
    plus = "+";
    at = "@";
    point = ".";
    if (name == null || name == "") {
        alert("Vul een naam in.");
        return false;
    }
    if (email == null || email == "") {
        alert("Vul een email in.");
        return false;
    } else if (email.indexOf(at) == -1) {
        alert("Het emailadres moet een @ bevatten.")
        return false;
    } else if (email.indexOf(point) == -1) {
        alert("Het emailadres moet een punt bevatten.")
        return false;
    }
    if (tel != null || tel != "") {
        if (tel.length < 10) {
            alert("Vul een geldig telefoon nummer in zonder spaties of streepjes.");
            return false;
        } else if (tel.length == 12 && (tel.indexOf(plus) == -1)) {
            alert("Vul een geldig telefoon nummer in zonder spaties of streepjes.");
            return false;
        } else if (tel.length == 13 && (tel.indexOf(doublezero) == -1)) {
            alert("Vul een geldig telefoon nummer in zonder spaties of streepjes.");
            return false;
        } else if (tel.length > 13) {
            alert("Vul een geldig telefoon nummer in zonder spaties of streepjes.");
            return false;
        }
    } else {
        alert("Vul een geldig telefoon nummer in zonder spaties of streepjes.");
        return false;
    }
    if (message == null || message == "") {
        alert("Vul een bericht in.");
        return false;
    }
}