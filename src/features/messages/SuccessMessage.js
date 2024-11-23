import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as CheckIcon } from '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/messages/icons/bookmark-check.svg'; // Import a checkmark SVG
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/messages/SuccessMessage.css'

const SuccessMessage = ({ onClose, message }) => {
    return (
        <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <CheckIcon className="check-icon" />
            <p>{message}</p>
            <button onClick={onClose} className='btn btn-primary' >Close</button>
        </motion.div>
    );
};

export default SuccessMessage;