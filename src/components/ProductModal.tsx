import { ProductsProps } from '@/data/products';

type ProductModalProps = {
    selectedProduct: ProductsProps;
    onClose: () => void;
};

export const ProductModal = ({ selectedProduct, onClose }: ProductModalProps) => {
    return (
        <div
            className="fixed inset-0 bg-black dark:bg-white dark:bg-opacity-40 bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
            onClick={onClose}
        >
            {/* Close Button */}

            <div
                className="relative bg-white  dark:bg-black rounded-lg shadow-lg w-11/12 max-w-4xl p-3 grid grid-cols-[1fr_2fr] gap-3"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-bold text-3xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Left Column */}
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-bold self-start mb-4">{selectedProduct.title}</h2>
                    <h2 className="text-xs font-bold self-start mb-2 text-gray-400 "> {selectedProduct.description}</h2>
                    <img src={`/images/products/${selectedProduct.image}.png`} alt={selectedProduct.title} className="max-w-full h-auto mt-auto mb-auto" />
                </div>

                {/* Right Column */}
                <div className="flex items-start justify-start pt-12">
                    <table className="w-full text-left">
                        <tbody>
                            {selectedProduct.feature.map((feature, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-1 pr-4 font-medium text-gray-600 text-sm dark:text-gray-400">{feature.label}</td>
                                    <td className="py-1 text-gray-800 text-sm dark:text-white">{feature.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};
