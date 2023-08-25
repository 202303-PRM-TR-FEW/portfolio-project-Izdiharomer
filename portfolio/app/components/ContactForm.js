// 'use client'
// import React, { useState, useRef } from "react";
// import { sendContactForm } from "../services/page";

// const Contact = () => {
//   const [message, setMessage] = useState("");
//   const formRef = useRef();
//   const submitContact = async (e) => {
//     e.preventDefault();
//     console.log(e);
//     const res = await sendContactForm({
//       name: e.target[0].value,
//       email: e.target[1].value,
//       comment: e.target[2].value,
//     });
//     if (res == 0) {
//       setMessage("Thank you for your valuable comment!");
//       formRef.current.reset();
//     } else {
//       setMessage("Something went wrong! Please try again");
//     }
//   };

//   return (

//       <div className="container max-w-2xl text-center">
//         <h1>
//           {"Contact Us"}
//         </h1>
//         <div>
//           <div>
//             {message}
//             <span
//               onClick={() => setMessage("")}
//             >
//               &times;
//             </span>
//           </div>
//           <form
//             ref={formRef}
//             onSubmit={submitContact}
//           >
//             <input
//               required
//               placeholder="Name*"
//               type={"text"}
//               minLength={3}
//               maxLength={25}
//             />
//             <input
//               required
//               placeholder="Email Address*"
//               type={"email"}
//             />
//             <textarea
//               required
//               placeholder="Comment*"
//               rows={5}
// ></textarea>
//             <button type="submit">
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//   );
// };

// export default Contact;


// // import { useState } from 'react';

// // export default function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Send the form data to Firebase Firestore
// //       await addDoc(collection(firestore, 'contactMessages'), formData);

// //       // Clear the form
// //       setFormData({
// //         name: '',
// //         email: '',
// //         message: '',
// //       });

// //       alert('Your message has been sent successfully. I will get back to you soon!');
// //     } catch (error) {
// //       console.error('Error sending the message:', error);
// //       alert('Sorry, there was an error sending your message. Please try again later.');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label htmlFor="name">Name:</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="email">Email:</label>
// //         <input
// //           type="email"
// //           id="email"
// //           name="email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="message">Message:</label>
// //         <textarea
// //           id="message"
// //           name="message"
// //           rows="4"
// //           value={formData.message}
// //           onChange={handleChange}
// //           required
// //         ></textarea>
// //       </div>
// //       <div>
// //         <button type="submit">Send</button>
// //       </div>
// //     </form>
// //   );
// // }