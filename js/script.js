var age = parseInt(prompt("Yoshingizni kiriting?").trim(), 10);

if (isNaN(age)) {
    document.querySelector(".bus-one").textContent = "Iltimos raqam kiriting!";
  } else if (age >= 60) {
    document.querySelector(".bus-one").textContent = "Chipta siz uchun arzonlashtirilgan!";
  } else if (age >= 25) {
    document.querySelector(".bus-one").textContent = "Sizning chiptangiz pullik!";
  } else if (age >= 18) {
    document.querySelector(".bus-one").textContent = "Sizning chiptangiz pullik!";
  } else if (age > 3) {
    document.querySelector(".bus-one").textContent = "Chipta siz uchun arzonlashtirilgan.";
  } else if (age <= 3) {
    document.querySelector(".bus-one").textContent = "Sizning chiptangiz bepul.";
  };

// avtobus ikkinchi qism

if (isNaN(age)) {
  document.querySelector(".bus-two").textContent = "Iltimos raqam kiriting!";
} else {
  if (age >= 60) {
    document.querySelector(".bus-two").textContent = "Chipta siz uchun arzonlashtirilgan!";
  } else {
    if (age >= 25) {
      document.querySelector(".bus-two").textContent = "Sizning chiptangiz pullik!";
    } else {
      if (age >= 18) {
        document.querySelector(".bus-two").textContent = "Sizning chiptangiz pullik!";
      } else {
        if (age > 3) {
          document.querySelector(".bus-two").textContent = "Chipta siz uchun arzonlashtirilgan.";
        } else {
          if (age <= 3) {
            document.querySelector(".bus-two").textContent = "Sizning chiptangiz bepul";
          }
        } 
      }
    }
  }
}
