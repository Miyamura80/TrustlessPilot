export default function WriteReview() {
  return (
    <>
      <form>
        <div className="mb-4 w-full bg-gray-50 rounded-3xl border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="py-2 px-4 bg-white rounded-t-3xl dark:bg-gray-800">
            <label for="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              class="px-4 py-2 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a review..."
              required=""
            ></textarea>
          </div>
          <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-white bg-blue-700 rounded-3xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-600 hover:bg-blue-800"
            >
              Post review
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
