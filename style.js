


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text code 


const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });


 // Receipts code
  const billReceipts = [
    "NO RECEIPT FOUND",
    "(RECEPTS WILL SHOW AFTER PAYMENT)",
  ];

  const billNotifications = [
    "Upcoming bill due",
    "Bill generated soon",
    "Your bill is pending...",
  ];

  function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';

    if (modalId === 'receiptModal') {
      fillList('receiptList', billReceipts);
    } else if (modalId === 'notificationModal') {
      fillList('notificationList', billNotifications);
    }
  }

  function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  function fillList(listId, data) {
    const ul = document.getElementById(listId);
    ul.innerHTML = "";
    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }


  // Admin portal
  document.getElementById("adminBtn").addEventListener("click", function () {
    const panel = document.getElementById("adminOptions");
    panel.classList.toggle("hidden");
  });
  
  // Function to enable or disable specific buttons
  function setOptionState(optionId, isEnabled) {
    const button = document.getElementById(optionId);
    if (button) {
      button.disabled = !isEnabled;
    }
  }
  
  // Example: Disable 'Create Bills' and 'Diet Details'
  setOptionState("createBill", false);
  setOptionState("diet", false);
  
  // You can later use this to enable them again:
  setTimeout(() => {
    setOptionState("createBill", true);
    setOptionState("diet", true);
  }, 5000);
