function Footer() {
  const hour = new Date().getHours();
  const open = 10;
  const close = 23;
  const isOpen = hour > open && hour < close;

  if (isOpen) {
    return (
      <footer>
        <div className=" mt-8 text-center bg-red-500">
          <p className="text-xl text-white pt-4">
            {`We're open from ${open} to ${close}. Come visit us or order online!`}
          </p>
          <button className="bg-white rounded-full p-2 m-4 hover:bg-red-400 hover:text-white">
            Order now
          </button>
        </div>
      </footer>
    );
  } else {
    return (
      <footer>
        <div className=" mt-8 text-center bg-red-500">
          <p className="text-2xl py-4  text-white">We're closed</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
