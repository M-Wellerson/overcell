import React from "react";
import CardsHome from "./CardsHome";
import LIstProducts from "./ListProducts";
import Link from 'next/link'

export default function Main() {
    return (
        <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">
                <div className="grid grid-cols-6 gap-4">
                    <h2 className="text-2xl my-6 font-semibold text-gray-700 dark:text-gray-200 .col-span-2">
                        Produtos
                    </h2>
                    <Link href="/FormVendas">
                        <button className="col-span-2 w-10 h-10 my-6 flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" aria-label="Edit" >
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" ></path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <LIstProducts />
            </div>
        </main>
    );
}