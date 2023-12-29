import React, { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import BookComponent from "./../../components/publication/Model";

const New = (uid) => {
  const newId = uid.uid;
  const [fetchedBooks, setFetchedBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    const res = await axios.get(`/api/getbooks/find/${newId}`);
    setFetchedBooks(res.data);

  };

  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [id, setId] = useState();

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {fetchedBooks.map((item) => (
        <motion.div
          style={{ overflow: "hidden" }}
          layout
          className="w-full"
          key={item.id}
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ transform: "scale(0)" }}
        >
          <div
            onClick={() => handleClick(setId(item.id))}
            className="relative transition duration-500 hover:scale-95"
          >
            <motion.img
              className="w-full aspect-video transition duration-500 hover:opacity-80 rounded-xl"
              src={`http://localhost:8000${item.image}`}
            />
            <p className="absolute bottom-0 px-5 py-3 text-md bg-white opacity-70 w-full">
              {item.title}
            </p>
            <p className="absolute top-0 text-right py-3 text-md opacity-70 w-full">
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-tr-2xl rounded-bl-md text-white">
                Grade {item.grade}
              </span>
            </p>
          </div>
        </motion.div>
      ))}

      {showModal && <BookComponent setOpen={setShowModal} id={id} />}
    </>
  );
};

export default New;
