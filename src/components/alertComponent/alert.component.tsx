import React from "react";


type AlertComponentProps = {
  messages: string[],
  id: string,
  showAlert: (id: string) => void,
  type: string
}

const AlertComponent = ({ messages, id, showAlert, type }: AlertComponentProps) => {
  return (
    <div
      id={id}
      className="fixed top-0 left-0 right-0 z-50 hidden h-screen bg-black bg-opacity-75"
    >
      <div className="flex h-full items-center justify-center">
        <div className="w-3/4 max-w-md rounded-2xl bg-white shadow dark:bg-gray-700 md:w-1/2">
          <div className="relative">
            <div className="p-6 text-center">
              <button
                onClick={() => {
                  showAlert(id);
                }}
                type="button"
                className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  data-darkreader-inline-fill=""
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {type === "success" ? (
                <i className="fa-regular fa-circle-check text-gray-300 text-5xl p-5"></i>
                ) : type === "error" ? (
                  <i className="fa-solid fa-triangle-exclamation text-gray-300 text-5xl p-5"></i>
                  ) : (
                <i className="fa-solid fa-exclamation text-gray-300 text-5xl p-5"></i>
              )}
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {messages.map((message, index) => <h3 key={index}>{message}</h3>)}
              </h3>
              <button
                onClick={() => showAlert(id)}
                data-modal-toggle="popup-modal"
                type="button"
                className={`mr-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-gray-300 ${
                  type === "success"
                    ? "bg-green-600 hover:bg-green-800"
                    : type === "error"
                    ? "bg-red-600 hover:bg-red-800"
                    : "bg-yellow-600 hover:bg-yellow-800"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
