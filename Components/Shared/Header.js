import { useState } from 'react';
import { useRouter } from 'next/router';
// import { signIn, useSession,signOut } from "next-auth/client";
import Image from 'next/image';

function Header({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  // const [session] = useSession();

  const viewprofile = (e) => {
    router.push({
      pathname: '/profile',
    });
  };

  return (
    <div className="shadow-md">
      <nav className="flex items-center flex-wrap px-4 py-5  container mx-auto">
        <a
          onClick={() => router.replace('/')}
          className="font-medium hover:text-blue-800 mr-auto text-2xl text-blue-600 uppercase"
        >
          {' '}
          DIU Transport
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded text-blue-600 lg:hidden"
          data-name="nav-toggler"
          data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
        >
          <span className="block border-b-2 border-current my-1 w-6"></span>
          <span className="block border-b-2 border-current my-1 w-6"></span>
          <span className="block border-b-2 border-current my-1 w-6"></span>
        </button>
        {/* <h1>{user}</h1>     */}
        <div
          className="lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto space-y-2 w-full flex-1 lg:justify-between"
          data-name="nav-menu"
        >
          <div
            className={`flex flex-col lg:flex-row w-full mx-auto text-center ${
              isOpen ? 'items-center' : 'hidden lg:block'
            }`}
          >
            <a
              onClick={() => router.replace('/')}
              className="font-light hover:text-blue-600 lg:px-4 py-2 px-0 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => router.replace('/mytickets')}
              className="font-light hover:text-blue-600 lg:px-4 py-2 px-0 cursor-pointer"
            >
              My Ticket
            </a>

            <a
              onClick={() => router.replace('/alltrips')}
              className="font-light hover:text-blue-600 lg:px-4 py-2 px-0 cursor-pointer"
            >
              All Trips
            </a>
            {/* <Image src={session.user.image}
      alt="Picture of the author"
      width={500}
      height={500}/> */}
            {/* <img
              onClick={() => router.replace('/profile')}
              loading="lazy"
              className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${
                isOpen ? '' : 'hidden'
              }`}
              // src={session?.user.image}
              alt="Proflepic"
            /> */}
          </div>
          {/* <a href="#" class="bg-blue-600 font-light inline-block px-5 py-2 rounded text-white hover:bg-blue-700">Sign Up</a>  */}
          {/* <img
            onClick={() => router.replace('/profile')}
            loading="lazy"
            className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110  hidden lg:block`}
            // src={session?.user.image}
            alt="Proflepic"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-blue-600 self-end"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}

export default Header;
