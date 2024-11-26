import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addToCart } from '../actions/cartActions'; // Replace with your action import

const ProductVariant = ({ product }) => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (selectedSize && quantity > 0) {
            // dispatch(addToCart({ ...product, size: selectedSize, quantity }));
        }
    };

    return (
        <div style={{ padding: 12, backgroundColor: '', margin: 12 }} >
            <img
                src={product.cover_image}
                alt={product.title}
                width={220}

            />
            <div className="product-details">
                <h4>{product.title}</h4>
                <p>Price: ${product.price}</p>
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    {product?.variants?.map(({ size }) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                <div className="quantity-container" style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    {quantity === 0 && (
                        <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>
                            Out of Stock
                        </span>
                    )}
                </div>
                <button
                    onClick={handleAddToCart}
                    disabled={!selectedSize || quantity === 0}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductVariant;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// // import { addToCart } from '../actions/cartActions'; // Replace with your action import

// const ProductVariant = ({ product }) => {
//     const dispatch = useDispatch();
//     const [selectedSize, setSelectedSize] = useState('');
//     const [quantity, setQuantity] = useState(1);

//     const handleAddToCart = () => {
//         if (selectedSize && quantity > 0) {
//             // dispatch(addToCart({ ...product, size: selectedSize, quantity }));
//         }
//     };

//     return (
//         <div className="product-variant-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '16px' }}>
//             <img
//                 src={product.cover_image}
//                 alt={product.title}
//                 width={220}
//                 height={220}
//             />
//             <div className="product-details">
//                 <h4>{product.title}</h4>
//                 <p>Price: ${product.price}</p>
//                 <select
//                     value={selectedSize}
//                     onChange={(e) => setSelectedSize(e.target.value)}
//                 >
//                     {product?.variants?.map(({ size }) => (
//                         <option key={size} value={size}>
//                             {size}
//                         </option>
//                     ))}
//                 </select>
//                 <div className="quantity-container" style={{ display: 'flex', alignItems: 'center' }}>
//                     <input
//                         type="number"
//                         min={1}
//                         value={quantity}
//                         onChange={(e) => setQuantity(parseInt(e.target.value))}
//                     />
//                     {quantity === 0 && (
//                         <span style={{ marginLeft: '8px', textDecoration: 'line-through' }}>
//                             Out of Stock
//                         </span>
//                     )}
//                 </div>
//                 <button
//                     onClick={handleAddToCart}
//                     disabled={!selectedSize || quantity === 0}
//                 >
//                     Add to Cart
//                 </button>
//             </div>
//             {/* Additional product details (if applicable) */}
//         </div>
//     );
// };

// export default ProductVariant;



// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // // import { addToCart } from '../actions/cartActions'; // Replace with your action import

// // const ProductVariant = ({ product }) => {
// //     const dispatch = useDispatch();
// //     const [selectedSize, setSelectedSize] = useState('');
// //     const [quantity, setQuantity] = useState(1);

// //     const handleAddToCart = () => {
// //         if (selectedSize && quantity > 0) {
// //             // dispatch(addToCart({ ...product, size: selectedSize, quantity }));
// //         }
// //     };

// //     return (
// //         <div className="product-variant" style={{ display: 'grid', gridTemplateColumns: '1fr', gridGap: '16px', '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' } }}>
// //             <img
// //                 src={product.cover_image}
// //                 alt={product.title}
// //                 style={{ borderRadius: '8px', width: '100%', height: 'auto', '@media (min-width: 768px)': { height: '200px' } }}
// //             />
// //             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
// //                 <div>
// //                     <h4 style={{ fontSize: '1.125rem', fontWeight: 'medium', marginBottom: '8px' }}>{product.title}</h4>
// //                     <p style={{ color: '#717171', marginBottom: '16px' }}>Price: ${product.price}</p>
// //                     <select
// //                         value={selectedSize}
// //                         onChange={(e) => setSelectedSize(e.target.value)}
// //                         style={{
// //                             border: '1px solid #ddd',
// //                             borderRadius: '4px',
// //                             padding: '8px 12px',
// //                             marginBottom: '16px',
// //                             outline: 'none',
// //                             '&:focus': {
// //                                 boxShadow: '0 0 0 1px #007bff',
// //                             },
// //                         }}
// //                     >
// //                         {product?.variants?.map(({ size }) => (
// //                             <option key={size} value={size}>
// //                                 {size}
// //                             </option>
// //                         ))}
// //                     </select>
// //                     <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
// //                         <input
// //                             type="number"
// //                             min={1}
// //                             value={quantity}
// //                             onChange={(e) => setQuantity(parseInt(e.target.value))}
// //                             style={{
// //                                 border: '1px solid #ddd',
// //                                 borderRadius: '4px',
// //                                 padding: '8px 12px',
// //                                 width: '100px',
// //                                 outline: 'none',
// //                                 '&:focus': {
// //                                     boxShadow: '0 0 0 1px #007bff',
// //                                 },
// //                             }}
// //                         />
// //                         {quantity === 0 && (
// //                             <span style={{ marginLeft: '8px', color: '#999', textDecoration: 'line-through' }}>
// //                                 Out of Stock
// //                             </span>
// //                         )}
// //                     </div>
// //                 </div>
// //                 <button
// //                     onClick={handleAddToCart}
// //                     disabled={!selectedSize || quantity === 0}
// //                     style={{
// //                         backgroundColor: '#007bff',
// //                         color: '#fff',
// //                         padding: '8px 16px',
// //                         borderRadius: '4px',
// //                         fontWeight: 'medium',
// //                         cursor: !selectedSize || quantity === 0 ? 'not-allowed' : 'pointer',
// //                         opacity: !selectedSize || quantity === 0 ? 0.5 : 1,
// //                         '&:hover': {
// //                             backgroundColor: '#0067cc',
// //                         },
// //                     }}
// //                 >
// //                     Add to Cart
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProductVariant;




// // // import React, { useState } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // // import { addToCart } from '../actions/cartActions'; // Replace with your action import

// // // const ProductVariant = ({ product }) => {
// // //     // const dispatch = useDispatch();
// // //     const [selectedSize, setSelectedSize] = useState('');
// // //     const [quantity, setQuantity] = useState(1);

// // //     const handleAddToCart = () => {
// // //         if (selectedSize && quantity > 0) {
// // //             // dispatch(addToCart({ ...product, size: selectedSize, quantity }));
// // //         }
// // //     };

// // //     return (
// // //         <div className="product-variant">
// // //             <img src={product.cover_image} alt={product.title} width={220} />
// // //             <h4>{product.title}</h4>
// // //             <p>Price: ${product.price}</p>
// // //             <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
// // //                 {product?.variants?.map(({ size }) => (
// // //                     <option key={size} value={size}>{size}</option>
// // //                 ))}
// // //             </select>
// // //             <input
// // //                 type="number"
// // //                 min={1}
// // //                 value={quantity}
// // //                 onChange={e => setQuantity(parseInt(e.target.value))}
// // //             />
// // //             <button onClick={handleAddToCart} disabled={!selectedSize || quantity === 0}>
// // //                 Add to Cart
// // //             </button>
// // //             {/* {/* Apply strikethrough styling based on quantity */}
// // //             {quantity === 0 && <span style={{ textDecoration: 'line-through' }}>Out of Stock</span>}
// // //         </div>
// // //     );
// // // };

// // // export default ProductVariant;
