import { ProductsProps } from '@/data/products';
//test comment 
type ProductModalProps = {
    selectedProduct: ProductsProps;
    onClose: () => void;
};

export const ProductModal = ({ selectedProduct, onClose }: ProductModalProps) => {
    return (
        <div
            className="fixed inset-0 bg-black dark:bg-white dark:bg-opacity-40 bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto p-4 md:p-0 animate-fadeIn"
            onClick={onClose}
        >
            {/* Close Button */}
            <div
                className="relative bg-white dark:bg-black rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-3 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-3xl"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Left Column */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
                    <p className="text-xs font-bold mb-4 text-gray-400">{selectedProduct.description}</p>
                    <img
                        src={`/images/products/${selectedProduct.image}.png`}
                        alt={selectedProduct.title}
                        className="w-full h-auto object-contain max-h-64 md:max-h-80"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-start">
                    <table className="w-full text-left">
                        <tbody>
                            {selectedProduct.feature.map((feature, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-1 pr-4 font-medium text-gray-600 text-sm dark:text-gray-400">
                                        {feature.label}
                                    </td>
                                    <td className="py-1 text-gray-800 text-sm dark:text-white">
                                        {feature.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
