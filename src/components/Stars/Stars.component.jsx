import shortid from "shortid";

const Stars = ({ stars }) => {
  const starArr = [];
  let totalStars = 5;
  let fillColor = "currentColor";
  while (totalStars !== 0) {
    if (stars <= 0) {
      fillColor = "none";
    }
    starArr.push(
      <svg
        key={shortid.generate()}
        fill={fillColor}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-4 h-4 text-yellow-600"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    );
    totalStars--;
    stars--;
  }
  return starArr;
};
export default Stars;
