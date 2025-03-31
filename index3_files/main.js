

if (document.querySelector("#profile-img-file-input")) {
    document.querySelector("#profile-img-file-input").addEventListener("change", function () {
        var preview = document.querySelector(".user-profile-image");
        var file = document.querySelector(".profile-img-file-input").files[0];
        var reader = new FileReader();
        reader.addEventListener(
            "load",
            function () {
                preview.src = reader.result;
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }
    });
}
    function modalWindow(url) {
        // Выполняем AJAX-запрос
        $.ajax({
            url: url, // URL, который нужно запросить
            type: 'GET',
            success: function (response) {
                // Вставляем полученный контент в модальное окно
                $('#modal_window .modal-content').html(response);
            },
            error: function (xhr, status, error) {
                console.error('Ошибка при загрузке данных: ', error);
            }
        });
       
};

function showModal(url) {
    // Выполняем AJAX-запрос
    $.ajax({
        url: url, // URL, который нужно запросить
        type: 'GET',
        success: function (response) {
            // Вставляем полученный контент в модальное окно
            $('#modal_window_xl .modal-content').html(response);
        },
        error: function (xhr, status, error) {
            console.error('Ошибка при загрузке данных: ', error);
        }
    });

};
function updateRingProgress() {
    const progressRings = document.querySelectorAll('.progress-ring');

    progressRings.forEach(progressRing => {
        const progressTextElement = progressRing.querySelector('.progress-ring__text');
        const progressCircle = progressRing.querySelector('.progress-ring__circle');

        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Extract the numerical value from the text element
        const value = parseInt(progressTextElement.textContent.replace('%', ''), 10);

        // Calculate the stroke-dasharray value
        const offset = circumference - (value / 100) * circumference;

        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = offset;
    });
}

// Call the function to update all progress rings
updateRingProgress();


function updateLineProgress() {
    const progressLines = document.querySelectorAll('.progress-line');

    progressLines.forEach(progressLine => {
        const progressTextElement = progressLine.querySelector('.progress-line__text');
        const progressInner = progressLine.querySelector('.progress-line__inner');

        // Extract the numerical value from the text element
        const value = parseInt(progressTextElement.textContent.replace('%', ''), 10);

        // Update the width of the inner progress bar
        progressInner.style.width = `${value}%`;

        // Change color based on the value
        if (!progressInner.style.backgroundColor) {
            // Change color based on the value
            if (value > 67) {
                progressInner.style.backgroundColor = '#EE6352';
            } else if (value > 33) {
                progressInner.style.backgroundColor = '#FFCA5B';
            } else {
                progressInner.style.backgroundColor = '#40bb82';
            }
        }
    });
}

// Call the function to update all progress bars
updateLineProgress();
$(document).ready(function () {
    userImage();
    

  



});
showNotif();
checkNotifyCation();
function checkNotifyCation() {
    var url = "/Home/NotificationCount/";

    var buffer = "";
    $.getJSON(url, function (result) {
        if (result.data.counts > 0) {
            buffer += "<span  class='position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger'>" + result.data.counts + "</span>";

            $("#notificationCount").html(buffer);

        }
    });

}
function showNotif() {

    $("#notis").html("");
    url = "/home/Notification/"
    $.get(url, function (data) {

        $("#notis").html(data);

    });
}
function userImage() {
    var url = "/UserProfilePhoto/userimage/";

    var buffer = "";
    $.getJSON(url, function (result) {
        // if (result.data > 0) {
        buffer += result.data;

        $("#userimage").attr("src", buffer);

        // }
    });

}
document.addEventListener("DOMContentLoaded", function () {
    var chatConversationWrapper = document.querySelector("#chat-conversation .simplebar-content-wrapper");
    if (chatConversationWrapper) {
        chatConversationWrapper.scrollTop = chatConversationWrapper.scrollHeight;
    }
});

function showAlert( message, status) {
    // Define the class based on the status
    var statusClass = '';
    switch (status) {
        case 'success':
            statusClass = 'bg-success text-white';
            break;
        case 'danger':
            statusClass = 'bg-danger text-white';
            break;
        case 'warning':
            statusClass = 'bg-warning text-dark';
            break;
        default:
            statusClass = 'bg-secondary text-white'; // Default if no status matches
            break;
    }

    // Create the toast container
    var toastContainer = document.createElement('div');
    toastContainer.className = 'toast align-items-center ' + statusClass + ' border-0';
    toastContainer.setAttribute('role', 'alert');
    toastContainer.setAttribute('aria-live', 'assertive');
    toastContainer.setAttribute('aria-atomic', 'true');
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '20px';
    toastContainer.style.right = '20px'; // Position on the right
    toastContainer.style.zIndex = '1050';

    // Create the toast body
    var toastBody = document.createElement('div');
    toastBody.className = 'd-flex';

    // Create the toast message
    var toastMessage = document.createElement('div');
    toastMessage.className = 'toast-body';
    toastMessage.innerText = message;

    // Create the close button
    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close btn-close-white me-2 m-auto';
    closeButton.setAttribute('data-bs-dismiss', 'toast');
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.onclick = function () {
        toastContainer.remove();
    };

    // Append the message and close button to the toast body
    toastBody.appendChild(toastMessage);
    toastBody.appendChild(closeButton);

    // Append the body to the container
    toastContainer.appendChild(toastBody);

    // Append the toast container to the body of the document
    document.body.appendChild(toastContainer);

    // Show the toast using Bootstrap's toast function
    var toast = new bootstrap.Toast(toastContainer);
    toast.show();

    // Automatically remove the toast after 3 seconds
    setTimeout(function () {
        toastContainer.remove();
    }, 3000);
}



