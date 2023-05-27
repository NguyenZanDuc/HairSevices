import React from 'react'
import HairStyleTable from './components/Table/HairStyleTable'
import CreateHairStyleModal from './components/Modal/CreateHairStyleModal'

type Props = {}

const page = ({
    searchParams
}:{
    searchParams: {
        isModal: boolean
    }
}) => {
  return (
    <section className="py-4">
        <div className="container px-4 mx-auto">
            <div className="pt-4 bg-white rounded shadow">
            <div className="px-6 border-b border-blue-50">
                <div className="flex flex-wrap items-center mb-4">
                <div>
                    <h3 className="text-xl font-bold">Project Progress Data</h3>
                    <p className="text-sm font-medium text-gray-500">List of recent contracts and freelancers</p>
                </div>
                {searchParams.isModal && (
                   <CreateHairStyleModal/>
                )}
                <a className="flex items-center px-3 py-2 ml-auto text-xs text-white bg-indigo-500 rounded hover:bg-indigo-600" href="/admin/hairStyle?isModal=true">
                    <span className="mr-1">
                    <svg className="w-3 h-3 text-indigo-300" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 8.33337C12.6 8.33337 12.3333 8.60004 12.3333 9.00004V11.6667C12.3333 12.0667 12.0666 12.3334 11.6666 12.3334H2.33331C1.93331 12.3334 1.66665 12.0667 1.66665 11.6667V9.00004C1.66665 8.60004 1.39998 8.33337 0.99998 8.33337C0.59998 8.33337 0.333313 8.60004 0.333313 9.00004V11.6667C0.333313 12.8 1.19998 13.6667 2.33331 13.6667H11.6666C12.8 13.6667 13.6666 12.8 13.6666 11.6667V9.00004C13.6666 8.60004 13.4 8.33337 13 8.33337ZM4.79998 4.13337L6.33331 2.60004V9.00004C6.33331 9.40004 6.59998 9.66671 6.99998 9.66671C7.39998 9.66671 7.66665 9.40004 7.66665 9.00004V2.60004L9.19998 4.13337C9.46665 4.40004 9.86665 4.40004 10.1333 4.13337C10.4 3.86671 10.4 3.46671 10.1333 3.20004L7.46665 0.533374C7.19998 0.266707 6.79998 0.266707 6.53331 0.533374L3.86665 3.20004C3.59998 3.46671 3.59998 3.86671 3.86665 4.13337C4.13331 4.40004 4.53331 4.40004 4.79998 4.13337Z" fill="currentColor"></path>
                    </svg>
                    </span>
                    <span>Report</span>
                </a>
                </div>
                <div><a className="inline-block px-4 pb-2 text-sm font-medium text-indigo-500 border-b-2 border-indigo-500" href="#">Progress</a><a className="inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300" href="#">Completed</a><a className="inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300" href="#">Invoices</a></div>
            </div>
            <div className="overflow-x-auto">
                <HairStyleTable />
                <div className="py-4 text-center">
                <a className="inline-flex items-center text-xs font-medium text-indigo-500 hover:text-blue-600" href="#">
                    <span className="mr-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99984 8.66669H1.33317C1.15636 8.66669 0.98679 8.73692 0.861766 8.86195C0.736742 8.98697 0.666504 9.15654 0.666504 9.33335V14.6667C0.666504 14.8435 0.736742 15.0131 0.861766 15.1381C0.98679 15.2631 1.15636 15.3334 1.33317 15.3334H3.99984C4.17665 15.3334 4.34622 15.2631 4.47124 15.1381C4.59627 15.0131 4.6665 14.8435 4.6665 14.6667V9.33335C4.6665 9.15654 4.59627 8.98697 4.47124 8.86195C4.34622 8.73692 4.17665 8.66669 3.99984 8.66669ZM3.33317 14H1.99984V10H3.33317V14ZM14.6665 6.00002H11.9998C11.823 6.00002 11.6535 6.07026 11.5284 6.19528C11.4034 6.32031 11.3332 6.48988 11.3332 6.66669V14.6667C11.3332 14.8435 11.4034 15.0131 11.5284 15.1381C11.6535 15.2631 11.823 15.3334 11.9998 15.3334H14.6665C14.8433 15.3334 15.0129 15.2631 15.1379 15.1381C15.2629 15.0131 15.3332 14.8435 15.3332 14.6667V6.66669C15.3332 6.48988 15.2629 6.32031 15.1379 6.19528C15.0129 6.07026 14.8433 6.00002 14.6665 6.00002ZM13.9998 14H12.6665V7.33335H13.9998V14ZM9.33317 0.666687H6.6665C6.48969 0.666687 6.32012 0.736925 6.1951 0.861949C6.07007 0.986973 5.99984 1.15654 5.99984 1.33335V14.6667C5.99984 14.8435 6.07007 15.0131 6.1951 15.1381C6.32012 15.2631 6.48969 15.3334 6.6665 15.3334H9.33317C9.50998 15.3334 9.67955 15.2631 9.80457 15.1381C9.9296 15.0131 9.99984 14.8435 9.99984 14.6667V1.33335C9.99984 1.15654 9.9296 0.986973 9.80457 0.861949C9.67955 0.736925 9.50998 0.666687 9.33317 0.666687ZM8.6665 14H7.33317V2.00002H8.6665V14Z" fill="#8880EB"></path>
                    </svg>
                    </span>
                    <span>See more Projects</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default page