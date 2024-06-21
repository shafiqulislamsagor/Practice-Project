import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStore } from "../Component/LocalStorage/LocalStorage";

const BookDetalis = () => {
  const books = useLoaderData();
  // console.log(books);
  const { id } = useParams();
  // const idInt = parseInt(id);
  const selectedBook = books?.find((book) => book.bookId == id);

  const {
    bookName,
    bookId,
    category,
    image,
    publisher,
    rating,
    tags,
    author,
    yearOfPublishing,
    review,
    totalPages,
  } = selectedBook;


  // Shafiqul Islam Sagor
  const ReadHandler = (selected) =>{
    const getRead = getStore()
    const store = [ ...getRead , selected]
    const value = JSON.stringify(store)
    localStorage.setItem('readCard', value)
  }

  const WishHandler = () =>{
    console.log('hlw')
  }
  

  return (
    <div className="">
      <div className="card card-side flex flex-col md:flex-row shadow-xl w-[90%] mx-auto">
        <figure className="w-1/3">
          <img
            className="w-[475px] h-[564px] bg-base-300 rounded-xl mb-7 mt-7 ml-9 p-11"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-3xl playfair">{bookName}</h2>
          <p>By: {author}</p>
          <hr className="h- mt- mb-" />
          <p className="text-xl">{category}</p>
          <hr className="h-2 mt- mb-" />

          <p>
            <span className="font-bold work">Review: </span>
            {review}
          </p>

          <div className="flex gap-2">
            <span className="font-bold work">Tag: </span>
            <ul className="flex gap-4   work text-[#23BE0A]">
              {tags?.map((tag , id) => (
                <li key={id} className="bg-base-200 px-2 rounded-lg">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <hr className="h-2 mt- mb-" />
          <div>
            <p>
              Number of Pages: <span className="font-bold">{totalPages}</span>
            </p>
          </div>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>
          <div className="card-actions gap-3 mt-2 ">
            <button
              onClick={()=>ReadHandler(selectedBook)}
              className="btn btn-info relative inline-flex items-center justify-center p-4 px-4 py-3 overflow-hidden font-medium text-gray-800 transition duration-300 ease-out border-2 border-green-500  shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
                Read
              </span>
            </button>
            <button
              onClick={WishHandler}
              className="btn btn-info"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetalis;
