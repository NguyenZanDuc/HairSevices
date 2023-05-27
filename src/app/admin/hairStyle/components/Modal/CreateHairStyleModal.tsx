import React from 'react'

type Props = {}

const CreateHairStyleModal = (props: Props) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-full h-full p-4 overflow-y-auto bg-gray-800 bg-opacity-80">
        <div className="w-full max-w-xl px-6 pt-6 pb-8 mx-auto bg-gray-500 rounded-xl">
            <div className="max-w-sm mx-auto mb-10 text-center">
                <h4 className="mb-4 text-2xl font-semibold text-gray-100">AIR 1 MID - High sneakers</h4>
                <p className="font-medium leading-6 text-gray-300">The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look</p>
            </div>
            <form action="">
            <div className="relative w-full px-3 py-4 mb-10 border border-gray-400 rounded-lg h-14 focus-within:border-green-500">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Email</span>
                <input className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none" id="modalInput7-1" type="email"/>
            </div>
            <div className="flex flex-wrap mb-10 -mx-3">
                <div className="w-full px-3 mb-10 sm:w-2/4 sm:mb-0">
                <div className="relative w-full px-3 py-4 border border-gray-400 rounded-lg h-14 focus-within:border-green-500">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Card number</span>
                    <input className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none" id="modalInput7-2" type="text"/>
                </div>
                </div>
                <div className="w-1/2 px-3 sm:w-1/4">
                <div className="relative w-full px-3 py-4 border border-gray-400 rounded-lg h-14 focus-within:border-green-500">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Expiry</span>
                    <input className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none" id="modalInput7-3" type="text"/>
                </div>
                </div>
                <div className="w-1/2 px-3 sm:w-1/4">
                <div className="relative w-full px-3 py-4 border border-gray-400 rounded-lg h-14 focus-within:border-green-500">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">CVC</span>
                    <input className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none" id="modalInput7-4" type="text"/>
                </div>
                </div>
            </div>
            <div className="relative w-full px-3 py-4 mb-10 border border-gray-400 rounded-lg h-14 focus-within:border-green-500">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Cardholder name</span>
                <input className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none" id="modalInput7-5" type="text"/>
            </div>
            <div className="relative w-full px-3 py-4 mb-6 border border-gray-400 rounded-lg h-14 focus-within:border-green-500">
                <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Address</span>
                <input className="block w-full text-sm font-medium text-gray-100 bg-transparent outline-none" id="modalInput7-5" type="text"/>
            </div>
            <button className="block w-full h-12 px-6 py-2 font-semibold leading-6 text-center transition duration-200 bg-blue-500 rounded-lg text-blue-50 hover:bg-blue-600">Pay $95.65</button>
            </form>
        </div>
        </div>
  )
}

export default CreateHairStyleModal