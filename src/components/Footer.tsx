function Footer() {
    return (
      <footer className="w-full h-[5rem] min-h-[13rem] min-w-[20rem] flex flex-col justify-center items-center dark:bg-black bg-white dark:bg-grid-white/[0.14]">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} FlavorGenie. All rights reserved.
        </p>
        <div className="mt-2 flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
            Terms of Service
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  