
"use client";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8"> موقعنا </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4"> قاعة الزفاف الملكية </h3>
            <p className="text-lg mb-4">
              العنوان: 123 شارع الملك، الرياض، المملكة العربية السعودية
            </p>
            <p className="text-lg">
              التاريخ: 30 ديسمبر 2024
              <br />
              الوقت: 7:00 مساءً
            </p>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.13149955385!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038d76e828a1%3A0x8b9b4f4c9c1c9c1c!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1672864679416!5m2!1sen!2ssa"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location;
