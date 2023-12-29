import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export default function EditPublication() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [book, setBook] = useState(null);

  const location = useLocation("");

  const id = location.pathname.split("/")[3];


  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    await axios
      .get(`http://localhost:8000/api/add-student/${id}/edit`)
      .then(({ data }) => {
        const { name, description, image, book } = data.books[0];
        setTitle(name);
        setDescription(description);
        setMainImage(image);
        setBook(book);
      })
      .catch(({ response }) => {
        Swal.fire({
          text: "fffff",
          icon: "error",
        });
      });
  };

  const imageHandler = (e) => {
    setMainImage(e.target.files[0]);
  };
  const fileHandler = (e) => {
    setBook(e.target.files[0]);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("title", title);
    formData.append("description", description);
    if (mainImage != null) {
      formData.append("mainImage", mainImage);
    }
    if (book != null) {
      formData.append("book", book);
    }

    await axios
      .post(`http://localhost:8000/api/add-student/${id}`, formData)
      .then(({ data }) => {

        alert("success");
      })
      .catch(({ responce }) => {
        console.log(responce);
      });
  };

  return (
    <form onSubmit={updateBook} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Publication
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  autoComplete="family-name"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  defaultValue={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                ></textarea>
                <p className="mt-2 text-sm text-gray-500">
                  Write a few sentences about Book.
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Add Main Image
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 pt-5 mt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <img
                      className="p-3 text-center rounded-3xl "
                      src={`http://localhost:8000/images/${mainImage}`}
                      width="200px"
                      alt=""
                    />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="pl-12">Upload a Image</span>
                        <input type="hidden" value={mainImage} />
                        <input
                          id="image-upload"
                          name="image-upload"
                          type="file"
                          onChange={imageHandler}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      JPG, PNG, GIF up to 1MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Add Document
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {/* <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                    <span className="text-sm">{book}</span>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="lg:pl-7">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          onChange={fileHandler}
                          className="sr-only"
                        />
                      </label>
                      {/* <p className="pl-1">or drag and drop</p> */}
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOX, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          {/* <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button> */}
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
