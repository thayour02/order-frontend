import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function CartItems() {
    return (
        <div className="pt-20 max-w-screen-2xl xl:px-24 px-10 px-4">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                className="flex flex-col justify-center items-center gap-8">
                {/* text */}
                <div className="text-center">
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
                        className="pt-10 mb-10 md:text-5xl text-4xl font-bold md:leading-snug leading-snug">Items in Your
                        <span className="text-green-600"> Food Cart</span>
                    </motion.h1>

                </div>
            </motion.div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-green-500 text-white  rounded-sm">
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                     
                        
                    </tbody>
                 
                </table>
            </div>

        </div>
    )
}