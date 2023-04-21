import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAsync,
  selectProduct
} from "./productsAdminSlice.js";

const ProductsFormsAdmin = (props) => {

  const trigger = props.trigger;
  const setTrigger = props.setTrigger;

  const dispatch = useDispatch();
  const product = useSelector(selectProduct);


  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    let dataObject = {
      name,
      price,
      quantity,
      imageUrl,
      description,
    };

    if (imageUrl === "") {
        delete dataObject.imageUrl;
      }

    await dispatch(addProductAsync(dataObject));
    setName("");
    setPrice(0);
    setQuantity(0);
    setImageUrl("");
    setDescription("");

    return setTrigger(!trigger);
  };

  return (
    <div className="Product-form-container">
      <h1>Add Product</h1>
      <form method="post" id="addCProduct-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Product Name (Required)"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br></br>
        <label htmlFor="price">Campus Address: </label>
        <input
          type="number"
          name="price"
          placeholder="Price (Required)"
          value={address}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br></br>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity (Required)"
          value={address}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <br></br>
        <label htmlFor="imageUrl">Image URL: </label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <br></br>
        <label htmlFor="description">Description : </label>
        <textarea
          name="description"
          placeholder="Enter description of product"
          rows="5"
          cols="40"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br></br>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductsFormsAdmin;
