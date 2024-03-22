"use client";

import React from 'react';
import { useUser } from "@clerk/nextjs";
import jsPDF from "jspdf";

const PDFGenerator = () => {

    const { user } = useUser()

    const user_firstName = user?.firstName;
    const user_lastName = user?.lastName;

    console.log(user_firstName, user_lastName)

    const handlePDF = () => {

    const path = "Software Engineering";
    
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

    // Save the PDF document
    doc.save("certificate.pdf");
  };

  // Render a button to trigger PDF generation
  return (
    <button className='bg-[#00234E] text-white font-bold rounded-md p-3 pt-[20px]' onClick={handlePDF}>Download Certificate</button>
  );
};

export default PDFGenerator;
