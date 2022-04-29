import React from "react";
import { useState } from 'react';
import { PrismaClient, Contact, Prisma } from '@prisma/client';


export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany();
    console.log(products);
    return {
        props: {
            initialProducts: products
        }
    };
}

async function saveProduct(product) {
    const response = await fetch('/api/product', {
        method: 'POST',
        body: JSON.stringify(product)
    })

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export default function SellTable(initialProducts) {
    const [products, setProducts] = useState(initialProducts);
    console.log(products)
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                    <thead>
                        <tr
                            className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                            <th className="px-4 py-3">Nome</th>
                            <th className="px-4 py-3">Valor compra</th>
                            <th className="px-4 py-3">Valor venda</th>
                            <th className="px-4 py-3">Qt. estoque</th>
                            <th className="px-4 py-3">Edição</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <tr className="text-gray-700 dark:text-gray-400">
                            <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                    <div>
                                        <p className="font-semibold">Fone de Ouvido JBL</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">
                                            Código: 1</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                                R$ 100,00
                            </td>
                            <td className="px-4 py-3 text-sm">
                                R$ 120,00
                            </td>
                            <td className="px-4 py-3 text-sm">
                                200
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex items-center space-x-4 text-sm">
                                    <button
                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                        aria-label="Edit">
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div
                className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                <span className="flex items-center col-span-3">
                    Mostrando 21-30 of 100
                </span>
                <span className="col-span-2"></span>

                <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                        <ul className="inline-flex items-center">
                            <li>
                                <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Previous">
                                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                        <path
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    1
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    2
                                </button>
                            </li>
                            <li>
                                <span className="px-3 py-1">...</span>
                            </li>
                            <li>
                                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    8
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                    9
                                </button>
                            </li>
                            <li>
                                <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Next">
                                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                        <path
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </span>
            </div>
        </div>
    );
}