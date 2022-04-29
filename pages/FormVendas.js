import React from "react";
import Head from 'next/head'
import MenuHeader from '../components/MenuHeader'
import SideBar from '../components/SideBar'

export default function FormVendas() {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Head>
                <title>Overcell</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideBar />
            <div className="flex flex-col flex-1 w-full">
                <MenuHeader />
                <main className="h-full pb-16 overflow-y-auto">
                    <div className="container px-6 mx-auto grid">
                        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            Cadastro de Venda
                        </h2>
                        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <label className="block text-sm">
                                <span className="text-gray-700 dark:text-gray-400">Name</span>
                                <input
                                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                    placeholder="Jane Doe" />
                            </label>

                            <label className="block mt-4 text-sm">
                                <span className="text-gray-700 dark:text-gray-400">
                                    Requested Limit
                                </span>
                                <select
                                    className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                                    <option>$1,000</option>
                                    <option>$5,000</option>
                                    <option>$10,000</option>
                                    <option>$25,000</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}