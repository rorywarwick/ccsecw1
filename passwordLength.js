// script.js File 
var passwordInput = document.getElementById("password");
var passwordMessageItems = document.getElementsByClassName("password-message-item");
var passwordMessage = document.getElementById("password-message");


passwordInput.onfocus = function () {
    passwordMessage.style.display = "block";
}

passwordInput.onkeyup = function () {    
    // Checking length of the password
    if (passwordInput.value.length >= 8) {
        passwordMessageItems[3].classList.remove("invalid");
        passwordMessageItems[3].classList.add("valid");
    } else {
        passwordMessageItems[3].classList.remove("valid");
        passwordMessageItems[3].classList.add("invalid");
    }
}



router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);
  let user = await User.create({
    email: req.body.email,
    password: secPass,
  });
  res.json({ user });
});


const limited = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});
