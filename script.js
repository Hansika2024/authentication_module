document.addEventListener("DOMContentLoaded", () => {
  const showForm = (formId) => {
    document.querySelectorAll(".form-container").forEach((form) => {
      form.classList.remove("active");
    });
    document.getElementById(formId).classList.add("active");
  };

  const bindFormToggles = () => {
    document.querySelectorAll(".toggle-form").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const target = el.getAttribute("data-target");
        if (target) showForm(target);
      });
    });
  };

  window.handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const captcha = document.getElementById("captcha-answer").value;
    const loginError = document.getElementById("login-error");

    if (!email || !password || captcha !== "5") {
      loginError.textContent = "Invalid credentials or captcha";
      loginError.classList.add("show");
    } else {
      loginError.classList.remove("show");
      alert("Login successful!");
    }
  };

  window.handleSignup = () => {
    const otp = document.getElementById("signup-otp").value;
    const signupError = document.getElementById("signup-error");

    if (otp === "123456") {
      signupError.classList.remove("show");
      alert("Signup successful!");
      showForm("login-form");
    } else {
      signupError.textContent = "Invalid OTP";
      signupError.classList.add("show");
    }
  };

  window.handleRecovery = () => {
    const email = document.getElementById("recovery-email").value;
    const recoveryMsg = document.getElementById("recovery-message");

    if (email) {
      recoveryMsg.textContent = "Recovery email sent.";
      recoveryMsg.classList.add("show");
    }
  };

  window.handleSocialLogin = (provider) => {
    alert(`Logged in with ${provider}`);
  };

  window.handleSSOLogin = () => {
    alert("Enterprise SSO successful.");
  };

  bindFormToggles();
  showForm("login-form");
});
