export default function Main() {
    return (
        <div> 
            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            {/* <img class="w-full h-auto rounded-t-xl" src="../docs/assets/img/500x300/img1.jpg" alt="Image Description"> */}
            <div class="p-4 md:p-5">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
                </h3>
                <p class="mt-1 text-gray-800 dark:text-gray-400">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a class="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                Go somewhere
                </a>
            </div>
        </div>
    </div>);
}