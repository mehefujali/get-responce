const emails = {
      user1: "abutahir90@gmail.com",
      user2: "asifaktar767@gmail.com",
      user3: "avikd906@gmail.com",
      user4: "bikrambiswas912@gmail.com",
      user5: "mehefujalim@gmail.com",
      user6: "rajen2003jr@gmail.com",
      user7: "radhanath1542@gmail.com",
      user8: "mandalritam72@gmail.com",
      user9: "riyadebnath80027@gmail.com",
      user10: "dev.samim.kolkata@gmail.com",
      user11: "sayakchakraborty928@gmail.com",
      user12: "sekharchaudhary675@gmail.com",
      user13: "sumonmit678@gmail.com"
};


const emailIn = document.getElementById("email")

emailIn.addEventListener('keyup', () => {
      for (const email in emails) {
            if (emailIn.value === emails[email]) {
                  document.getElementById("submit").disabled = false;
                  document.getElementById("submit").value = "Submit"
            }



      }
})
