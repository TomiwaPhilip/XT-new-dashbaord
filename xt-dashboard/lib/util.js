import { useUser } from "@clerk/nextjs";
import jsPDF from "jspdf";

const { user } = useUser();


const user_firstName = user?.firstName;
const user_lastName = user?.lastName;

export  const handlePDF = () => {

    path = "Software Engineering";
    
    // Create a new jsPDF document
    var doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "mm",
    });

    // Load the image
    var img = new Image();
    img.src = "/assets/images/Xperienced Tekie (4).png";

    // Add the image to the document
    doc.addImage(img, 0, 0, 297, 210);

    // Get the dimensions of the bigger rectangle
    var bigRect = {
      x: 10,
      y: 118,
      width: 170,
      height: 100,
    };

    // Get the dimensions of the smaller rectangle
    var smallRect = {
      x: 76,
      y: 132,
      width: 170,
      height: 45,
    };

    // Add text to the bigger rectangle
    doc.setFontSize(25);
    doc.setTextColor(0, 0, 0); // Black
    doc.text(
      bigRect.x + 5,
      bigRect.y + 5,
      `${user_firstName} ${user_lastName}`,
    );

    // Add text to the smaller rectangle
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black
    doc.text(smallRect.x + 5, smallRect.y + 5, `${path}`);

    // Save the PDF document
    doc.save("certificate.pdf");
  };