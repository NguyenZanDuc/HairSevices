import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <section className="overflow-hidden">
  <nav className="flex items-center justify-between py-3.5 xl:py-2.5 px-7 bg-neutral-50">
    <div className="w-full px-2 xl:w-auto xl:mr-10">
      <div className="flex items-center justify-between">
        <a className="inline-flex items-center h-7" href="#">Logo
        </a>
        <div className="xl:hidden">
          <button className="text-gray-400 navbar-burger hover:text-gray-300 focus:outline-none">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="hidden w-full px-2 mr-auto xl:block md:w-auto">
      <ul className="flex items-center">
        <li className="mr-10"><a className="inline-block group" href="#"><span className="text-sm font-medium text-neutral-600 group-hover:text-black group-hover:bg-gradient-purple-top bg-clip-text">Home</span></a></li>
        <li className="mr-10"><a className="inline-block group" href="#"><span className="text-sm font-medium text-neutral-600 group-hover:text-black bg-gradient-purple-top bg-clip-text">Projects</span></a></li>
        <li className="mr-10"><a className="inline-block group" href="#"><span className="text-sm font-medium text-neutral-600 group-hover:text-black group-hover:bg-gradient-purple-top bg-clip-text">What is Dashy?</span></a></li>
      </ul>
    </div>
    <div className="hidden w-full px-2 xl:block md:w-auto">
      <div className="items-center md:flex">
        <div className="w-full mb-6 md:w-auto md:mb-0">
          <div className="flex flex-wrap items-center">
            <div className="relative flex items-center mr-4 border rounded-lg w-52 border-neutral-100 focus-within:border-neutral-600 hover:bg-gray-50">
              <input className="w-full px-4 py-2 pr-12 text-sm outline-nonnetext-neutral-600blatext-black text-neutral-400 placeholder-neutral-400" id="horizontalNav4-1" type="text" placeholder="Search..."/>
              <div className="absolute right-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L15.2197 16.2803ZM11.7803 10.7197C11.4874 10.4268 11.0126 10.4268 10.7197 10.7197C10.4268 11.0126 10.4268 11.4874 10.7197 11.7803L11.7803 10.7197ZM12 7.5C12 9.98528 9.98528 12 7.5 12V13.5C10.8137 13.5 13.5 10.8137 13.5 7.5H12ZM7.5 12C5.01472 12 3 9.98528 3 7.5H1.5C1.5 10.8137 4.18629 13.5 7.5 13.5V12ZM3 7.5C3 5.01472 5.01472 3 7.5 3V1.5C4.18629 1.5 1.5 4.18629 1.5 7.5H3ZM7.5 3C9.98528 3 12 5.01472 12 7.5H13.5C13.5 4.18629 10.8137 1.5 7.5 1.5V3ZM16.2803 15.2197L11.7803 10.7197L10.7197 11.7803L15.2197 16.2803L16.2803 15.2197Z" fill="#B8C1CC"></path>
                </svg>
              </div>
            </div>
            <a className="inline-block mr-4" href="#">
              <div className="flex items-center justify-center h-8 gap-4 rounded-full bg-neutral-100">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12.75V13.5C15.3033 13.5 15.5768 13.3173 15.6929 13.037C15.809 12.7568 15.7448 12.4342 15.5303 12.2197L15 12.75ZM3 12.75L2.46967 12.2197C2.25517 12.4342 2.191 12.7568 2.30709 13.037C2.42318 13.3173 2.69665 13.5 3 13.5V12.75ZM4.0537 11.6963L4.58403 12.2266H4.58403L4.0537 11.6963ZM7.5 4.00606L7.74993 4.71319C8.04963 4.60726 8.25 4.32392 8.25 4.00606H7.5ZM10.5 4.00606H9.75C9.75 4.32392 9.95037 4.60726 10.2501 4.71319L10.5 4.00606ZM3.53033 13.2803L4.58403 12.2266L3.52337 11.166L2.46967 12.2197L3.53033 13.2803ZM5.25 10.6188V8.25H3.75V10.6188H5.25ZM12.75 8.25V10.6188H14.25V8.25H12.75ZM13.416 12.2266L14.4697 13.2803L15.5303 12.2197L14.4766 11.166L13.416 12.2266ZM4.58403 12.2266C5.01044 11.8002 5.25 11.2219 5.25 10.6188H3.75C3.75 10.8241 3.66848 11.0209 3.52337 11.166L4.58403 12.2266ZM12.75 10.6188C12.75 11.2219 12.9896 11.8002 13.416 12.2266L14.4766 11.166C14.3315 11.0209 14.25 10.8241 14.25 10.6188H12.75ZM7.25007 3.29893C5.21199 4.01929 3.75 5.96295 3.75 8.25H5.25C5.25 6.6184 6.29243 5.22834 7.74993 4.71319L7.25007 3.29893ZM10.2501 4.71319C11.7076 5.22834 12.75 6.6184 12.75 8.25H14.25C14.25 5.96295 12.788 4.01929 10.7499 3.29893L10.2501 4.71319ZM11.25 4.00606V3.75H9.75V4.00606H11.25ZM6.75 3.75V4.00606H8.25V3.75H6.75ZM9 1.5C7.75736 1.5 6.75 2.50736 6.75 3.75H8.25C8.25 3.33579 8.58579 3 9 3V1.5ZM11.25 3.75C11.25 2.50736 10.2426 1.5 9 1.5V3C9.41421 3 9.75 3.33579 9.75 3.75H11.25ZM10.5 13.5C10.5 14.3284 9.82843 15 9 15V16.5C10.6569 16.5 12 15.1569 12 13.5H10.5ZM9 15C8.17157 15 7.5 14.3284 7.5 13.5H6C6 15.1569 7.34315 16.5 9 16.5V15ZM15 12H11.25V13.5H15V12ZM12 13.5V12.75H10.5V13.5H12ZM11.25 12H6.75V13.5H11.25V12ZM6.75 12H3V13.5H6.75V12ZM7.5 13.5V12.75H6V13.5H7.5Z" fill="#0C1523"></path>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6668 6L8.00016 10.6667L3.3335 6" stroke="#0C1523" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</section>
  )
}

export default Navigation