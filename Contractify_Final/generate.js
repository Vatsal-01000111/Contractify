

const targetDiv = document.getElementById("hide");

const targetDiv2 = document.getElementById("show");
const btn = document.getElementById("generate");
btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        targetDiv2.style.display = "block";
      } else {
        targetDiv.style.display = "block";
      }

      var datef = document.getElementById("datefield").value;
      document
      .getElementById("dateo")
      .textContent = datef;
      var namef = document.getElementById("contactField").value;
      document
          .getElementById("namefo")
          .textContent = namef;
      
      var address = document.getElementById("addressfi").value ;
      document
          .getElementById("addressfo")
          .textContent = address;
      
      
      var namec = document.getElementById("nameci").value;
      document
          .getElementById("nameco")
          .textContent = namec;
      
      var addressc = document.getElementById("addressci").value ;
      document
          .getElementById("addressco")
          .textContent = addressc;
      
      var service = document.getElementById("servicei").value;
      document
          .getElementById("serviceo")
          .textContent = service;
      
      var location = document.getElementById("locationi").value;
      document
          .getElementById("locationo")
          .textContent = location;

      var condition = document.getElementById("conditioni").value;
      document
          .getElementById("condo")
          .textContent = condition;
      
      var term = document.getElementById("termi").value;
      document
          .getElementById("termo")
          .textContent = term;

      var price =  document.getElementById("pricei").value;
      document
          .getElementById("priceo")
          .textContent = price;
      
      var notice = document.getElementById("noticei").value ;
      document
      .getElementById("noticeo")
      .textContent = notice;
      
      
};

    document.getElementById('downloadCV').addEventListener("click", ()=>{
        const resumePDF = this.document.getElementById("show");
        console.log(resumePDF);
        console.log(window);
        var opt = {
            top:       1,
            bottom:     0,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: { mode: 'css', before: '#show' }
          };
        html2pdf().from(resumePDF).set(opt).save();
    })

